import React from "react";
import style from "./iceChunkStyles.module.css"

const IceChunk = React.memo( props => {
    const {typeOfChunk, clazz, swipePositionY} = props
    const parallax = {
        transform : `translateY(${ Math.abs(swipePositionY) - 50 }%)`
    }
    return (
        <div style={parallax} className={`${style[clazz]} ${style[typeOfChunk]}`}></div>
    )
})
export default IceChunk;