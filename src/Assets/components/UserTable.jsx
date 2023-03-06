import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function UserTable() {

    const [array, setarray] = useState([])
    useEffect(() => {
        getUserData()
    }, [])
    const getUserData = () => {
        axios.get('https://student-api.mycodelibraries.com/api/user/get').then((res) => {
            setarray([...res.data.data])
            getUserData();
        })
    }
    const deleteUser = (s) => {
        axios.delete(`https://student-api.mycodelibraries.com/api/user/delete?id=${s}`).then((res) => {
            getUserData();
        })
    }
    
    return (
        <>
            <Link to='/homePage'><button type='button'>Go to home page</button></Link>

            <table className='table mt-5 text-center'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Profile</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>hobbies</th>
                        <th>City</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        array.map((x, i) => {
                            return <tr>
                                <td>{i + 1}</td>
                                <td><img src={x.image} width='50px' alt="" /></td>
                                <td>{x.firstName}</td>
                                <td>{x.lastName}</td>
                                <td>{x.age}</td>
                                <td>{x.gender}</td>
                                <td>{x.hobbies}</td>
                                <td>{x.city}</td>
                                <td>
                                    <Link to = {`/userForm/${x._id}`}><button className='btn btn-warning py-1'>EDIT</button></Link>
                                    <button className='btn btn-danger py-1 ms-2' onClick={() => deleteUser(x._id)}>DELETE</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default UserTable