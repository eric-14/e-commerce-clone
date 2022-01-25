import React from 'react'
import './Product'
import './Product.css'

import { useStateValue } from './StateProvider';

function Product({id ,title,price,rating,image}) {

const [ { basket } ,dispatch] = useStateValue();


    const Addtobasket = () =>{
        
        dispatch({
            type:'ADD_TO_BASKET',
            item: {
            id:id,
            title:title,
            image:image,
            price:price,
            rating:rating,
            }
        })
        
        
    }


    return (
        <div className="product">
            <div className="prouct_info">
                <p>{title}</p>

                <p>
                <small>£</small>
                <strong>{price}</strong>
                </p>

             </div>
           
             <div className="product_rating">
                {Array(rating).fill().map((_) => (
                   <p>⭐️</p> ))}</div>

             <img className="product_image" src={image} alt={title}></img>
             <button onClick={Addtobasket} >Add to the basket</button>
            
        </div>
    )
}

export default Product
