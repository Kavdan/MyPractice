import React from 'react'
import cardIcon from '../../assets/cardIcon.svg'
import giftIcon from '../../assets/giftIcon.svg'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

export const PaymentMethod = () => {
  const orderInfo = useSelector((state:any) => state.currentShippingData.card);
  const navigate = useNavigate();
  return (
    <div className='paymentMethod'>
        <div className="infoContainer">
        <h1>PAYMENT METHOD</h1>
        <div className="paymentData">
            <p className="card">
              <img src={cardIcon} alt="" /> 
              {!orderInfo.cardNumber.length ? <span>credit card number not provided</span>  
              : <>Mastercard<span>ending in {orderInfo.cardNumber}</span></>}
            </p>
            {/* <p className='gift'>
              <img src={giftIcon} alt="" />
              $65.34 <span>gift balance</span>
            </p> */}
        </div>
        </div>
        <button className='change' onClick={() => navigate('/addPayment')}>Change</button>
    </div>
  )
}
