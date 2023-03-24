import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import './user.css';

const ViewUser = () => {
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/users').then((res) => {
            console.log(res.data)
            setUserData(res.data);
        }).catch((err) => {
            console.log(err)
        })
    }, []);
    return (
        <div className='viewContainer'>
            <div className="table">
                <Table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userData.map((curUser, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{curUser.name}</td>
                                        <td>{curUser.mobile}</td>
                                        <td>{curUser.email}</td>
                                        <td>{curUser.address}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>

            </div>
        </div>
    )
}

export default ViewUser