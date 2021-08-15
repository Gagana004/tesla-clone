import React from 'react'

import './Header.css'
import TeslaLogo from '../assets/teslaLogoSmall.svg'

const Header = () => {
  return(
      <div className="header">
         <div class="header__logo">
             <img src={TeslaLogo} alt="Tesla Logo" />
         </div>

         <div class="header__center">
             <p>Model S</p>
             <p>Model 3</p>
             <p>Model X</p>
             <p>Model Y</p>
             <p>Solar Roof</p>
             <p>Solar Pannel</p>
         </div>

         <div class="header__right">
             <p>Shop</p>
             <p>Tesla Account</p>
         </div>
      </div>
  )
}

export default Header;