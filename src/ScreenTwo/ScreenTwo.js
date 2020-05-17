import React from "react";
import style from "./ScreenTwoStyles.module.css"
import IceChunk from "../Components/IceChunk/iceChunk";
import Title from "../Components/Title/title";

const ScreenTwo = React.memo(props => {
    const {swipePositionY, screenTwo : {id, title}} = props
    const transformStyle = {
        screen : {transform : `translateY(${swipePositionY}%)`},
    }
    const iceChunksArray = ["BigChunk", "BlurredChunk", "MediumChunk", "SmallChunk"]
    return (
        <div style={transformStyle.screen} className={style.wrapper}>
            <Title clazz={"ScreenTwo"} swipePositionY={swipePositionY} title={<>{title[0]}<br/>{title[1]}</>} />
            {iceChunksArray.map(el => <IceChunk swipePositionY={swipePositionY}
                                                key={el}
                                                typeOfChunk={el}
                                                clazz={id}/>)}
        </div>
    )
})

export default ScreenTwo;