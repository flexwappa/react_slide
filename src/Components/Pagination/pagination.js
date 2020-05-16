import React from "react";
import "./paginationStyle.css"

const Pagination = ({activeDot}) => {
    const active = {color : "orange"}
    const paginationArray = [1, 2, 3]
    return (
        <div className="paginationWrapper">
            {paginationArray.map((el, index) => {
                return <span className=""><i style={index == activeDot ? active : null} className="fa fa-circle"></i></span>
            })}
        </div>
    )
}
export default Pagination;