import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import './user.css';
import Pagination from "./Pagination";


const ViewUser = () => {
    const [userData, setUserData] = useState([]);

    const showperPage = 5;
    const [pagination, setPagination] = useState({
        start:0,
        end:showperPage
    })
    const onPaginationChange = (start,end) => {
        setPagination({start:start, end:end})
    }

    // search & fitler
    

    useEffect(() => {
        axios.get('http://localhost:5000/').then((res) => {
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
                            userData.slice(pagination.start, pagination.end).map((curUser, i) => {
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
            <Pagination
                showperPage={showperPage} total={userData.length}
                onPaginationChange={onPaginationChange}
            />
        </div>
    )
}

export default ViewUser