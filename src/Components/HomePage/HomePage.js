import React from 'react'

import Slider from '../Slider/Slider.js'
import HeroSection from '../HeroSection/HeroSection.js'
import Presentation from '../Presentation/Presentation.js'

export default function HomePage() {
    return (
        <div>
            <HeroSection/>
            <Presentation/>
            <Slider/>
        </div>
    )
}
