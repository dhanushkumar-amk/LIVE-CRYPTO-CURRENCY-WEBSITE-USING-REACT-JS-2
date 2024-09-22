import React, {useState} from 'react';import {RiCloseLine} from 'react-icons/ri';
import './Login.css'
const Login = ({setShowLogin}) => {
  const [currentState, setCurrentState] = useState('Sign-up');

  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
        <div className='login-popup-title'>
          <h2>{currentState}</h2>
          <p onClick={() => setShowLogin(false)}>
            <RiCloseLine />
          </p>
        </div>

        <div className='login-popup-input'>
          {currentState === 'Login' ? (
            <></>
          ) : (
            <input
              type='text'
              placeholder='Your name'
              required
            />
          )}
          <input
            type='email'
            placeholder='Your Email'
            required
          />
          <input
            type='password'
            placeholder='Your Password'
            required
          />
        </div>
        <button>{currentState==="Sign-up"?"Create account" :"Login" }</button>

        <div className='login-popup-condition'>
          <input
            type='checkbox'
            required
          />
          <p>By continuing, i agree to thr terms of use & privacy policy</p>
        </div>
        {currentState === 'Login' ? (
          <p>
            Create a new account? <span onClick={() => setCurrentState("Sign-up")} >Click here</span>
          </p>
        ) : (
          <p>
            Already have an account? <span onClick={() => setCurrentState("Login")} >Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
