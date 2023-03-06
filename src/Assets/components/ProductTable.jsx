import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ProductTable() {

    const [array, setarray] = useState([])
    useEffect(() => {
        getProductData()
    }, [])

    const getProductData = () => {
        axios.get('https://student-api.mycodelibraries.com/api/product/get').then(res => {
            setarray([...res.data.data])
        })
    }
    const deleteProduct = (s) => {
        axios.delete(`https://student-api.mycodelibraries.com/api/product/delete?id=${s}`).then(res => {
            getProductData();
        })
    }

    return (
        <>
            <Link to='/homePage'><button type='button'>Go to home page</button></Link>
            <table className='table mt-5 text-center'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Category</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Cloth Size</th>
                        <th>In-Stock</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        array.map((x, i) => {
                            return <tr>
                                <td>{i + 1}</td>
                                <td>{x.category}</td>
                                <td>{x.productName}</td>
                                <td>{x.price}</td>
                                <td>{x.clothSize}</td>
                                <td>{x.inStock}</td>
                                <td>
                                    <Link to = {`/productForm/${x._id}`}><button className='btn btn-warning py-1'>EDIT</button></Link>
                                    <button className='btn btn-danger py-1 ms-2' onClick={() => deleteProduct(x._id)}>DELETE</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default ProductTable