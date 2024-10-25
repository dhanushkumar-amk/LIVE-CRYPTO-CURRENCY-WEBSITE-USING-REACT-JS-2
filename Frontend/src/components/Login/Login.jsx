import  {useContext, useState} from 'react';import {RiCloseLine} from 'react-icons/ri';
import './Login.css'
import { CoinContext } from '../../context/coinContext';
import axios from "axios";
import {  useNavigate } from 'react-router-dom';

const Login = ({setShowLogin}) => {
  
  const navigate = useNavigate();
  const {url,setToken} = useContext(CoinContext);
  
  const [currentState, setCurrentState] = useState('Sign-up');

  const [data, setData] = useState({
    name : "",
    email : "",
    password : "",
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    
    setData(data => ({...data,[name]: value}));
    
  }

  
  const onLogin = async(event) =>{
    event.preventDefault()
    
    let newUrl = url;
    
    if(currentState === "Login"){
      newUrl += "/api/user/login";
    }
    else{
      newUrl += "/api/user/register"
    }
    const response = await axios.post(newUrl, data);
    
    if(response.data.success){
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
      navigate('/home')
    }else{
      alert(response.data.message)
    }
  }
  
  return (
    <div className='login-popup'>
      <form  onSubmit={onLogin} className='login-popup-container'>
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
              name='name'
              onChange={onChangeHandler}
              value={data.name}
            />
          )}
          <input
            type='email'
            placeholder='Your Email'
            required
            name='email'
              onChange={onChangeHandler}
              value={data.email}
          />
          <input
            type='password'
            placeholder='Your Password'
            required
            name='password'
              onChange={onChangeHandler}
              value={data.password}
          />
        </div>
        <button type='submit' >{currentState==="Sign-up"?"Create account" :"Login" }</button>

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
