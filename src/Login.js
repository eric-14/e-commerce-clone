import React from 'react'
import './login.css'
import { Link , useHistory } from 'react-router-dom'
import { auth } from './firebase'
import { useState } from 'react'


function Login() {

    const history = useHistory()

    const [email, setEmail] = useState("")
    const [password,setPassword] = useState("")


    const login = e =>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
            .then((auth) =>{
                //logged in 
                history.push('/')

            })
            .catch(e => (alert(e.message)))

    }
    const register = e =>{
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) =>{

            history.push('/')

        })
        .catch((e) => alert(e.message))
    }



    return (
        <div className="login">
            <Link to="/">
                <img className="login_image"
                src="data:image/png;base64,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"
                 alt="" />
            </Link>
            <div className="login_container">
                <h2>Sign In</h2>
                
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail( event.target.value)}type="email"/>
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword( event.target.value)} type="password"/>
                   
                </form>
                <button className="login_signin" onClick={login}>Sign In</button>
                <p>
                    By signing-in you agree to Amazon's Terms and Conditions
                </p>
                <button className="login_createaccount" onClick={register}>Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
