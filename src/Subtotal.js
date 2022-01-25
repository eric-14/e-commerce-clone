import React, { useState } from 'react'
import './subtotal.css'
import { useStateValue } from './StateProvider'
import CurrenyFormat from "react-currency-format";
import { getBasketTotal } from './reducer'

const total = () => { 
    //basket?.map((item) =>{
       //item.price
}

function Subtotal() {
    const [{ basket}, dispatch ] = useStateValue();
    
     
        

    return (
    <div className="subtotal">
        <CurrenyFormat 
         renderText={(value) => (
            <>
            <p>
                Subtotal ({basket.length} items): <strong>{ `${value}`}</strong>
            </p>
            <small className='subtotal_gift'>
                <input type="checkbox" />This order contains a gift
            </small>
            
            </>
        )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"£"}
        />

       
            
            <button>Proceed to Checkout</button>
      
        </div>
    )
}

export default Subtotal
