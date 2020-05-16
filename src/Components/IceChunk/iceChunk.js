import React from "react";
// import "./iceChunkStyle.css"
// import iceBig from "../../pictures/iceBig.png"
// import iceBlurred from "../../pictures/iceBlurred.png"
// import iceMedium from "../../pictures/iceMedium.png"
// import iceSmall from "../../pictures/iceSmall.png"

const IceChunk = ({picture}) => {
    // const getBackGroundImage = () => {
    //     let result;
    //     switch (iceChunk) {
    //         case "BigChunk" :
    //             result = iceBig
    //             break;
    //         case "BlurredChunk" :
    //             result = iceBlurred
    //             break;
    //         case "MediumChunk" :
    //             result = iceMedium
    //             break;
    //         case "SmallChunk" :
    //             result = iceSmall
    //             break;
    //     }
    //     return result
    // }
    return (
        <div className="IceChunkWrapper">
            <img src={picture}
                 alt="Кусок льда"/>
        </div>
    )
}
export default IceChunk;