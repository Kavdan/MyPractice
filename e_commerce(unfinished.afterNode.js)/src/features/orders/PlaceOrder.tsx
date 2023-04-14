import React, { useEffect, useState } from 'react'
import { ShippingAddress } from './ShippingAddress'
import { PaymentMethod } from './PaymentMethod'
import { Bag } from '../bag/Bag'
import { useSelector } from 'react-redux'

export const PlaceOrder = () => {
  const [error, setError] = useState(false);
  const [totalPrice, setTotalPrice] = useState({
    price: "",
    shippingPrice: ""
  });

  const orderInfo = useSelector((state : any) => state.currentShippingData)
  const bagInfo = useSelector((state : any) => state.bag);

  useEffect(() => {
    setTotalPrice({
      price: bagInfo.reduce(
        (accum: any, item: any) => accum + item.price * item.count,
        0
      ),
      shippingPrice: (Math.random() * 10).toFixed(2),
    });
  }, [totalPrice.price]);


  const handleOrder = () => {
    if (!orderInfo.address.shippingName.length || !orderInfo.card.cardNumber) {
      setError(true);
      setTimeout(() => setError(false), 3000)
    }
  }


  return (
    <div className="placeOrder">
      <div className="orderInfoRewiew">
        <ShippingAddress />
        <PaymentMethod />
      </div>
      {bagInfo.length ? (
        <div className="bagReview">
          <h1>BAG REVIEW</h1>
          <Bag hideCheckout={true} />
        </div>
      ) : (
        ""
      )}
      {bagInfo.length ? (
        <div className="confirmOrder">
          <p className="items">
            items:
            <span className="totalSum">
              ({bagInfo.length}) ${totalPrice.price}
            </span>
          </p>
          <p className="shippingWorth">
            shipping:
            <span className="sum">${totalPrice.shippingPrice}</span>
          </p>
          <p className="orderTotal">
            {error ? (
              <>fill shipping info</>
            ) : (
              <>
                Order Total:
                <span>${+totalPrice.price + +totalPrice.shippingPrice}</span>
              </>
            )}
          </p>
          <button className="placeOrderBtn" onClick={handleOrder}>Place your order</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
