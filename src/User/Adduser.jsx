import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const Adduser = () => {
  const navigate = useNavigate();

  const [user, setUsers] = useState({
    username: '',
    name: '',
    email: '',
  });
  const { username, name, email } = user;
  const onInputChange = (e) => {
    setUsers({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:1212/user', user);
      navigate('/');
    } catch (error) {
      console.error('Error while adding user:', error);
      alert('Failed to add user. Please check the console for more details.');
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>

          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your username"
                name="username"
                value={username}
                onChange={onInputChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={onInputChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={onInputChange}
              />
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
              <Link
                className="btn btn-outline-danger mx-2" to="/"
                onClick={() => navigate('/')  }
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Adduser;
