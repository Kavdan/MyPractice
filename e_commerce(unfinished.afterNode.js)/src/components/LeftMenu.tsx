import React from 'react'
import menu from '../assets/menu.svg'
import mainItem from '../assets/main.svg'
import bagItem from '../assets/bag.svg'
import logOut from '../assets/logOut.svg'
import '../app.scss'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'


export const LeftMenu = () => {
    const bagCount = useSelector((state : any) => state.bag.length);
    const navigate = useNavigate()

  return (
    <div className='leftMenuContainer'>
        <ul className='menuItems'>
           <div>
            <li className='mainItem active' onClick={() => navigate('/main')}>
                <img src={mainItem} alt="mainPage" />
            </li>
            <li className="bagItem" onClick={() => navigate('/bag')}>
                <img src={bagItem} alt="bag" />
                {bagCount ? <span>{bagCount}</span> : ""}
            </li>
           </div>
            <li className="logOut" onClick={() => navigate('/signUp')}>
                <img src={logOut} alt="logOut" />
            </li>
        </ul>
    </div>
  ) 
}
