import React from "react";
import style from "./pulseDot.module.css"

class PulseDot extends React.Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.swipePositionY === -100 || nextProps.swipePositionY === 0
    }

    render() {
        const {swipePositionY} = this.props
        const parallax = {
            transform: `translateY(${Math.abs(swipePositionY)}px)`
        }
        return (
            <span style={parallax} className={style.pulseDot}/>
        )
    }
}
export default PulseDot;