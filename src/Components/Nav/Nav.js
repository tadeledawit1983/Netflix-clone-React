import React, { useState, useEffect } from 'react'
import './nav.css'
const Nav = () => {
    const [isShow, setIsShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setIsShow(true)
            } else setIsShow(false)
        });
        return () => {
            window.removeEventListener('scroll')
        }

    }, [])
    return (
        <div className={`nav ${isShow && "nav-scroll"}`}>

            <img className="netflix_logo" src="images/logo.png" alt="netflix logo" />
            <img className="nav_logo" src="images/netflix2.png" alt="netflix logo" />
        </div>
    )
}

export default Nav