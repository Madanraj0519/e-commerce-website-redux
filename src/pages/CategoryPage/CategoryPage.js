import React, {useEffect} from 'react';
import ProductList from '../../components/ProductList/ProductList';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsByCategory } from '../../store/productSlice';
import { useParams, Link } from 'react-router-dom';
import {FaHome, FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa"
import "./CategoryPage.scss";

const CategoryPage = () => {
  const dispatch = useDispatch();
    const {id} = useParams();
    const { list:products, loading, error } = useSelector((state) => state.products);
    // console.log(products)

    useEffect(() => {
      dispatch(fetchProductsByCategory(id));
    }, [id, dispatch]);

    return (
      <div className = "category-page">
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
                Category
                <span className = "breadcrumb-separator">
                  <FaChevronCircleRight />
                </span>
              </li>
              <li>
                {products.category}
              </li>
            </ul>
          </div>
        </div>
        <ProductList products = {products} loading={loading} error={error} />
      </div>
    )
}

export default CategoryPage