
import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./LoginPage.scss"
import { useDispatch } from 'react-redux';
import { register } from '../../store/authSlice';
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const SignUpPage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSingUp = (e) => {
    e.preventDefault();

    // Store the new user in local storage and dispatch the register action
    const newUser = { email, password, confirmPassword };
    localStorage.setItem('user', JSON.stringify(newUser));
    dispatch(register(newUser));
    if(password === confirmPassword) {
      toast.success('😊Registration successful');
      toast.success('😊Now you can login and get your products');
      navigate('/');
    }else{
      toast.error('🫡Please check your Password & Confirm Password')
    }
    

  };

  return (
    <>
    <div className='overlay-bg'>
    <div className="login-page s--signup">
      <div className="img">
        <img src="https://img.freepik.com/premium-photo/beautiful-confident-serious-tanned-handsome-man-blue-basic-tshirt-look-camera-posing-isolated-orange-yellow-studio-background-copy-space-banner-mockup-people-emotions-lifestyle-concept_163305-163741.jpg"  alt="Background" />
        <button className="btn">
            <Link to={'/'}>
             Sign in
             </Link>
        </button>
      </div>
      <div className="form-container">
        <div className='title'>
        <span className = "text-regal-blue">Shopping</span><span className='text-gold'>Mart.</span>
        </div>
        <h2>Sign In</h2>
          <form onSubmit={handleSingUp}>
            {/* Sign Up form fields */}
            <label htmlFor="signup-email">User Name</label>
            <input 
            type="name" id="signup-email" 
            placeholder="Enter your User name"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}/>

            <label htmlFor="signup-password">Password</label>
            <input 
            type="password" id="signup-password"
            placeholder="Create a new Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}/>

            <label htmlFor="signup-password">Confirm Password</label>
            <input type="password" id="signup-password"
            placeholder="Create a new Password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}/>

            <button className="toggle-form-btn" type='submit'>
                Sign Up
            </button>
          </form>
      </div>
    </div>
    </div>
    </>
  )
}

export default SignUpPage