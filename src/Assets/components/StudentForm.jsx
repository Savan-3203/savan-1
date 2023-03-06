// import React from 'react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import student from '../images/studentform.jpeg'
import '../Css/studentForm.css'
import { Link, useParams } from 'react-router-dom'

function StudentForm() {

    const blankObj = { _id: 0, firstName: '', lastName: '', age: '', hoobies: [], gender: ''}
    const [obj, setobj] = useState({ ...blankObj })
    const [array, setarray] = useState([])
    const {id} = useParams();

    useEffect(() => {
        getStudentData()
    }, [])

    const getValue = (e) => {
        let hby = obj.hobbies ? obj.hobbies : []
        if (e.target.name == 'hobbies') {
            if (e.target.checked) {
                obj.hobbies = [...hby, e.target.value]
            }
            else {
                obj.hobbies = [...hby.filter(x => x != e.target.value)]
            }
        }
        else {
            obj[e.target.name] = e.target.value
        }
        setobj({ ...obj })
    }

    const getStudentData = () => {
        axios.get('https://student-api.mycodelibraries.com/api/student/get').then(res => {
            setarray([...res.data.data])
            // console.log(array);
            if(id){
               const editobj = res.data.data.find(x => x._id == id)
                setobj ({...editobj})
            }
        })
    }
    const saveStudent = () => {
        let formData = new FormData();
        formData.append('firstName', obj.firstName)
        formData.append('lastName', obj.lastName)
        formData.append('age', obj.age)
        formData.append('gender', obj.gender)
        formData.append('hobbies', obj.hobbies)
        formData.append('city', obj.city)
        if (obj._id == 0) {
            axios.post('https://student-api.mycodelibraries.com/api/student/add', formData).then(res => {
                console.log(res);
                getStudentData();
            })
        } else {
            formData.append('id', obj._id);
            axios.post('https://student-api.mycodelibraries.com/api/student/update', formData).then(res => {
                // console.log(res);
                getStudentData();
            })
        }
    }

    return (
        <>
            {/* <div className="student">
                <img src={student} alt="" />
            </div> */}
            <form action="" className=' studentform w-50 m-auto mt-4 px-3 py-4  rounded-3'>
                <h1>STUDENT FORM</h1>
                <label htmlFor="">First Name</label>
                <input type="text" className='w-100 my-2 mb-3' name='firstName' value={obj.firstName} onChange={getValue} />

                <label htmlFor="">Last Name</label>
                <input type="text" className='w-100 my-2 mb-3' name='lastName' value={obj.lastName} onChange={getValue} />

                <label htmlFor="">City</label>
                <input type="text" className='w-100 my-2 mb-3' name='city' value={obj.city} onChange={getValue} />

                <label htmlFor="">Age</label>
                <input type="number" className='w-100 my-2 mb-3' name='age' value={obj.age} onChange={getValue} />

                <label htmlFor="" className='w-100'>Gender</label>
                <input type="radio" name='gender' className='my-2 mb-3 me-2' value='Male' onChange={getValue} checked={obj?.gender?.includes('Male')} /><span>Male</span>
                <input type="radio" name='gender' className='my-2 mb-3 mx-2' value='Female' onChange={getValue} checked={obj?.gender?.includes('Female')} /><span>Female</span>


                <label htmlFor="" className='w-100'>Hobbies</label>
                <input type="checkbox" name="hobbies" className='me-2' value='Cricket' onChange={getValue} checked={obj?.hobbies?.includes('Cricket')} /><span>Cricket</span>
                <input type="checkbox" name="hobbies" className='mx-2' value='Dancing' onChange={getValue} checked={obj?.hobbies?.includes('Dancing')} /><span>Dancing</span>
                <input type="checkbox" name="hobbies" className='mx-2' value='Traveling' onChange={getValue} checked={obj?.hobbies?.includes('Traveling')} /><span>Traveling <br /></span>

                <Link to = '/studentTable'><button type='button' className='btn btn-success mt-5' onClick={()=>saveStudent()}>Submit</button></Link>
                <Link to = '/homePage'><button type='button' className='btn btn-success mt-5'>Go to home page</button></Link>
            </form>


        </>
    )
}

export default StudentForm