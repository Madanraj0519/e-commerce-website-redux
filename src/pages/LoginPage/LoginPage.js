import React,{useState} from 'react'
import "./LoginPage.scss"
import { useDispatch } from 'react-redux';
import { login} from '../../store/authSlice';
import { useNavigate, Link } from 'react-router-dom';
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {  

    const dispatch = useDispatch();
    const navigate = useNavigate();
    // sign in User
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = (e) => {
        e.preventDefault();
        // Check if the entered email and password match the stored user in local storage     
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if(storedUser &&
            storedUser.email === email && storedUser.password === password){
                dispatch(login(storedUser));                
                navigate('/home');
                toast.success('😃Login Successful')
            }
        if(email === "ShoppingMart" && password ==="Mart@123"){
          navigate('/home');
          toast.success('😃Login Successful')
        }else{
              toast.error('😢Invalid username or password')
            }
            
    };

  return (
   <>
  <div className='overlay-bg'>
    <div className={`login-page`}>
      <div className="img">
        <img src= "https://i.pinimg.com/736x/57/95/1d/57951d10713bcf9e658e3f1e5b4b8786.jpg" alt="Background" />
        <button className="btn">
            <Link to={'/signPage'}>
             Sign up
             </Link>
        </button>
      </div>
      <div className="form-container">
        <div className='title'>
        <span className = "text-regal-blue">Shopping</span><span className='text-gold'>Mart.</span>
        </div>
        <h2>Sign In</h2>
          <form onSubmit={handleSignIn}>
            {/* Sign In form fields */}
            <label htmlFor="signin-email">Enter your UserName</label>
            <input 
            type="name" id="signin-email"
            placeholder="Ex: ShoppingMart"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />

            <label htmlFor="signin-password">Enter your Password</label>
            <input 
            type="password" id="signin-password"
            placeholder="Ex: Mart@123"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />

            <button className="toggle-form-btn" type='submit'>
                Sign In
            </button>
          </form>
      </div>
    </div>
    </div>
   </>
  )
}

export default LoginPage