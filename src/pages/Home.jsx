import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Home = () => {
    const{id}=useParams()
  let [users, setUsers] = useState([]);

  useEffect(() => {
    loaduser();
  }, []);
  let loaduser = async () => {
      let result = await axios.get('http://localhost:1212/users');
      setUsers(result.data.Data ); 
  };

 let deleteuser=async(id)=>{
    await axios.delete(`http://localhost:1212/users/${id}`)
    loaduser()
 }

  return (
    <div className="container">
      <div className="py-5">
        <table className="table border shadow">
          <thead>
            <tr className="text-center">
              <th scope="col">ID</th>
              <th scope="col">Username</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
              
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="text-center">
                <th scope="row">{index + 1}</th>
                <td>{user.username}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    <Link className='btn btn-primary mx-2' to="/viewuser" >view</Link>
                <Link className='btn btn-outline-primary mx-2' to={`/edituser/${user.id}`}>Edit</Link>
                <button className='btn btn-danger mx-2' onClick={()=>deleteuser(user.id)}>update</button>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
