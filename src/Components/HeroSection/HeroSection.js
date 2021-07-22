import React from 'react'
import './styles.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default function HeroSection() {
    return (
        <div className="hero-section">
            <div className="hero-text">
                <h2>
                Photographe Professionnel à Lyon 
                </h2>
                <h3>particuliers et professionnels</h3>
                {/* <button className='hero-btn'>Réservez votre séance !</button> */}
                <Link  to="/reservation">
                <button className='hero-btn'>Réservez votre séance !</button>
              </Link>

            </div>
            
        </div>
    )
}
