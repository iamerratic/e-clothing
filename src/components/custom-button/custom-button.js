import React from 'react';
import './custom-button.scss';


const CustomButton = ({ children, isGoogleSignIn, ...otherprops }) => {

    return (
        <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherprops}>
            {children}
        </button>
    );
};


export default CustomButton;    