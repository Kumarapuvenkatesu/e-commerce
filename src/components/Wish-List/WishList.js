import React,{useContext} from "react";
import { Box, Typography } from "@mui/material";
import {ProductsContext} from "../../Context/Context"
const WishList = () => {
 const {wishList}=useContext(ProductsContext)
 console.log("line6in wishlist",wishList)
  return (
    <Box>
      {
       wishList.length===0 ?
       ( <Typography variant="h6" color="textSecondary">
          Your wishlist is empty.
        </Typography>
        )
       :
      (
        <Box>
          <Typography variant="h5" gutterBottom>
            Your Wishlist
          </Typography>
          {wishList.map((product) => (
            <Box
              key={product.id}
              sx={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "12px",
                marginBottom: "10px",
              }}
            >
              <img
                   src={product?.images[0]}
                   alt={product.title}
                   className="image-animation"
                 />
              {/* Add more product info here if available (price, image, etc.) */}
            </Box>
          ))}
        </Box>
      )
      }
    </Box>
  );
};

export default WishList;
