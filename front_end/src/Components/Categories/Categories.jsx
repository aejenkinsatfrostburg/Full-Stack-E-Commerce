import React, { useContext, useState } from 'react'
import './Categories.css'
import hoodie_image from '../Assets/CategoriesImages/Shop_Hoodies.png'
import hat_image from '../Assets/CategoriesImages/Shop_Hats.png'
import shirt_image from '../Assets/CategoriesImages/Shop_Shirts.png'
import Sneaker_image from '../Assets/CategoriesImages/Shop_Sneakers.png'
import Sweatpants_image from '../Assets/CategoriesImages/Shop_Sweatpants.png'
import { ShopContext } from '../../Context/ShopContext'
import { useNavigate } from 'react-router-dom'

export const Categories = () => {
  const categories = ["hoodies", "shirts", "hats", "sweatpants", "sneakers"];

  const [menu, setMenu] = useState('none');
  const navigate = useNavigate();

  return (
    <div className='categories'>
      <h1>Shop Categories</h1>
      <div className="categories-images">
        <div className="hoodieContainer" onClick={() => { setMenu("hoodies"); navigate("/hoodies"); }}><img src={hoodie_image} alt="" /></div>
        <div className="hatContainer" onClick={() => { setMenu("hats"); navigate("/hats"); }}><img src={hat_image} alt="" /></div>
        <div className="shirtContainer" onClick={() => { setMenu("shirts"); navigate("/shirts"); }}><img src={shirt_image} alt="" /></div>
        <div className="sneakerContainer" onClick={() => { setMenu("sneakers"); navigate("/sneakers"); }}><img src={Sneaker_image} alt="" /></div>
        <div className="sweatpantsContainer" onClick={() => { setMenu("sweatpants"); navigate("/sweatpants"); }}><img src={Sweatpants_image} alt="" /></div>
      </div>
    </div>
  )
}
