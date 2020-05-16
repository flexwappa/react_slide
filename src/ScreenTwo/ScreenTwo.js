import React from "react";
import style from "./ScreenTwoStyles.module.css"
import IceChunk from "../Components/IceChunk/iceChunk";

const ScreenTwo = ({iceChunks, positionY}) => {
    const transformStyle = {
        screen : {transform : `translateY(${positionY}%)`},
        text : {transform : `translateY(${ Math.abs(positionY) - 20 }%)`},
        chunks : {transform : `translateY(${ Math.abs(positionY) - 50 }%)`}
    }
    const iceChunksStylesArray = ["BigChunk", "BlurredChunk", "MediumChunk", "SmallChunk"]
    return (
        <div style={transformStyle.screen} className={style.wrapper}>
            <h2 style={transformStyle.text} className={style.title}>Основа терапии —<br/>патогенез СД2</h2>
            {iceChunksStylesArray.map((el, index) => <div style={transformStyle.chunks} className={style[el]}><IceChunk picture={iceChunks[index]}/></div>)}
        </div>
    )
}

export default ScreenTwo;