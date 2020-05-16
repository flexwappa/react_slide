import React from "react";
import style from "./slidePage.module.css"
import IceChunk from "../../Components/IceChunk/iceChunk";


const SlidePage = ({positionX, positionY, background, title, iceChunks}) => {
    const transformStyle = {
        screen : {
            background: `url(${background})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            transform: `translateX( ${positionX}% )`
        },
        text : {transform : `translateY(${ Math.abs(positionY) - 200 }px)`},
        chunks : {transform : `translateY( ${ Math.abs(positionY) - 50 }px)`}
    }
    const positionStyle = {
        slideOneStyles : [
            { bottom: "-3%", left: "20%", transform: "rotate(-30deg)"},
            { top: "14%", left: "-6px"},
            { top: "26%%", right: "-2%"}
        ],
        slideTwoStyles : [
            { bottom: "-3%", left: "0", transform: "rotate(-30deg)"},
            { top: "14%", left: "0"},
            { top: "0", right: "-2%"}
        ],
        slideThreeStyles : [
            { bottom: "-3%", left: "20%", transform: "rotate(-30deg)"},
            { top: "0%", left: "-6px"},
            { top: "26%%", right: "-2%"}
        ]

    }
    const iceChunksStylesArray = ["slideOneStyles", "slideTwoStyles", "slideThreeStyles"]
    return (
        <div style={transformStyle.screen} className={style.wrapper}>
            <h1 style={transformStyle.text} className={style.title}>{title}</h1>
            {iceChunksStylesArray.map((el, index) => {
                console.log(positionStyle[el], index)
                return (<div style={transformStyle.chunks && positionStyle[el][index]}>
                            <IceChunk picture={iceChunks[index]}/>
                        </div>)
            })}
        </div>
    )
}

export default SlidePage;