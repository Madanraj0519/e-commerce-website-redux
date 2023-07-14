import React from 'react'
import "./SingleCategory.scss"
import { useSelector, useDispatch } from 'react-redux'
import SingleProduct from "../SingleProduct/SingleProduct"
import {setIsModalVisible, setModalData} from "../../store/modalSlice"
// import Error from '../Error/Error'
// import Loader from '../Loader/Loader'
import {formatPrice} from "../../utils/helper"


const SingleCategory = ({products}) => {
  // console.log(products)
  const dispatch = useDispatch();
  const {isModalVisible} = useSelector((state) => state.modal);

  const viewModelHandler = (data) => {
    dispatch(setModalData(data));
    dispatch(setIsModalVisible(true));
  }

  return (
    <div className='cat-single py-5 bg-ghost-white'>
      {isModalVisible && <SingleProduct/>}
      
      <div className='container'>
        <div className='cat-single-content'>
          <div className='section-title'>
        <h3 className='text-uppercase fw-7 text-regal-blue ls-1'>products</h3>
      </div>

      <div className='product-items grid'>
        {
          products.map(product => (
            <div className='product-item bg-white' key={product.id} onClick={() => viewModelHandler(product)}>
              <div className='product-item-img'>
                <img src={product.image} alt=''/>
                <div className='product-item-cat text-white fs-13 text-uppercase bg-gold fw-6'>{product.category}</div>
              </div>
              <div className='product-item-body'>
                  <h6 className = "product-item-title text-pine-green fw-4 fs-15">{product.title}</h6>
                  <div className = "product-item-price text-regal-blue fw-7 fs-18">{formatPrice(product.price)}</div>
              </div>
            </div>
          ))
        }
      </div>
        </div>
      </div>
    </div>
  )
}

export default SingleCategory;