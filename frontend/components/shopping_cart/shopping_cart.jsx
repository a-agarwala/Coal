import React, { useEffect } from 'react';

export default function shoppingCart(props) {

    // useEffect(() => {
    //     props.refreshUserInfo(props.currentUserId);
    // }, []);

    return (
        <div className="cart wrapper">
            <h2>Your Shopping Cart</h2>

                <div className="cart-box">

                </div>

                <div className="cart-box total">
                    <div className="total-amount-row">
                        <div id="text">Total Amount:</div>
                        <div id="calc-amount">$19.99</div>
                    </div>
                </div>
        </div>
    )
}