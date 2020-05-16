import React from "react";
import "./goDownStyles.css"

const GoDown = ({goDown}) => {
    return (
        <div className="goDown">
            <div onClick={goDown} className="goDownWrapper">
                <span>Листайте вниз</span>
                <span className="goDownArrow"><i className="fa fa-chevron-down"></i></span>
                <div className="rectangle"></div>
            </div>
        </div>
    )
}
export default GoDown;