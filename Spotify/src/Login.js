import './Login.css'
import {loginUrl} from './spotify'
import React from 'react'

function Login() {
    return (
        <div className="login">
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="Spotify logo"/>
            <a href={loginUrl} >LOGGING WITH SPOTIFY</a>
            {/*Spotify loggin button*/}
        </div>
    )
}

export default Login
