import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../IconPack/Shopicons_Regular_Close.png'
import minus_icon from '../IconPack/Shopicons_Regular_Minus.png'
import plus_icon from '../IconPack/Shopicons_Regular_Plus.png'

export const CartItems = () => {
    const {getTotalCartAmount, product_data, cartItems, addToCart, removeFromCart, clearCart} = useContext(ShopContext);
    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {product_data.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div>
                        <div className="cartitems-format cartitems-format-main"> 
                            <img src={e.image} alt="" className='carticon-product-icon' />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <div className="cartitems-quantity-controls">
                                <img src={minus_icon} onClick={() => { removeFromCart(e.id)}} alt="" />
                                 <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                <img src={plus_icon} onClick={() => { addToCart(e.id)}} alt="" />
                            </div>
                            <p>${e.new_price*cartItems[e.id]}</p>
                            <img src={remove_icon} onClick={() => {clearCart(e.id)}} alt="" className='carticon-delete-icon' />
                        </div>
                        <hr />
                    </div>
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECHOUT</button>
                </div>
                <div className="cartitems promocode">
                    <p>If you have a promocode, enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='promo code'/>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
