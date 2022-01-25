import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from './firebase'
 




function Header() {
    const [{ basket, user }]  = useStateValue();

    console.log(basket)

    const login = () => {
        if (user){
            auth.signOut();
        }
    }

    return (
        <div className="Header">
            <MenuIcon className="menuicon"/>
            
            <div className="header_left">
            
                <Link to="/">
                    <img className="header_logo"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWEaJMzBSlyrax0oZKlp3mnW2wy1FkY5tKIDmAn4jVWllAVl5Hp3eaXygxaYGOryie4IzgoB7_KLqQ5Nq6mGZ0Eg&usqp=CAU&ec=45688577">

                    </img>
                </Link>
            </div>

            <div className="header_center">

                <p>All</p>
                <input type="text" className="search_input"></input>
                    
                <SearchIcon className="search_icon" />
            </div>

            <div className="header_right">

<Link  to={!user && "/login"}className="header_link">
<div onClick={login} className="header_option">
    <span className="header_optionlineone">Hello {user}</span>
    <span className="header_optionlinetwo">{user ? "Sign Out" :"Sign In"}</span>
    </div>
</Link>

<Link to="/checkout" className="header_link">
    <div className="header_option">
    <span className="header_optionlineone">Returns</span>
    <span className="header_optionlinetwo">& Orders</span>
     </div>
</Link>


<Link to="/checkout" className="header_link">
    <div className="header_option">
    <span className="header_optionlineone">Your</span>
    <span className="header_optionlinetwo">Prime</span>
</div>
</Link>
<Link to="/checkout" className="header_link" >
      <div className="header_optionbasket">
        <ShoppingBasketIcon />
            <span className="header_linetwo header_basketcount">{basket?.length}</span>
      </div>
</Link>
</div>









        </div>
    
    )
}

export default Header
