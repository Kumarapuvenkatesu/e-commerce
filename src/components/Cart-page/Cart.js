import React, { useContext, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { ProductsContext } from "../../Context/Context";

const Cart = () => {
  const { cartProduct } = useContext(ProductsContext);

  // State to manage selected image per product by product id
  const [selectedImages, setSelectedImages] = useState({});

  // Function to handle image selection
  const handleImageClick = (productId, imageUrl) => {
    setSelectedImages(prev => ({
      ...prev,
      [productId]: imageUrl,
    }));
  };

  return (
    <Box>
      <center><h1>Cart Products</h1></center>
      {cartProduct.length === 0 ? (
        <center>No products</center>
      ) : (
        <Box>
          {cartProduct.map((product) => (
            <Box key={product.id} sx={{ display: "flex", mb: 4, p: 2, border: "1px solid #ccc" }}>
              <Box>
                {/* Show selected image or default to the first one */}
                <Box>
                  <img
                    src={selectedImages[product.id] || product.images[0]}
                    alt="main"
                    width={200}
                    height={200}
                  />
                </Box>

                {/* Thumbnails */}
                <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
                  {product.images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`thumbnail-${index}`}
                      width={100}
                      height={100}
                      style={{
                        border: selectedImages[product.id] === img ? "2px solid blue" : "1px solid gray",
                        cursor: "pointer",
                        marginRight: "5px",
                      }}
                      onClick={() => handleImageClick(product.id, img)}
                    />
                  ))}
                </Box>
              </Box>

              {/* Product Info */}
              <Box sx={{ ml: 3 }}>
                <Typography variant="h5">{product.description}</Typography>
                <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                  <Button variant="outlined">+</Button>
                  <Typography sx={{ mx: 2 }}>{product?.quantity}</Typography>
                  <Button variant="outlined">-</Button>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Cart;
