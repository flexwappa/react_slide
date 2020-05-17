import React from "react";
import style from "./slider.module.css"
import SlidePage from "../Components/SlidePage/slidePage";

const Slider = React.memo( props => {
        const {slidePages, slidePositionX} = props
        return (
            <div className={style.wrapper}>
                {slidePages.map((slidePage, index) => {
                    return <SlidePage key={slidePage.id}
                                      clazz={slidePage.id}
                                      slidePositionX={slidePositionX}
                                      title={slidePage.title}
                    />
                })}
            </div>
        )
})

export default Slider;