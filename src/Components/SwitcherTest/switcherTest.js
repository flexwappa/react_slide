import React from "react";
import style from "./switcherTest.module.css"

class SwitcherTest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 5,
            value2: 10,
            value3: 10,
            value4: {
                min: 5,
                max: 10,
            },
            value5: {
                min: 3,
                max: 7,
            },
        };
    }

    render() {
        return (
            <form className="form">
                <input
                    maxValue={20}
                    minValue={0}
                    value={this.state.value}
                    onChange={value => this.setState({ value })}
                    onChangeComplete={value => console.log(value)} />

                <input
                    maxValue={20}
                    minValue={0}
                    disabled
                    value={this.state.value2}
                    onChange={value => this.setState({ value })}
                    onChangeComplete={value => console.log(value)} />

                <input
                    maxValue={20}
                    minValue={0}
                    formatLabel={value => value.toFixed(2)}
                    value={this.state.value3}
                    onChange={value => this.setState({ value3: value })}
                    onChangeComplete={value => console.log(value)} />

                <input
                    maxValue={20}
                    minValue={0}
                    formatLabel={value => `${value} kg`}
                    value={this.state.value4}
                    onChange={value => this.setState({ value4: value })}
                    onChangeComplete={value => console.log(value)} />

                <InputRange
                    draggableTrack
                    maxValue={20}
                    minValue={0}
                    formatLabel={value => `${value} kg`}
                    value={this.state.value5}
                    onChange={value => this.setState({ value5: value })}
                    onChangeComplete={value => console.log(value)} />
            </form>
        );
    }
}
export default SwitcherTest;