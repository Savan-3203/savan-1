import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import '../Css/homeScreen.css'
import home from '../images/home.jpg'
import ProductForm from './ProductForm'
import ProductTable from './ProductTable'
import StudentForm from './StudentForm'
import StudentTable from './StudentTable'
import UserForm from './UserForm'
import UserTable from './UserTable'

function HomeScreen() {
    const logout = () => {
        localStorage.removeItem('data')
        window.location.href = '/'
    }
    return (
        <>
            {/* <BrowserRouter> */}

                <div className="home">
                    <img src={home} alt="" />
                    <div className="sidebar">
                        <ul>
                            <Link to='/homepage/student/Form'><li>Student Form</li></Link>
                            <Link to='/homepage/student/Table'><li>Student Table</li></Link>
                            <Link to='/homepage/product/Form'><li>Product Form</li></Link>
                            <Link to='/homepage/product/Table'><li>Product Table</li></Link>
                            <Link to='/homepage/user/Form'><li>User Form</li></Link>
                            <Link to='/homepage/user/Table'><li>User Table</li></Link>
                            <li><button type='button' onClick={logout}>Logout</button></li>
                        </ul>

                    </div>
                </div>
                {/* <Routes>
                    <Route path='/studentForm' element={<StudentForm />}/>
                    <Route path='/studentForm/:id' element={<StudentForm/>}/>
                    <Route path='/studentTable' element={<StudentTable/>}/>
                    <Route path='/productForm' element={<ProductForm/>}/>
                    <Route path='/productForm/:id' element={<ProductForm/>}/>
                    <Route path='/productTable' element={<ProductTable/>}/>
                    <Route path='/userForm' element={<UserForm/>}/>
                    <Route path='/userForm/:id' element={<UserForm/>}/>
                    <Route path='/userTable' element={<UserTable/>}/>
                </Routes> */}
            {/* </BrowserRouter> */}
        </>
    )
}

export default HomeScreen