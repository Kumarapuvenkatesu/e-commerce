import React,{useState,useEffect} from "react";
import { getUserById,updateUserById } from "../api/Api";


export const PopUp = ({ id, onClose }) => {

const [formData, setFormData] = useState({
    username:'',
    email:"",
    role:''
});

const fetcheduseddata=async()=>{
    try {
        const response = await getUserById(id);
        setFormData({
            username: response.data.username,
            email: response.data.email,
            role: response.data.role
        });
    } catch (error) {
        console.error("Error fetching user data:", error.response?.data || error.message);
    }
}

useEffect(()=>{
    fetcheduseddata();
},[id])

const handlechange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({...prevData,[name]: value}))
}

const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        const response = await updateUserById(id, formData);
        console.log("User updated successfully:", response.data);
        alert("User updated successfully");
        onClose();
    } catch (error) {
        console.error("Error updating user data:", error.response?.data || error.message);
    }
}

    return (
        <div className="popup-overlay">
        <div className="popup-content">
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" placeholder="Enter Name" name="username" value={formData.username} onChange={handlechange}/></div>
                    <div><input type="email" placeholder="Enter email" name="email" value={formData.email} onChange={handlechange}/></div>
                    <div>
                        <div>
                        <select name="role" value={formData.role} onChange={handlechange}>
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                        </select>
                        </div>
                    <button  type="submit">submit </button>
                    <button onClick={onClose} type="button">Close</button>
                </div>
            </form>
            
        </div>
        </div>
    );
}