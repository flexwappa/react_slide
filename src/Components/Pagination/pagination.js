import React from "react";
import style from "./paginationStyle.module.css"

const Pagination = React.memo(props => {
    const {paginationActiveDot} = props
    const active = {color : "orange"}
    const paginationArray = [1, 2, 3]
    return (
        <div className={style.wrapper}>
            {paginationArray.map((el, index) => {
                return <span key={el}><i style={index === paginationActiveDot ? active : null} className="fa fa-circle"></i></span>
            })}
        </div>
    )
})
export default Pagination;