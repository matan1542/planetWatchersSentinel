import React from 'react'
import { useRecoilValue } from 'recoil'
import { isDarkMode } from '../store/store'


export default function Footer() {
    const isDark = useRecoilValue(isDarkMode)
    return (
        <div className={`footer-container ${isDark ? 'dark-mode' : ''}`}>© Matan Lasry 2022</div>
    )
}
