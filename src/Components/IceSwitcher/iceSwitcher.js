import React from "react";
import style from "./iceSwitcherStyles.module.css"

const IceSwitcher = ({onMouseUp, switcherValue, changeSlide}) => {
    const backGroundColor = {
        background: `linear-gradient(90deg, #9CAEBE ${switcherValue}%, #303A48 0%)`
    }
    return (
        <div className={style.wrapper}>
            <input style={backGroundColor}
                   onChange={changeSlide}
                   onMouseUp={onMouseUp}
                   onTouchEnd={onMouseUp}
                   value={switcherValue}
                   className={style.switcher}
                   min="0" max="100" type="range"/>
            <div className={style.pseudoElements}>
                <span>1998</span>
                <span>2009</span>
                <span>2016</span>
            </div>
        </div>
    )
}
export default IceSwitcher;