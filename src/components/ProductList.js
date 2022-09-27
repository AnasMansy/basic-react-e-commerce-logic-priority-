import React, { useEffect, useState } from 'react'
import Product from './Product'

const ProductList = () => {

    const [products, setProducts] = useState([])
    const [categoris, setCategoris] = useState([])
    const getProducts = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    }
    const getCategoris = () => {
        fetch(`https://fakestoreapi.com/products/categories`)
            .then(res => res.json())
            .then(json => setCategoris(json))
    }

    const getInCategory = (e) => {
        fetch(`https://fakestoreapi.com/products/category/${e}`)
            .then(res => res.json())
            .then(json => setProducts(json))
    }
    useEffect(() => {
        getCategoris();
        categoris ? getProducts() : getInCategory();

    }, [])

    return (
        <div className='product-list p-3'>
            <h2 className='p-5 bg-gray'>our products</h2>
            <button onClick={()=>{getProducts()}}
            className='btn btn-primary p-3 m-2'
            >All</button>
            {categoris.map((e) => {

                return (
                    <button
                        onClick={() => { getInCategory(e) }}
                        className='btn btn-primary p-3 m-2'
                        key={e}>{e}
                    </button>
                )
            })}

            <div className='container pt-5'>
                <div className='row p-2'>
                    {
                        products.map((e) => {
                            return (
                                <div key={e.id} className='col-3 p-2 card-container'>
                                    <Product product={e} showBtn={true} />
                                </div>
                            )
                        })
                    }

                </div>
            </div>




        </div>
    )
}

export default ProductList
