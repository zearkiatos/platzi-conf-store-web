/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/imports-first */
/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React, { useRef, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppContext from '@context/AppContext';
import Input from '@components/Input';
import Error from '@components/Error';
import informationSchema from './informationSchema';
import '@styles/information.css';

const Information = () => {
  const { state, addToBuyer } = useContext(AppContext);
  const [valid, setValid] = useState(false);
  const [error, setError] = useState([]);
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

  const renderError = () =>
    !valid && error.length > 0 && <Error {...error[0]} />;

  const isValid = (validate) => !validate.error;

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
      postalCode: parseInt(formData.get('postalCode'), 10),
      phone: parseInt(formData.get('phoneNumber'), 10),
    };
    const validation = informationSchema.validate(buyer);
    validation.error && setError(validation.error.details);
    setValid(isValid(validation));
    if (isValid(validation)) {
      addToBuyer(buyer);
      navigate('/checkout/payment');
    }
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
                error={error[0]}
              />
              <Input
                type="email"
                placeholder="Email"
                name="email"
                error={error[0]}
              />
              <Input
                type="text"
                placeholder="Address"
                name="address"
                error={error[0]}
              />
              <Input
                type="text"
                placeholder="Apartment Number"
                name="apartment"
                error={error[0]}
              />
              <Input
                type="text"
                placeholder="City"
                name="city"
                error={error[0]}
              />
              <Input
                type="text"
                placeholder="Country"
                name="country"
                error={error[0]}
              />
              <Input
                type="text"
                placeholder="State"
                name="state"
                error={error[0]}
              />
              <Input
                type="text"
                placeholder="Postal Code"
                name="postalCode"
                error={error[0]}
              />
              <Input
                type="text"
                placeholder="Phone Number"
                name="phoneNumber"
                error={error[0]}
              />
            </form>
          </div>
          {renderError()}
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
