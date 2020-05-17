import React from "react";
import style from "./screenOneStyles.module.css"
import Title from "../Components/Title/title";
import PulseDot from "../Components/PulseDot/pulseDot";

const ScreenOne = React.memo(props => {
    const {swipePositionY, screenOne :{id, title}} = props
    const swipe = {
        transform: `translateY(${swipePositionY}%)`
    }
    const pulseDotArray = [4, 5, 6, 7]
    return (
        <div style={swipe} className={style.wrapper}>
            <Title clazz={id} swipePositionY={swipePositionY} title={<>{title[0]}<br/>{title[1]}</>}/>
            {pulseDotArray.map(el => <PulseDot key={el} swipePositionY={swipePositionY}/>)}
        </div>
    )
})

export default ScreenOne;