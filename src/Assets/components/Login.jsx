import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Css/login.css'
import login from '../images/login.jpg'
import Register from './Register'

function Login() {
    const [loginObj, setloginObj] = useState({E_mail : '', Password : ''})
    const [loginArray, setloginArray] = useState(JSON.parse(localStorage.getItem('array'))||[])

    const getData = (s) => {
        loginObj[s.target.name] = s.target.value;
        setloginObj({...loginObj})
    }

    const submitData = () => {
        if(loginObj.E_mail == '' || loginObj.Password == '')
        {
            alert('Please fill all filds...')
        }

        let obj = loginArray.find(x => x.E_mail == loginObj.E_mail )
        if(obj)
        {
            if(loginObj.Password == obj.Password)
            {
                localStorage.setItem('data', true)
                localStorage.setItem('loginObj',JSON.stringify(obj))
                window.location.reload();
            }
            else
            {
                alert('password is wrong')
            }
        }
        else
        {
            alert('user not found')
        }
    }
    return (
        <>
            <div className="login_div">
                <img src={login} alt="" className='' />
                <div className="form text-center">
                    <h1>Welcome</h1>
                    <form className='login_form'>
                        <input type="text" name='E_mail' onChange={getData} placeholder='Enter your Email Address' />
                        <input type="password" name='Password' onChange={getData} placeholder='Enter your Password' />

                        <button type='button' onClick={submitData}>Sign-in</button>
                        <Link to = '/register'><button type='button'>Sign-up</button></Link>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login