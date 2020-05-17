import React from "react";
import style from "./screenThreeStyles.module.css"
import Slider from "../Slider/slider";
import IceSwitcher from "../Components/IceSwitcher/iceSwitcher";

const ScreenThree = React.memo(props => {

    const {onMouseUp, slidePositionX, changeSlide, iceChunks, slidePages, swipePositionY} = props
    const transformStyle = {
        screen: {transform: `translateY(${swipePositionY}%)`},
    }
    return (
        <div style={transformStyle.screen} className={style.wrapper}>
            <Slider slidePages={slidePages} iceChunks={iceChunks} slidePositionX={slidePositionX} />
            <IceSwitcher onMouseUp={onMouseUp} changeSlide={changeSlide}/>
        </div>
    )
})

export default ScreenThree;