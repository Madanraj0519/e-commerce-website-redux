import React, { useEffect } from 'react'
import Slider from "../../components/Slider/Slider"
import Category from "../../components/Category/Category"
import { useSelector, useDispatch } from 'react-redux'
import { fetchCategories} from '../../store/categorySlice'
import SingleCategory from "../../components/SingleCategory/SingleCategory"
import { fetchProductsByCategory } from '../../store/productSlice';
import {fetchAllProducts} from "../../store/allProductSlice"
import "./HomePage.scss"

const HomePage = () => {

  const dispatch = useDispatch();
  const {list: categories} = useSelector((state) => state.category);
  const {product: allProducts} = useSelector((state) => state.allProducts)
  
  useEffect(()=>{
    dispatch(fetchCategories());
    dispatch(fetchProductsByCategory());
    dispatch(fetchAllProducts())
  },[dispatch])

  return (
    <div className='home-page'>
      <Slider />
      <Category categories={categories}/>
      <SingleCategory products={allProducts} />
    </div>
  )
}

export default HomePage