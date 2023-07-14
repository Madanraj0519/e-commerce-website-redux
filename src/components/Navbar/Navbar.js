import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {FaSearch, FaShoppingCart, FaTimes, FaBars} from "react-icons/fa";
import {AiOutlineLogout} from "react-icons/ai"
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../../store/categorySlice';
import { getCartTotal } from '../../store/cartSlice';
// import {logout} from "../../store/authSlice"
import "./Navbar.scss"

const Navbar = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const {list: categories} = useSelector((state) => state.category);
  const {totalItems, data: cartProducts} = useSelector((state) => state.cart);
  // console.log(totalItems);

  const handleLogout = () => {
    // dispatch(logout());
    navigate('/');
  }


  useEffect(()=>{
    dispatch(fetchCategories());
    dispatch(getCartTotal());
  },[dispatch])


  return (
    <nav className = "navbar">
      <div className='navbar-content'>
        <div className = "container">
          <div className = "navbar-top flex flex-between">
              <Link to = "/home" className = "navbar-brand">
                <span className = "text-regal-blue">Shopping</span><span className='text-gold'>Mart.</span>
              </Link>

              <form className = "navbar-search flex">
                <input type = "text" placeholder='Search here ...' />
                <button type = "submit" className = "navbar-search-btn">
                  <FaSearch />
                </button>
              </form>

              <div className = "navbar-btns">
                <Link to = "/cart" className="add-to-cart-btn flex">
                  <span className = "btn-ico">
                    <FaShoppingCart />
                  </span>
                  <div className='btn-txt fw-5'>Cart
                  {
                    cartProducts.length > 0 ? <span className='cart-count-value'>{totalItems}</span> : ""
                  }
                  </div>
                </Link>
              </div>


              <div className = "navbar-btns" onClick={handleLogout}>
                <Link to = "/cart" className="add-to-cart-btn flex">
                  <span className = "btn-ico">
                    <AiOutlineLogout />
                  </span>
                  <div className='btn-txt fw-5'>Logout</div>
                </Link>
              </div>

          </div>
        </div>
        
        <div className='navbar-bottom bg-regal-blue'>
          <div className='container flex flex-between'>
            <ul className = {`nav-links flex ${sidebarOpen ? 'show-nav-links' : ""}`}>
              <button type = "button" className='navbar-hide-btn text-white' onClick={() => setSidebarOpen(false)}>
                <FaTimes />
              </button>
              {
                categories.map(category =>(                 
                <li key={categories.id}>
                <Link to={`/category/${category}`} className='nav-link text-white' onClick={() => setSidebarOpen(false)}>
                  {category}
                </Link>
                </li>
                ))
              }

            </ul>

            <button type = "button" className='navbar-show-btn text-gold' onClick={() => setSidebarOpen(true)}>
             <FaBars />
            </button>
          </div>
        </div>
      </div>
    </nav>

  )
}

export default Navbar