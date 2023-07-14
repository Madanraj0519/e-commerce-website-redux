import React from 'react'
import { Link } from 'react-router-dom'
import "./Category.scss"
import {categoryImage} from "../../utils/image"


const Category = () => {

  return (
    <section className = "categories py-5 bg-ghost-white" id = "categories">
    <div className = "container">
        <div className = "categories-content">
            <div className='section-title'>
                <h3 className = "text-uppercase fw-7 text-regal-blue ls-1">Category</h3>
            </div>
            <div className = "category-items grid">
                {
                    categoryImage.map(category => (
                        <Link to = {`category/${category.category}`} key = {category.id}>
                            <div className = "category-item" >
                                <div className='category-item-img'>
                                    <img src = {category.image} alt = "" />
                                </div>
                                <div className = "category-item-name text-center">
                                    <h6 className='fs-20'>{category.title}</h6>
                                </div>
                            </div>
                        </Link>
                    ))
                }
                
            </div>
        </div>
    </div>
</section>
)
}

export default Category