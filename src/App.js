import React from "react";
import "./AppStyles.css"
import ScreenOne from "./ScreenOne/screenOne";
import "./fonts/fonts.css"
import ScreenTwo from "./ScreenTwo/ScreenTwo";
import Slider from "./Slider/slider";
import SlideOneImg from "./pictures/SliderScreenOne.png"
import SlideTwoImg from "./pictures/SliderScreenTwo.png"
import SlideThreeImg from "./pictures/SliderScreenThree.png"
import Pagination from "./Components/Pagination/pagination";
import GoDown from "./Components/GoDown/goDown";
import iceBig from "./pictures/iceBig.png"
import iceBlurred from "./pictures/iceBlurred.png"
import iceMedium from "./pictures/iceMedium.png"
import iceSmall from "./pictures/iceSmall.png"

class App extends React.Component {
    state = {
        pagination: {
            activeDot: 0
        },
        iceChunks: [iceBig, iceBlurred, iceMedium, iceSmall],
        slidePages: [
            {background: SlideThreeImg, title: "Звенья патогенеза СД2"},
            {background: SlideTwoImg, title: "Смертельный октет"},
            {background: SlideOneImg, title: "Звенья патогенеза СД2"}
        ],
        switcher: {
            value: 100
        },
        swipe: {
            positionY: 0
        },
        parallaxMoveStep: 0
    }
    setActiveDot = (plusOrMinus) => {
        const activeDot = this.state.pagination.activeDot
        switch (plusOrMinus) {
            case "-" :
                this.setState(({pagination}) => {
                    return {pagination: {activeDot: activeDot + 1}}
                })
                break
            case "+" :
                this.setState(({pagination}) => {
                    return {pagination: {activeDot: activeDot - 1}}
                })
                break
            default :
                break
        }

    }
    checkAmountSwitcherValue = (switcherValue) => {
        if (switcherValue <= 100 && switcherValue >= 80) return -200
        if (switcherValue <= 79 && switcherValue >= 25) return -100
        if (switcherValue <= 24 && switcherValue >= 0) return 0
    }
    getPositionX = () => {
        const switcherValue = this.state.switcher.value
        if (switcherValue <= 100 && switcherValue >= 80) return -200
        if (switcherValue <= 79 && switcherValue >= 25) return -100
        if (switcherValue <= 24 && switcherValue >= 0) return 0
    }
    changeSlide = (e) => {
        const value = e.target.value
        this.setState({switcher: {value}})
    }
    onMouseUp = (e) => {
        const value = this.checkAmountSwitcherValue(e.target.value)
        this.setState({switcher: {value: (value / 2) * -1}})
    }
    goDown = (e) => {
        this.setSwipePositionY("-")
    }
    setSwipePositionY = (plusOrMinus) => {
        const positionY = this.state.swipe.positionY
        setTimeout(() => {
            this.setActiveDot(plusOrMinus)
            this.setState(({swipe}) => {
                if (plusOrMinus === '+') return {swipe: {positionY: positionY + 100}}
                if (plusOrMinus === '-') return {swipe: {positionY: positionY - 100}}
            })
        }, 100)
    }
    touchStart = (e) => {
        e.stopPropagation();
        // this.parallax("start")
        this.startPoint = e.changedTouches[0].clientY;
    }
    startPoint;
    touchEnd = (e) => {
        // this.parallax("end")
        const positionY = this.state.swipe.positionY
        const finalPoint = e.changedTouches[0].clientY
        if (this.startPoint - finalPoint > 200 && positionY !== -200) this.setSwipePositionY("-", 100)
        if (finalPoint - this.startPoint > 200 && positionY !== 0) this.setSwipePositionY("+")
    }

    render() {
        const {pagination: {activeDot}, iceChunks, slidePages, switcher: {value}, swipe: {positionY}} = this.state
        return (
            <div className="appWrapper" onTouchStart={this.touchStart} onTouchEnd={this.touchEnd}>
                <Pagination activeDot={activeDot}/>
                {activeDot == 0 ? <GoDown goDown={this.goDown}/> : null}
                <ScreenOne positionY={positionY}/>
                <ScreenTwo positionY={positionY} iceChunks={iceChunks}/>
                <Slider iceChunks={iceChunks}
                        positionY={positionY}
                        changeSlide={this.changeSlide}
                        onMouseUp={this.onMouseUp}
                        positionX={this.getPositionX()}
                        switcherValue={value}
                        slidePages={slidePages}
                />
            </div>
        )
    }
}

export default App;