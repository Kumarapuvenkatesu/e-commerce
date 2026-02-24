import Axiosinstance from "./Axiosinstance";

export const AdminLogin = async (data) => {
    return await Axiosinstance.post('/admin/login', data);
}
export const AdminSignup = async (data) => {
    return await Axiosinstance.post('/admin/register', data);
}
export const AddProduct = async (data) => {
    return await Axiosinstance.post('/api/add-product', data);
};
export const EditProduct = async (id, data) => {
    return await Axiosinstance.put(`/api/update-product/${id}`, data);
}
export const DeleteProduct = async (id) => {
    return await Axiosinstance.delete(`/api/delete-product/${id}`);
}
export const userLogin = async (data) => {
    return await Axiosinstance.post('/user/send-otp', data);
}
export const verifyOtp = async (data) => {
    return await Axiosinstance.post('/user/verify-otp', data);
};

export const getAllProducts = async () => {
    return await Axiosinstance.get('/api/get-products')
}
export const getEachProduct = async (id) => {
    return await Axiosinstance.get(`/api/get-product/${id}`)
}
export const addToCart = async (data) => {
    return await Axiosinstance.post('/cart/add-to-cart', data);
};
export const getCartItems = async () => {
    return await Axiosinstance.get('/cart/get-cart-items');
};