import React from 'react'

import slide1 from '../Slider/Image/slide1.png'
import slide2 from '../Slider/Image/slide2.png'
import slide3 from '../Slider/Image/slide3.png'
import slide4 from '../Slider/Image/slide4.png'
import slide5 from '../Slider/Image/slide5.png'
import slide6 from '../Slider/Image/slide6.png'
import slide7 from '../Slider/Image/slide7.png'
import slide8 from '../Slider/Image/slide8.png'
import slide9 from '../Slider/Image/slide9.png'
import slide10 from '../Slider/Image/slide10.png'

const Slider = () => {
    return (
        <div className="slider-block">
            <div>
                <img src={slide1} alt="slide1"/>
            </div>
            <div>
                <img src={slide2} alt="slide2"/>
            </div>
            <div>
                <img src={slide3} alt="slide3"/>
            </div>
            <div>
                <img src={slide4} alt="slide4"/>
            </div>
            <div>
                <img src={slide5} alt="slide5"/>
            </div>
            <div>
                <img src={slide6} alt="slide6"/>
            </div>
            <div>
                <img src={slide7} alt="slide7"/>
            </div>
            <div>
                <img src={slide8} alt="slide8"/>
            </div>
            <div>
                <img src={slide9} alt="slide9"/>
            </div>
            <div>
                <img src={slide10} alt="slide10"/>
            </div>
        </div>
    )
}

export default Slider