import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../Css/register.css'
import Registration from '../images/registration.jpg'

function Register() {
    let blankObj = {Full_name: '', Number: '', E_mail: '', Password: ''};
    const [obj, setobj] = useState({ ...blankObj });
    const [array, setarray] = useState([]);
    const getValue = (e) => {
        obj[e.target.name] = e.target.value;
        setobj({ ...obj })
    };

    const getData = () => {
        array.push(obj);
        setarray([...array])
        localStorage.setItem('array' , JSON.stringify(array));
    }
    return (
        <>
            <div className="register">
                <img src={Registration} alt="" className='signup' />
                <form className='text-center'>
                    <h3 className='signup-txt'>Sign Up</h3>
                    <input type="text" name="Full_name" onChange={getValue} id="" placeholder='Full name' />
                    <input type="number" name="Number" onChange={getValue} id="" placeholder='Roll Number' />
                    <input type="email" name="E_mail" onChange={getValue} id="" placeholder='E-mail' />
                    <input type="password" name="Password" onChange={getValue} id="" placeholder='Password' />
                    <input type="password" name="Confirm_Password" onChange={getValue} id="" placeholder='Confirm Password' />
                    <Link to = '/'><button type='button' onClick={getData}>Sign Up</button></Link>
                    <Link to='/'><button type='button'>Go to Login page</button></Link>
                </form>
            </div>
        </>
    )
}

export default Register