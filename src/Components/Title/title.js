import React from "react";
import style from "./titleStyles.module.css"

const Title = React.memo( props => {

    const {title, swipePositionY, clazz} = props
    const parallax = {
        transform: `translateY(${Math.abs(swipePositionY)}px)`
    }
    return (
            <h2 style={parallax} className={`${style.mainStylesTitle} ${style[clazz]}`}>{title}</h2>
    )
})
export default Title;