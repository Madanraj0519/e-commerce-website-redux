import React, { useEffect } from 'react'
import "./cartPage.scss";
import { useSelector, useDispatch } from 'react-redux';
import {Link} from "react-router-dom";
import {formatPrice} from "../../utils/helper";
import {removeFromCart,getCartTotal, clearCart, toggleCartQty} from "../../store/cartSlice"
import {FaPlus, FaMinus,FaTrash, FaChevronCircleLeft,FaChevronCircleRight, FaHome } from "react-icons/fa";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const CartPage = () => {

  const dispatch = useDispatch();
  const {data: cartProducts, totalItems, totalAmount, deliveryCharge, discount} = useSelector((state)=> state.cart);

  useEffect(()=>{
    dispatch(getCartTotal());
  },[useSelector((state) => state.cart), dispatch]);

  const emptyCartMsg = <h4 className='text-red fw-6'>No items found!</h4>;


  return (
    <div className = "cart-page">
    <div className = "container">
      <div className = "breadcrumb">
        <ul className = "breadcrumb-items flex">
          <li className = "breadcrumb-item fs-20">
            <Link to = "/home">
              <FaHome className='fs-24' />
              <span className = "breadcrumb-separator">
                <FaChevronCircleLeft />
              </span>
            </Link>
          </li>
          <li className='fs-20'>
            Cart
            <span className = "breadcrumb-separator">
                  <FaChevronCircleRight />
            </span>
            </li>
        </ul>
      </div>
    </div>
    <div className='bg-ghost-white py-5'>
        <div className='container'>
            <div className='section-title bg-ghost-white'>
                <h3 className = "text-uppercase fw-7 text-regal-blue ls-1">My Cart</h3>
            </div>
            {
                cartProducts.length === 0 ? emptyCartMsg : (
                    <div className = "cart-content grid">
                        <div className='cart-left'>
                            <div className = "cart-items grid">
                                {
                                    cartProducts.map(cartProduct => (
                                        <div className='cart-item grid' key = {cartProduct.id}>
                                            <div className='cart-item-img flex flex-column bg-white'>
                                                <img src = {cartProduct.image} alt = {cartProduct.title} />
                                                <button type = "button" className='btn-square rmv-from-cart-btn' onClick={() => dispatch(removeFromCart(cartProduct.id))}>
                                                    <span className='btn-square-icon'><FaTrash/></span>
                                                </button>
                                            </div>

                                            <div className='cart-item-info'>
                                                <h6 className='fs-16 fw-5 text-light-blue'>{cartProduct.title}</h6>
                                                <div className = "qty flex">
                                                    <span className = "text-light-blue qty-text">Qty: </span>
                                                    <div className = "qty-change flex">
                                                    <button type = "button" className='qty-dec fs-14' onClick={() => dispatch(toggleCartQty({id: cartProduct.id, type: "DEC"}))}>
                                                        <FaMinus className='text-regal-blue' />
                                                    </button>
                                                    <span className = "qty-value flex flex-center">{cartProduct.quantity}</span>
                                                    <button type = "button" className='qty-inc fs-14 text-light-blue' onClick={() => dispatch(toggleCartQty({id: cartProduct.id, type: "INC"}))}>
                                                        <FaPlus />
                                                    </button>
                                                    </div>
                                                </div>
                                                <div className = "flex flex-between">
                                                    <div className='text-pine-green fw-4 fs-15 price'>Price : {formatPrice(cartProduct.price)}.00</div>
                                                    <div className='sub-total fw-6 fs-18 text-regal-blue'>
                                                        <span>Sub Total: </span>
                                                        <span className=''>{formatPrice(cartProduct.totalPrice)}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <button type = "button" className='btn-danger' onClick={() => dispatch(clearCart())}>
                                <span className = "fs-16">Clear Cart</span> 
                            </button>
                        </div>
                        <div className='cart-right bg-white'>
                            <div className = 'cart-summary text-light-blue'>
                                <div className='cart-summary-title'>
                                    <h6 className='fs-20 fw-5'>Order Summary</h6>
                                </div>
                                <ul className = 'cart-summary-info'>
                                    <li className = "flex flex-between">
                                        <span className='fw-4'>Selected {totalItems} items(s) Price</span>
                                        <span className='fw-7'>{formatPrice(totalAmount)}</span>
                                    </li>
                                    <li className='flex flex-between'>
                                        <span className='fw-4'>Discount</span>
                                        <span className='fw-7'>
                                            <span className='fw-5 text-red'>-&nbsp;</span>
                                            {formatPrice(discount)}
                                        </span>
                                    </li>
                                    <li className='flex flex-between'>
                                        <span className='fw-4'>Delivery Cost</span>
                                        <span className='fw-7'>
                                            <span className='fw-5 text-gold'>+&nbsp;</span>{formatPrice(deliveryCharge)}
                                        </span>
                                    </li>
                                </ul>
                                <div className='cart-summary-total flex flex-between fs-18'>
                                    <span className='fw-6'>Grand Total: </span>
                                    <span className='fw-6'>{formatPrice(totalAmount + deliveryCharge - discount)}</span>
                                </div>
                                <div className='cart-summary-btn'>
                                    <button type = "button" className='btn-secondary' onClick={() => toast.success('Thanks for place your order')}>Proceed to Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    </div>
  </div>
  )
}

export default CartPage