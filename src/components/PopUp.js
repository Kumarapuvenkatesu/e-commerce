import React,{useState,useEffect} from "react";


export const PopUp = ({ id, onClose }) => {

const [formData, setFormData] = useState({
    username:'',
    email:"",
    role:''
});

const fetcheduseddata=async()=>{

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