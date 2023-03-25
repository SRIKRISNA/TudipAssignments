import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import './user.css';
import Pagination from "./Pagination";
import Header from './Header';


const ViewUser = () => {
    const [userData, setUserData] = useState([]);

    const showperPage = 5;
    const [pagination, setPagination] = useState({
        start: 0,
        end: showperPage
    })
    const onPaginationChange = (start, end) => {
        setPagination({ start: start, end: end })
    }

    // search & fitler
    const [search, setSearch] = useState("");


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
            <Header search={search} setSearch={setSearch} /><hr></hr>

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
                            userData.slice(pagination.start, pagination.end).filter((item) => {
                                if (search === "") { return item; }
                                else if (item.name.toLowerCase().includes(search.toLowerCase())) { return item; }
                            }).map((curUser, i) => {
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