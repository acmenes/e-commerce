import React from "react";
import withContext from "../withContext";
import CartItem from "./CartItem";

let total = 0;

const Cart = props => {
    const { cart } = props.context;
    const { cartTotal } = props.context;
    const cartKeys = Object.keys(cart || {});

    return (
      <>
        <div className="hero is-primary">
          <div className="hero-body container">
            <h4 className="title">My Cart</h4>
          </div>
        </div>
        <br />
        <div className="container">
          {cartKeys.length ? (
            <div className="column columns is-multiline">
              {cartKeys.map(key => (
                <CartItem
                  cartKey={key}
                  key={key}
                  cartItem={cart[key]}
                  removeFromCart={props.context.removeFromCart}
                />
              ))}
              <div className="column is-12 is-clearfix">
                <h5><b>Total:</b> ${cartTotal}</h5>  
              </div> 
              <div className="column is-12 is-clearfix">
                <div className="is-pulled-right">
                  <button
                    onClick={props.context.clearCart}
                    className="button is-warning "
                  >
                    Clear cart
                  </button>{" "}
                  <button
                    className="button is-success"
                    onClick={props.context.checkout}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="column">
              <div className="title has-text-grey-light">No item in cart!</div>
            </div>
          )}
        </div>
      </>
    );
  };
  
export default withContext(Cart);