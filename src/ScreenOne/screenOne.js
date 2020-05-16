import React from "react";
import style from "./screenOneStyles.module.css"

const ScreenOne = ({positionY}) => {
    console.log(positionY)
    const transformStyle = {
        screen: {transform: `translateY(${positionY}%)`},
        text: {transform: `translateY(${Math.abs(positionY)}px)`},
        pulseDot: {transform: `translateY(${Math.abs(positionY)}px)`, transition: "1s"},
    }
    const pulseDotArray = [1, 2, 3, 4]
    return (
        <div style={transformStyle.screen} className={style.wrapper}>
            <h1 style={transformStyle.text} className={style.title}>Всегда ли цели терапии СД2<br/>на поверхности?</h1>
            {pulseDotArray.map(el => <span style={transformStyle.pulseDot} className={style.pulseDot}/>)}
        </div>
    )
}

export default ScreenOne;