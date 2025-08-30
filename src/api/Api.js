import axios from "axios";
import Axiosinstance from "./Axiosinstance";

export const userLogin=async(data)=>{
    return await Axiosinstance.post('/login',data);
}
export const userSignup=async(data)=>{
    return await Axiosinstance.post('/signup',data);
}
export const userForgotPassword=async(data)=>{
    return await Axiosinstance.post('/forgot-password',data);
}
export const updatePassword=async(data)=>{
    return await Axiosinstance.put('/updatePassword',data);
}

export const getAllUsers=async()=>{
    return await Axiosinstance.get('/getAllUsers')
}

export const getUserById=async(id)=>{
    return await Axiosinstance.get(`/getUser/${id}`);
}

export const updateUserById=async(id,data)=>{
    return await Axiosinstance.put(`/updateUser/${id}`,data);
}

export const deleteUserById=async(id)=>{
    return await Axiosinstance.delete(`/deleteUser/${id}`);
}

export const getAllProducts=async()=>{
    return await axios.get('/products')
}

export const getAllProductsId=async(id)=>{
    return await axios.get(`/products/${id}`);
}