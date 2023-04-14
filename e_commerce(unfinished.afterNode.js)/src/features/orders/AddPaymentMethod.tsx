import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPayment } from './currentShippingData'
import { useNavigate } from 'react-router'

export const AddPaymentMethod = () => {
    const methods = useSelector((state : any) : Array<Object> => state.shippingDataInfo)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlePaymentData = (e) => {
        e.preventDefault();
        const form = e.target;
        const cardHolderName = form[0].value;
        const cardNumber = form[1].value;
        const expiryDate = form[2].value;
        const cvc = form[3].value;
        
        dispatch(addPayment({
            cardHolderName: cardHolderName,
            cardNumber,
            expiryDate,
            cvc
        }))

        navigate(-1)
    }


  return (
    <div className="addPaymentMethodContainer">
      <div className="listOfMethods">
        {Boolean(methods.length) &&
          methods.map((method) => {
            return <p>{method.card.cardNumber}</p>;
          })}
      </div>
      <form className="addPaymentData" onSubmit={handlePaymentData}>
        <h1 className="title">ADD NEW CARD</h1>
        <input
          type="text"
          className="cardHolderName"
          placeholder="cardholder name"
        />
        <input type="text" className="cardNumber" placeholder="card number" />
        <div className="dataCvcContainer">
          <input
            type="text"
            maxLength={7}
            className="expiryDate"
            placeholder="MM/YYYY"
          />
            <span>/</span>
          <input type="text" placeholder="CVC" className="cvc" />
        </div>
        <div className="checkboxPayment">
          <input type="checkbox" name="" className="saveAsDefaultPayment" />
          Save as your default payment method
        </div>
        <button className="addPaymentBtn">
          <img src="" alt="" />
          Add Payment Method
        </button>
      </form>
    </div>
  );
}
