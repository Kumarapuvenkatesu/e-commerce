import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EachProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const fetchEachProduct = async (id) => {
    try {
      const response = await axios.get(`/products/${id}`);
      setProduct(response.data);
      console.log("Each product:", response.data);
    } catch (error) {
      console.log("Error fetching product:", error.message);
    }
  };

  useEffect(() => {
    if (id) {
      fetchEachProduct(id);
    }
  }, [id]);

  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {id}</p>
      {product && (
        <div>
          <p>Name: {product.name}</p>
          <p>Price: {product.price}</p>
          {/* Add more product fields as needed */}
        </div>
      )}
    </div>
  );
};

export default EachProduct;
