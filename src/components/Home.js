import React,{useState,useEffect} from 'react';
import { getAllProducts } from '../api/Api'; 
import { PopUp } from './PopUp';

const Home = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const fetchData=async()=>{
      try {
        const response = await getAllProducts();
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