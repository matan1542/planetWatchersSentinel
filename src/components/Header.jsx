import React from 'react'
import logoPlanet from '../assets/imgs/logo-planet.png'

export default function Header() {
  return (
    <div className="header-container">
        <img className="logo-planet" src={logoPlanet} alt="Logo img" />
    </div>
  )
}
