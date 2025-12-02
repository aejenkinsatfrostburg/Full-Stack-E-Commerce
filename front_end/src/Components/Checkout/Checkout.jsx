import React, { useState, useContext } from 'react';
import './Checkout.css';
import { ShopContext } from '../../Context/ShopContext';

export const Checkout = () => {
    const { getTotalCartAmount } = useContext(ShopContext);

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        cardNumber: '',
        expiry: '',
        cvv: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Order confirmed!\nTotal: $${getTotalCartAmount()}`);
        // You can later integrate actual payment processing here
    };

    return (
        <div className='checkout-page'>
            <div className='checkout-box'>
                <h1>Checkout</h1>
                <div className="checkout-form-container">
                    <form className='checkout-form' onSubmit={handleSubmit}>
                        <h2>Billing Information</h2>
                        <p>Please note, this is not a real website, this is a demo. Do not put in your information. Nothing on this page is stored or used.</p>

                        <label>
                            Full Name
                            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
                        </label>
                        <label>
                            Email
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                        </label>
                        <label>
                            Address
                            <input type="text" name="address" value={formData.address} onChange={handleChange} required />
                        </label>
                        <label>
                            City
                            <input type="text" name="city" value={formData.city} onChange={handleChange} required />
                        </label>
                        <label>
                            State
                            <input type="text" name="state" value={formData.state} onChange={handleChange} required />
                        </label>
                        <label>
                            ZIP Code
                            <input type="text" name="zip" value={formData.zip} onChange={handleChange} required />
                        </label>

                        <h2>Payment Information</h2>

                        <label>
                            Card Number
                            <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required />
                        </label>
                        <label>
                            Expiration Date
                            <input type="text" name="expiry" placeholder="MM/YY" value={formData.expiry} onChange={handleChange} required />
                        </label>
                        <label>
                            CVV
                            <input type="text" name="cvv" value={formData.cvv} onChange={handleChange} required />
                        </label>

                        <div className='checkout-total'>
                            <p>Total: ${getTotalCartAmount()}</p>
                            <button type='submit'>Confirm Order</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
