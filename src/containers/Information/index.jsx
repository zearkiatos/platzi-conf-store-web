/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React, { useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppContext from '@context/AppContext';
import Input from '@components/Input';
import useInformationForm from '@hooks/useInformationForm';
import '@styles/information.css';

const Information = () => {
  const { state, addToBuyer } = useContext(AppContext);
  const form = useRef(null);
  const navigate = useNavigate();
  const { cart } = state;
  const renderCart = cart.map((item) => (
    <div className="information-item" key={item.title}>
      <div className="information-element">
        <h4>{item.title}</h4>
        <span>${item.price}</span>
      </div>
    </div>
  ));

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      apartment: formData.get('apartment'),
      city: formData.get('city'),
      country: formData.get('country'),
      state: formData.get('state'),
      postalCode: formData.get('postal-code'),
      phone: formData.get('phone'),
    };
    const { isValid } = useInformationForm(buyer);
    console.log(isValid);
    addToBuyer(buyer);
    // navigate('/checkout/payment');
  };
  return (
    <div className="information">
      <div className="information-content">
        <div className="information-head">
          <h2>Contact Information</h2>
          <div className="information-form">
            <form ref={form}>
              <Input
                type="text"
                placeholder="Full Name"
                name="name"
                errorMessage="Mensaje de error"
              />
              <Input type="email" placeholder="Email" name="email" />
              <Input type="text" placeholder="Address" name="address" />
              <Input
                type="text"
                placeholder="Apartment Number"
                name="apartment"
              />
              <Input type="text" placeholder="City" name="city" />
              <Input type="text" placeholder="Country" name="country" />
              <Input type="text" placeholder="State" name="state" />
              <Input type="text" placeholder="Postal Code" name="postal-code" />
              <Input
                type="text"
                placeholder="Phone Number"
                name="phone-number"
              />
            </form>
          </div>
          <div className="information-buttons">
            <button type="button" className="information-back">
              <Link to="checkout">Back</Link>
            </button>
            <button
              type="button"
              className="information-next"
              onClick={handleSubmit}
            >
              Pay
            </button>
          </div>
        </div>
      </div>
      <aside className="information-sidebar">
        <h3>Order</h3>
        {renderCart}
      </aside>
    </div>
  );
};

export default Information;
