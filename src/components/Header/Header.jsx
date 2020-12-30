import React from 'react'
import './Header.scss'
import logo from '../../assets/globant-shops.svg'
import cart from '../../assets/cart.svg'

function Header() {
  return (
    <header className="Header">
      <div className="Header__container">
        <img src={logo} alt="Globant Shops" />
        <button type="button" className="Button Button--shop">
          <img src={cart} className="Button__image" alt="Shopping cart" />
          <span className="Button__badge">3</span>
        </button>
      </div>
    </header>
  )
}

export default Header
