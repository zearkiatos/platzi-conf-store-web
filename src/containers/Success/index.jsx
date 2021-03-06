/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import Map from '@components/Map';
import useGoogleAddress from '@hooks/useGoogleAddress';
import '@styles/success.css';

const Success = () => {
    const { state } = useContext(AppContext);
    const { buyer } = state;
    const location = useGoogleAddress(buyer[0].address);

    return (
        <div className="success">
            <div className="success-content">
                <h2>{buyer[0].name}, Thank you for your buying</h2>
                <span>Your order will arrive in 3 days to your address</span>
                <div className="success-map">
                    <Map data={location} />
                </div>
            </div>
        </div>
    );
};

export default Success;