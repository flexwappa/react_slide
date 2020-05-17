import React from "react";
import style from "./iceSwitcherStyles.module.css"

class IceSwitcher extends React.PureComponent {
    state = {
        value : 100
    }
    checkingValue = (value, convertResult) => {
        if (value <= 100 && value >= 80) {
            if (convertResult) return {num: 100, clazz: "positionStart"}
            else return -200
        }
        if (value <= 79 && value >= 25) {
            if(convertResult) return {num: 50, clazz: "positionMiddle"}
            else return -100
        }
        if (value <= 24 && value >= 0) {
            if(convertResult) return {num: 0, clazz: "positionEnd"}
            else return 0
        }
    }
    handlerMouseUpOnChange = (e) => {
        const value = e.target.value
        const result = this.checkingValue(value, false)
        this.props.changeSlide(result)
        this.setState({value})
    }
    handlerMouseUp = (e) => {
        const target = e.target
        const {num } = this.checkingValue(target.value, true)
        this.setState({value : num})
    }

    render(){
        const {value} = this.state
        const backGroundColor = {
            background: `linear-gradient(90deg, #9CAEBE ${value}%, #303A48 0%)`
        }
        const dataArray = [1998, 2009, 2016]
        return (
            <div className={style.wrapper}>
                <input style={backGroundColor}
                       onChange={this.handlerMouseUpOnChange}
                       onMouseUp={this.handlerMouseUp}
                       onTouchEnd={this.handlerMouseUp}
                       value={value}
                       className={style.switcher}
                       min="0" max="100" type="range"/>
                <div className={style.dataElements}>
                    {dataArray.map(el => <div key={el} >{el}</div>)}
                </div>
            </div>
        )
    }
}

export default IceSwitcher;