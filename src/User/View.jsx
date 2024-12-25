import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const View = () => {
    const [user, setUser] = useState({
        username: "",
        name: "",
        email: ""
    });

    const { id } = useParams();

    useEffect(() => {
        loaduser();
    }, []);

    const loaduser = async () => {  
        try {
            const result = await axios.get(`http://localhost:1212/users/{id}`);
            setUser(result.data);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">View User</h2>
                    <div className="card">
                        <div className="card-header text-center">
                            Details of user id: {id}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>Username: </b> {user.username}
                                </li>
                                <li className="list-group-item">
                                    <b>Name:</b> {user.name}
                                </li>
                                <li className="list-group-item">
                                    <b>Email:</b> {user.email}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <center>
                    <Link className="btn btn-primary my-2" to={"/"}>
                        Back to Home
                    </Link>
                    </center>
                </div>
            </div>
        </div>
    );
};

export default View;
