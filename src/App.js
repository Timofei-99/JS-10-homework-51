import {Component} from "react";
import Circle from "./Circle/Circle";


class App extends Component {
    state = {
        numbers: [
            {number: 5},
            {number: 11},
            {number: 16},
            {number: 23},
            {number: 32}
        ]
    }

    //  getRandomInRange = (min, max) {
    //     return Math.floor(Math.random() * (max - min + 1)) + min;
    // }

    getRandom = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    changeNumber = () => {
        let numberArray = [];
        while (numberArray.length <= 4) {
           numberArray.push(this.getRandom(5, 36));
        };
      const sortArray = numberArray.sort((a, b) => a > b ? 1 : -1);
      sortArray.map()

      this.setState({
          numbers: [
              {number: sortArray[0]},
              {number: sortArray[1]},
              {number: sortArray[2]},
              {number: sortArray[3]},
              {number: sortArray[4]}
          ]
      })

    }

    render() {
        return (
            <div>
                <Circle number={this.state.numbers[0].number}/>
                <Circle number={this.state.numbers[1].number}/>
                <Circle number={this.state.numbers[2].number}/>
                <Circle number={this.state.numbers[3].number}/>
                <Circle number={this.state.numbers[4].number}/>
                <div className="btn">
                    <button onClick={this.changeNumber}>Click me</button>
                </div>
            </div>
        )
    }
}

export default App;
