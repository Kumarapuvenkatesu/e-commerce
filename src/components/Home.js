import React,{useState,useEffect} from 'react';
import { getAllUsers,deleteUserById } from '../api/Api'; 
import { PopUp } from './PopUp';

const Home = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const fetchData=async()=>{
      try {
        const response = await getAllUsers();
        setData(response.data);
        console.log("Data fetched successfully:", response.data);
      } catch (error) {
        console.error("Error fetching data:",  error.response?.data || error.message);
        
      }
  }
  useEffect(() => {
  fetchData()
  },[]);

  const handleEdit = (id) => {
    setValue(true);
    setSelectedId(id);
  }
  const deleteUser=async(id)=>{
    try {
     const response = await deleteUserById(id);
      // console.log("User deleted successfully:", response.data);
       alert("User deleted successfully");
       fetchData(); // Refresh the user list after deletion

    } catch (error) {
      console.error("Error deleting user:", error.response?.data || error.message);
    }
  }

  return (
    <div>
     <div>
      <h2>Users List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={()=>handleEdit(user._id)}>Edit</button>
                <button onClick={()=>deleteUser(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {
        value &&(
          <PopUp onClose={()=>setValue(false)} id={selectedId}/>
        )
      }
     </div>
    </div>
  );
}
export default Home;