import React from "react";
import style from "./goDownStyles.module.css"

const GoDown = ({goDown}) => {
    return (
        <div className={style.goDown}>
            <div onClick={goDown} className={style.wrapper}>
                <span>Листайте вниз</span>
                <span className={style.arrow}><i className="fa fa-chevron-down"></i></span>
                <div className={style.rectangle}/>
            </div>
        </div>
    )
}
export default GoDown;