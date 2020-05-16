import React from "react";
import style from "./slider.module.css"
import SlidePage from "../Components/SlidePage/slidePage";
import IceSwitcher from "../Components/IceSwitcher/iceSwitcher";

const Slider = ({slidePages, changeSlide, switcherValue, positionX, onMouseUp, positionY, iceChunks}) => {
    const transformStyle = {
        transform : `translateY(${positionY}%)`
    }
    return (
        <div style={transformStyle} className={style.sliderWrapper}>
            {slidePages.map( (slide, index) => {
                return <SlidePage id={index} positionY={positionY}
                                  iceChunks={iceChunks}
                                  positionX={positionX}
                                  background={slide.background}
                                  title={slide.title}
                />
            })}
            <IceSwitcher  onMouseUp={onMouseUp} switcherValue={switcherValue} changeSlide={changeSlide}/>
        </div>
    )
}

export default Slider;