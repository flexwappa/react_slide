import React from "react";
import style from "./slidePage.module.css"
import IceChunk from "../../Components/IceChunk/iceChunk";
import Title from "../Title/title";

const SlidePage = React.memo(props => {
    const {slidePositionX, clazz, title} = props
    const transformStyle = {
            transform: `translateX( ${slidePositionX}% )`
        }
    const iceChunksArray = ["BigChunk", "SmallChunk", "MediumChunk"]
    return (
        <div style={transformStyle} className={`${style[clazz]} ${style.wrapper}`}>
            <Title clazz={"SliderPages"} title={title}/>
            {iceChunksArray.map(el => <IceChunk key={el} typeOfChunk={el} clazz={clazz}/>)}
        </div>
    )
})

export default SlidePage;