import React from 'react'
import './checkoutproduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({id, title, price,image, rating}) {

    const [ {basket},dispatch] = useStateValue();

    const removeitemfrombasket = () => {
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id: id,
        })
    }

    return (



    <div className="checkoutproduct">
        
    
        <img  className="checkoutproduct_image" src={image} alt={title}></img>
         <div className="checkoutproduct_info">

             <p className="checkout_title">{title}</p>
           
              <p>
                <small>£</small>
                <strong>{price}</strong>
              </p>
           


                <div className="checkoutproduct_rating">
                    {Array(rating).fill().map((_) => (
                   <p>⭐️</p> ))}
                </div>

                <button onClick={removeitemfrombasket}>Remove Item</button>
            </div>
         


        </div>

        
             
            
             
  
        
    )
}

export default CheckoutProduct
