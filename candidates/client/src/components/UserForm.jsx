import React, { useState } from 'react';
import axios from 'axios';
import './user.css';
// import { useNavigate } from "react-router-dom";


const Form = () => {
    const [user, setUser] = useState({
        name:"", mobile:"", email:"", address:""
    })
    // const navigate = useNavigate();

    const handleForm =()=>{ 
        axios({
            url: "http://localhost:5000/adduser",
            method: "POST",
            headers: {
            },
            data: user
        }).then((res)=>{
            // alert("new user added");
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
        // navigate('/');
    }
  return (
    <div className='formContainer'>
        <div className="form">
            <form method='POST'>
            <h2 style={{"textAlign":"center", "color":"#fff"}}>Add New User</h2>
                <input type='text' value={user.name} onChange={(e)=>{setUser({...user, name: e.target.value})}} name='name' placeholder='Enter Name'></input><br/>
                <input type='number' value={user.mobile} onChange={(e)=>{setUser({...user, mobile: e.target.value})}} name='mobile' placeholder='Enter Mobile'></input><br/>
                <input type='email' value={user.email} onChange={(e)=>{setUser({...user, email: e.target.value})}} name='email' placeholder='Enter email'></input><br/>
                <input type='address' value={user.address} onChange={(e)=>{setUser({...user, address: e.target.value})}} name='address' placeholder='Enter address'></input><br/>
                <button onClick={handleForm}>SUBMIT</button>
            </form>
        </div>
    </div>
  )
}

export default Form;