import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

export default function PaymentMethodScreen(props) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  if (!shippingAddress.address) {
    props.history.push("/shipping");
  }
  const [paymentMethod, setPaymentMethod] = useState("COD (Cash On Delivary)");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    props.history.push("/placeorder");
  };
  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <form className='form' onSubmit={submitHandler}>
        <div>
          <h1>Payment Method</h1>
        </div>
        <div>
          <div>
            <input
              type='radio'
              id='paypal'
              value='PayPal'
              name='paymentMethod'
              required
              disabled
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor='paypal'>PayPal (Not available)</label>
          </div>
        </div>
        <div>
          <div>
            <input
              type='radio'
              id='stripe'
              value='Stripe'
              name='paymentMethod'
              disabled
              required
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor='stripe'>Stripe (Not available)</label>
          </div>
        </div>
        <div>
          <div>
            <input
              type='radio'
              id='cod'
              value='COD (Cash On Delivary)'
              name='paymentMethod'
              required
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor='cod'>COD (Cash On Delivary)</label>
          </div>
        </div>
        <div>
          <label />
          <button className='primary' type='submit'>
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
