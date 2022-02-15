import React from 'react'
import logoPlanet from '../assets/imgs/logo-planet.png'


export default function Loader() {
  return (
    <div className="loader-container">
        <img className="loader" src={logoPlanet} alt="logo-loader" />
    </div>
  )
}
