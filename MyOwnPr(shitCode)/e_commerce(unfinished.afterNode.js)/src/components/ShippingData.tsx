import React, { useState } from "react";
import "../app.scss";
import { useDispatch } from "react-redux";
import { addData } from "../features/shippingData/shippingDataSlice";

export const ShippingData = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "",
    surname: "",
    address: "",
    cardNumber: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(
      addData({
        fullName: data.name + " " + data.surname,
        address: data.address,
        cardNumber: data.cardNumber,
      })
    );

    setData({
      name: "",
      surname: "",
      address: "",
      cardNumber: "",
    });
  };

  return (
    <div className="shippingData">
        
      <div className="userInfo">
        <label htmlFor="">
          name:{" "}
          <input
            type="text"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </label>
        <label htmlFor="">
          surname:{" "}
          <input
            type="text"
            value={data.surname}
            onChange={(e) => setData({ ...data, surname: e.target.value })}
          />
        </label>
        <label htmlFor="">
          address:{" "}
          <input
            type="text"
            value={data.address}
            onChange={(e) => setData({ ...data, address: e.target.value })}
          />
        </label>
      </div>

      <div className="paymentData">
        <label htmlFor="">
          cardNumber:{" "}
          <input
            type="text"
            value={data.cardNumber}
            onChange={(e) => setData({ ...data, cardNumber: e.target.value })}
          />
        </label>
        <label htmlFor="">
          CVC: <input type="text" />
        </label>
        <label htmlFor="">
          data: <input type="text" />
        </label>
      </div>

      <input
        type="submit"
        value="SEND"
        className="send"
        onClick={handleSubmit}
      />
    </div>
  );
};
