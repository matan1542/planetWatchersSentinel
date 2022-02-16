import React from 'react'
import logoPlanet from '../assets/imgs/logo-planet.png'
import logoPlanetDark from '../assets/imgs/logo-planet-dark.png'
import Toggle from './Toggle'
import { useRecoilState } from 'recoil'
import { isDarkMode } from '../store/store.js'

export default function Header() {
    const [isDark, setIsDark] = useRecoilState(isDarkMode)
    const onToggle = () => {
        setIsDark(!isDark)
        console.log('isDark', isDark);
    }
    return (
        <div className={`header-container ${isDark ? 'dark-mode' : ''}`}>
            <img className="logo-planet" src={isDark ? logoPlanetDark : logoPlanet} alt="Logo img" />
            <Toggle onToggle={onToggle} />
        </div>
    )
}
