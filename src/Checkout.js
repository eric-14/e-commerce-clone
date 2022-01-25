import React from 'react'
import './checkout.css'
import {useStateValue} from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'


function Checkout() {
    const [{basket}] = useStateValue();

    console.log(basket)


    return (
        <div className="checkout">

        <div className="checkout_left">

            <div>
                <img className="checkout_image" src="https://images-na.ssl-images-amazon.com/images/G/01/img17/books/prime-book-box/2019/ILM_intropricing_1300x90._CB461534774_.jpg" alt=""></img>
            </div>
            
            
            
            
            {basket?.length === 0 ?(
                <div>
                    <h2>Your Shopping Basket is empty</h2>
                </div>
            ) : (
                <div>
                    <h2 className="checkout_title">Your Shopping Basket</h2>
                
                
                  { basket?.map((item) =>
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                  )}
                </div>
            )} 

           
          </div>  

          {basket.length > 0 && (
                <div className="checkout_right">

                    <Subtotal />
                    
                </div>
            )}
        </div>
    )
}

export default Checkout
