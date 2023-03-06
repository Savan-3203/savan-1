// import React from 'react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import product from '../images/productform.jpeg'
import '../Css/productForm.css'
import { Link, useParams } from 'react-router-dom'

function ProductForm() {

    const blankObj = { _id: 0, category: '', productName: '', price: '', clothSize: '', inStock: '' }
    const [obj, setobj] = useState({ ...blankObj })
    const [array, setarray] = useState([])
    const {id} = useParams();

    useEffect(() => {
        getProductData()
    }, [])

    const getValue = (e) => {
        obj[e.target.name] = e.target.value
        setobj({ ...obj })
    }

    const getProductData = () => {
        axios.get('https://student-api.mycodelibraries.com/api/product/get').then(res => {
            setarray([...res.data.data])
            // console.log(res);
            if(id){
                const editobj = res.data.data.find(x => x._id == id)
                setobj ({...editobj})
            }
        })
    }
    const saveProduct = () => {
        let formData = new FormData();
        formData.append('category', obj.category)
        formData.append('productName', obj.productName)
        formData.append('price', obj.price)
        formData.append('clothSize', obj.clothSize)
        formData.append('inStock', obj.inStock)
        // console.log(obj);
        if (obj._id == 0) {
            axios.post('https://student-api.mycodelibraries.com/api/product/add', formData).then(res => {
                getProductData();
            })
        } else {
            formData.append('id', obj._id);
            axios.post('https://student-api.mycodelibraries.com/api/product/update', formData).then(res => {
                console.log(res);
                getProductData();
            })
        }
        setobj({ ...blankObj })
    }

    return (
        <>
            <div className="product">
                <img src={product} alt="" />
            </div>
            <form action="" className=' productform w-50 m-auto mt-4 px-3 py-4  rounded-3'>
                <h1 className='text-white'>PRODUCT FORM</h1>
                <label htmlFor="">Category</label>
                <input type="text" className='w-100 my-2 mb-3' name='category' value={obj.category} onChange={getValue} />

                <label htmlFor="">Product Name</label>
                <input type="text" className='w-100 my-2 mb-3' name='productName' value={obj.productName} onChange={getValue} />

                <label htmlFor="">Price</label>
                <input type="number" className='w-100 my-2 mb-3' name='price' value={obj.price} onChange={getValue} />

                <label htmlFor="">Cloth Size</label>
                <input type="number" className='w-100 my-2 mb-3' name='clothSize' value={obj.clothSize} onChange={getValue} />

                <label htmlFor="">In-stock</label>
                <input type="number" className='w-100 my-2 mb-3' name='inStock' value={obj.inStock} onChange={getValue} />

                <Link to='/productTable'><button type='button' className='btn btn-success mt-5' onClick={() => saveProduct()}>Submit</button></Link>
                <Link to='/homePage'><button type='button' className='btn btn-success mt-5'>Go to home page</button></Link>
            </form>
        </>
    )
}

export default ProductForm