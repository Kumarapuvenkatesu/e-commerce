import React, { useState, useEffect,useContext } from "react";
import { getAllProducts } from "../../api/Api";
import "./dashboard.css";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import { Box } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {ProductsContext} from '../../Context/Context'


const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState("All");
  const [category, setCategory] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [favorite, setFavorite] = useState({});

  const {wishList, cartProduct, toggleFavorite,addToCartProduct}=useContext(ProductsContext)


  const fetchProducts = async () => {
    try {
      const response = await getAllProducts();
      setProducts(response.data.products);
      console.log("Products fetched successfully:", response.data?.products);
      const uniqueCategories = [
        "All",
        ...new Set(response.data?.products.map((p) => p.category || 'Uncategorized')),
      ];
      setCategory(uniqueCategories);
    } catch (error) {
      console.error("Error fetching products:", error?.message || error);
    }
  };
  console.log("Products in Dashboard:", category);

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleCategoryClick = (category) => {
    setFilteredCategory(category);
  };


   const filteredProducts = [...products]
    .filter((p) =>
      filteredCategory === "All" ? true : p.category === filteredCategory
    )
    // .filter((p)=>
    //   p.name.toLowerCase().includes(searchTerm.toLowerCase())
    // )
    .sort((a, b) => {
      if (sortOption === "price-asc") return a.price - b.price;
      if (sortOption === "price-desc") return b.price - a.price;
      if (sortOption === "name-asc") return a.name.localeCompare(b.name);
      if (sortOption === "name-desc") return b.name.localeCompare(a.name);
      return 0;
    });

  const handleSortChange=(e)=>{
   setSortOption( e.target.value);
  }
  
   const isFavorited = wishList.some((item) => item.id === filteredProducts.id);
  const goToFavorite=(id)=>{
   setFavorite((prev) => ({
    ...prev,
    [id]: !prev[id],
  }));
  }

  return (

    <div>
      {
        filteredProducts.length===0 ?(
          <div>
            <center>Loading...</center>
          </div>
        ):(
          <div>
               <div className="search-header sorting-componenet">
         <div className="search-header input-container">
           <div><SearchIcon className="search-icon"/></div>
         <input type="text" placeholder="Search..." value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
       </div>
       <div className="search-header">
         <h3>Sort:</h3>
        <select value={sortOption} onChange={handleSortChange}>
            <option defaultChecked>select one</option>
             <option value="price-asc">Price: Low to High</option>
             <option value="price-desc">Price: High to Low</option>
             <option value="name-asc">Name: A to Z</option>
             <option value="name-desc">Name: Z to A</option>
           </select>
       </div>
       </div>
       <div className="dashboard-main-container">
        <div className="products-view">
       {
                filteredProducts.map((product) => (
             <div className="product-card product-position" key={product._id} >
               <div className="product-image">
                {/* <Box className="product-favorite-position" onClick={()=>goToFavorite(product.id)}> 
                  {favorite[product.id]?<FavoriteIcon sx={{color:'red'}}/>:<FavoriteBorderIcon />}
                  </Box> */}
                  <Box className="product-favorite-position" >
                    <FavoriteBorderIcon />
                  </Box>
           

                 <img
                   src={`${process.env.REACT_APP_BASE_URL}${product.image}`}
                   alt={product.name}
                   className="image-animation"
                 />

               </div>
               <div className="product-content">
                 <Link to={`/product/${product._id}`} className="product-link">
                   <h3 className="product-name">{product.name}</h3>
                   <p className="product-description">
                     {product.desc.slice(0, 10)}...{" "}
                     <span className="read-more">Read More</span>
                   </p>
                 </Link>
                 <div className="product-category">{product.category}</div>
                 <div className="product-price-section">
                   <div className="product-price">
                     Price
                     <br />
                     <span>&#8377; &ensp;{product.price}</span>
                   </div>
                   <button className="product-button" onClick={()=>addToCartProduct(product)}>Add To Cart</button>
                 </div>
               </div>
             </div>
           ))
          }
          </div>
          
          <div className="sidebar sidebar-height">
         <h3>Categories :</h3>
         {category.map((category) => (
           <div
             key={category}
             className={`category-item ${
               filteredCategory === category ? "active" : ""
             }`}
             onClick={() => handleCategoryClick(category)}
           >
             {category}
           </div>
         ))}
       </div>
</div>
          </div>
        )
      }
    </div>

  );
};

export default Dashboard;
