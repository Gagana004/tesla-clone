import React from 'react'

import './Header.css'
import TeslaLogo from '../assets/teslaLogoSmall.svg'


const Header = () => {

    return (
        <div className="header">
            <div className="header__logo">
                <img src={TeslaLogo} alt="Tesla Logo" />
            </div>

            <div className="header__center">
                <a href='https://www.tesla.com/models' target='_blank' className="button1">Model S</a>
                <a href='https://www.tesla.com/model3' target='_blank' className="button1">Model 3</a>
                <a href='https://www.tesla.com/modelx' target='_blank' className="button1">Model X</a>
                <a href='https://www.tesla.com/modely' target='_blank' className="button1">Model Y</a>
                <a href='https://www.tesla.com/solarroof' target='_blank' className="button1">Solar Roof</a>
                <a href='https://www.tesla.com/solarpanels' target='_blank' className="button1">Solar Pannel</a>
            </div>

            <div className="header__right">
                {/* <p className="button1">Shop</p> */}
                {/* <p className="button1">Menu</p> */}
                <a href="https://auth.tesla.com/" target='_blank' className="button1">Tesla Account</a>
            </div>
        </div>
    )
}

export default Header;