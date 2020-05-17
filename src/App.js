import React from "react";
import "./AppStyles.css"
import ScreenOne from "./ScreenOne/screenOne";
import "./fonts/fonts.css"
import ScreenTwo from "./ScreenTwo/ScreenTwo";
import Pagination from "./Components/Pagination/pagination";
import GoDown from "./Components/GoDown/goDown";
import ScreenThree from "./ScreenThree/screenThree";

class App extends React.Component {
    state = {
        paginationActiveDot : 0,
        slidePages: [
            {id: "SlideOne", title: "Звенья патогенеза СД2"},
            {id: "SlideTwo", title: "Смертельный октет"},
            {id: "SlideThree", title: "Звенья патогенеза СД2"}
        ],
        screenPages: [
            {id: "ScreenOne", title : ["Всегда ли цели терапии СД2", "на поверхности?"]},
            {id: "ScreenTwo", title: ["Основа терапии -", "патогенез СД2"]},
        ],
        slidePositionX: -200,
        swipePositionY: 0,
    }
    // ------------PAGINATION--HANDLER----------- //
    setActiveDot = (plusOrMinus) => {
        const activeDot = this.state.paginationActiveDot
        switch (plusOrMinus) {
            case "-" :
                this.setState(({pagination}) => {
                    return {paginationActiveDot : activeDot + 1}
                })
                break
            case "+" :
                this.setState(({pagination}) => {
                    return {paginationActiveDot: activeDot - 1}
                })
                break
            default :
                break
        }

    }
    // ------------SLIDER--HANDLER----------- //
    changeSlide = (slidePositionX) => {
        this.setState({slidePositionX})
    }
    // ------------ARROW-DOWN--HANDLER----------- //
    goDown = (e) => {
        this.setSwipePositionY("-")
    }
    // ------------SWIPE--HANDLERS------------- //
    startPoint;
    touchStart = (e) => {
        e.stopPropagation();
        this.startPoint = e.changedTouches[0].clientY;
    }
    touchEnd = (e) => {
        const positionY = this.state.swipePositionY
        const finalPoint = e.changedTouches[0].clientY
        if (this.startPoint - finalPoint > 200 && positionY !== -200) this.setSwipePositionY("-", 100)
        if (finalPoint - this.startPoint > 200 && positionY !== 0) this.setSwipePositionY("+")
    }
    setSwipePositionY = (plusOrMinus) => {
        const positionY = this.state.swipePositionY
        setTimeout(() => {
            this.setActiveDot(plusOrMinus)
            this.setState(({swipe}) => {
                if (plusOrMinus === '+') return {swipePositionY: positionY + 100}
                if (plusOrMinus === '-') return {swipePositionY: positionY - 100}
            })
        }, 100)
    }

    render() {
        const {paginationActiveDot, screenPages, slidePages, swipePositionY, slidePositionX} = this.state
        return (
            <div className="appWrapper" onTouchStart={this.touchStart} onTouchEnd={this.touchEnd}>
                <Pagination paginationActiveDot={paginationActiveDot}/>
                {paginationActiveDot === 0 ? <GoDown goDown={this.goDown}/> : null}
                <ScreenOne screenOne={screenPages[0]} swipePositionY={swipePositionY}/>
                <ScreenTwo screenTwo={screenPages[1]} swipePositionY={swipePositionY}/>
                <ScreenThree swipePositionY={swipePositionY}
                             slidePositionX={slidePositionX}
                             changeSlide={this.changeSlide}
                             slidePages={slidePages}/>
            </div>
        )
    }
}

export default App;