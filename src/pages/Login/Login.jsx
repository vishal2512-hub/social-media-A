import React from 'react'
import './login.scss'
import { useContext } from 'react'
import { Authcontext } from '../../Context/AuthContext'
import { Link } from 'react-router-dom'

const Login = () => {

    const {currentUser} = useContext(Authcontext) 
    const handlelogin = () => {
      Login();
    }
  
  return (
     <div className="login">
      <div className="card">
        <div className="left">
          <h1>Instamate</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, ex,
            facere debitis expedita, reprehenderit ab esse veritatis dolorem
            labore.
          </p>
          <span>Dont have an Account ?</span>
          <Link to='/register'>
        <button>Register</button>
          </Link>
        </div>
        <div className="right">

        <h1>Login</h1>
        <form>
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="password" />
          <button onClick={handlelogin}>Login</button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Login
