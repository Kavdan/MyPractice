import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

export const ShippingAddress = () => {
  const navigate = useNavigate();
  const currentData = useSelector((state:any) => state.currentShippingData.address);
  const fullname = currentData?.shippingName,
        address = currentData?.streetName + currentData.city;
  const userInfo = <>
                      <p className="fullname">{fullname}</p>
                      <p className="address">{address}</p>
                      <p className="index">678933</p>
                   </>
  

  return (
    <div className='shippingAddress'>
       <div className="infoContainer">
       <h1>SHIPPING ADDRESS</h1>
        <div className="userInfo">
            {fullname.length && address.length ? userInfo 
            : <span>Shipping info not provided</span>}
        </div>
       </div>
       <button className='change' onClick={() => navigate("/addAddress")}>Change</button>
    </div>
  )
}
