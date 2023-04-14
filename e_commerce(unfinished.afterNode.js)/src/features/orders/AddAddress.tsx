import React from 'react'
import { useDispatch } from 'react-redux';
import { addAddress } from './currentShippingData';
import { useNavigate } from 'react-router';

export const AddAddress = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddress= (e : any) => {
        e.preventDefault();
        const form = e.target;
        const shippingName = form[0].value;
        const streetName = form[1].value;
        const city = form[2].value;
        const country = form[3].value;

        dispatch(addAddress({
            shippingName,
            streetName,
            city,
            country,
        }))

        navigate(-1);
    }

  return (
    <div className='addAddressContainer'>
        <form onSubmit={handleAddress}>
            <input type="text" className="shippingName" placeholder='Shipping Name'/>
            <input type="text" className="streetName" placeholder='Street Name'/>
            <input type="text" className="city" placeholder='City'/>
            <input type="text" className="country" placeholder='Country'/>
            <div className="checkBoxContainerAddress">
            <input type="checkbox" name="" id="" className='saveAsDefaultAddress'/>
            <span>Save as your Default Address</span>
            </div>
            <button>Add Address</button>
        </form>
    </div>
  )
}
