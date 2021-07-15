import {Component} from "react";
import Circle from "./Circle/Circle";


class App extends Component {
    state = {
        numbers: [
            5,
            11,
            16,
            23,
            32
        ]
    };


    getRandom = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    changeNumber = () => {
        let numberArray = [];
        while (numberArray.length <= 4) {
            const random = this.getRandom(5, 36);
           if (!numberArray.includes(random)) {
               numberArray.push(random);
           }
        };

        const sortArray = numberArray.sort((a, b) => a > b ? 1 : -1);
        this.setState({
            numbers: sortArray
        });

    }
    render() {
        return (
            <div>
                <Circle number={this.state.numbers[0]}/>
                <Circle number={this.state.numbers[1]}/>
                <Circle number={this.state.numbers[2]}/>
                <Circle number={this.state.numbers[3]}/>
                <Circle number={this.state.numbers[4]}/>
                <div className="btn">
                    <button onClick={this.changeNumber}>Click me</button>
                </div>
            </div>
        )
    }
}

export default App;
