import React, { useReducer, useState } from 'react'
import '../../Css/Reducer/reducer.css'
import { reducer } from '../../../Reducer'

function Reducer() {
    let blankObject = { id: 0, fname: '', email: '', mobile: '', date: '', gender: '', course: [] }
    const [obj, setobj] = useState({ ...blankObject })
    const [arr, setarr] = useState([])
    const [countId, setcountId] = useState(0)
    const [state, dispatch] = useReducer(reducer,[])
    console.log(state);
    

    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    const getValue = async (e) => {
        if (e.target.name == 'course') {
            if (e.target.checked) {
                obj.course = [...obj.course, e.target.value]
            }
            else {
                obj.course = obj.course.filter(x => x != e.target.value)
            }
        }
        else if (e.target.name == 'profile') {
            obj.profile = await toBase64(e.target.files[0])
        }
        else {
            obj[e.target.name] = e.target.value;
        }
        setobj({ ...obj })
    }

    const saveData = () => {
        if (obj.id != 0) {
            dispatch({type : 'edit', object : obj})
        }
        else {
            let c1 = countId + 1;
            setcountId(c1)
            obj.id = c1;
            dispatch({type : 'submit', object : obj})
        }
        setarr([...state])
        // localStorage.setItem('arr', JSON.stringify(arr))
        // console.log(JSON.parse(localStorage.getItem('arr')))
        setobj({ ...blankObject })
    }

    const deleteUser = (index) => {
        dispatch({type : 'delete', object : index})
        setarr([...state])
    }

    const editUser = (x) => {
        setobj({ ...x })
    }
    return (
        <>
            <form className='reducer'>
                <h2>Form</h2><br />

                <label htmlFor=""> First Name</label>
                <input type="text" name="fname" className="input_group w-100" value={obj.fname} onChange={(e) => getValue(e)} /><br/><br/>

                <label htmlFor="">Email</label>
                <input type="email" name="email" className="input_group w-100" value={obj.email} onChange={(e) => getValue(e)} /><br/><br/>

                <label htmlFor="">Mobile Number</label>
                <input type="number" name="mobile" className="input_group w-100" value={obj.mobile} onChange={(e) => getValue(e)} /><br/><br/>

                <label htmlFor="">Date</label>
                <input type="date" name="date" className="input_group w-100" value={obj.date} onChange={(e) => getValue(e)} /><br/><br/>

                <label htmlFor="">Gender</label>
                <input type="radio" name="gender" className='mx-1' value='Male' onChange={(e) => getValue(e)} checked={obj.gender?.includes('Male')} /> Male
                <input type="radio" name="gender" className='mx-1' value='Female' onChange={(e) => getValue(e)} checked={obj.gender?.includes('Female')} /> Female<br/><br/>

                <label htmlFor="">Course</label>
                <input type="checkbox" name="course" className='ms-2' value='React' onChange={(e) => getValue(e)} checked={obj.course?.includes('React')} /> React Js
                <input type="checkbox" name="course" className='ms-2' value='Angular' checked={obj.course?.includes('Angular')} onChange={(e) => getValue(e)} /> Angular
                <input type="checkbox" name="course" className='ms-2' value='Node' checked={obj.course?.includes('Node')} onChange={(e) => getValue(e)} /> Node js
                <input type="checkbox" name="course" className='ms-2' value='.net' checked={obj.course?.includes('.net')} onChange={(e) => getValue(e)} /> .NET Core <br /><br />

                <label htmlFor="profile" className="profile_btn">Profile</label>
                <input type="file" name="profile" style={{ display: 'none' }} id="profile" onChange={(e) => getValue(e)} /> <br /> <br />

                <button type="button" className="save_button" onClick={() =>saveData()}>Save</button>
                

            </form><br />

            <table className='table reducer_table w-100 text-center'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Profile</th>
                        <th>First Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Date</th>
                        <th>Gender</th>
                        <th>Course</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state?.map((x, i) => {
                            return <tr key={i}>
                                <td>{x.id}</td>
                                <td><img src={x.profile} alt="" width={40} /></td>
                                <td>{x.fname}</td>
                                <td>{x.email}</td>
                                <td>{x.mobile}</td>
                                <td>{x.date}</td>
                                <td>{x.gender}</td>
                                <td>{x.course.join(', ')}</td>
                                <td>
                                    <button className="edit_btn" onClick={()=> editUser(x)}>EDIT</button>
                                    <button className="delete_btn" onClick={()=>deleteUser(x)}>DELETE</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Reducer