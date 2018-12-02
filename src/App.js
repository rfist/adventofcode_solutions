import React, {Component} from 'react';
import Solutions from './Solutions'


class App extends Component {
    constructor() {
        super();
        this.solutions = new Solutions();
        const day = Math.max(...Object.keys(this.solutions.getCollection()));
        this.state = {year: 2015, day: day, answer: "..."};
    }
    changeYearHandler(year) {
        year = parseInt(year, 10);
        this.solutions.setYear(year);
        this.setState({year});
        console.log('current year is', year)
    }
    changeDayHandler(day) {
        this.setState({day: parseInt(day, 10)});
        this.puzzleSelector.value = 0;
        console.log('current day is', day);
    }
    checkAnswer() {
        const input = this.textarea.value;
        let answer = '';
        if (input.length === 0) {
            answer = 'Empty input field!';
        } else {
            answer = this.solutions.getByDay(this.state.day, input, this.puzzleSelector.value);
        }
        this.setState({answer});
    }
    clearInput() {
        this.textarea.value = '';
        this.setState({answer: '...'});
    }
    render() {
        const collection = this.solutions.getCollection();
        const days = Object.keys(collection);
        return (
            <div className="App">
                <header><div><h1 className="title-global"><a href="/">Advent of Code</a></h1></div></header>
                <a onClick={() => this.changeYearHandler("2015")}> [2015]</a>
                <a onClick={() => this.changeYearHandler("2018")}> [2018]</a>
                <hr/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            Input value <textarea cols="22" rows="10" ref={(textarea) => this.textarea = textarea}></textarea>
                            <br/>
                            <select className="puzzleSelector" size="2" ref={(select) => this.puzzleSelector = select}>
                                <option value="0">Puzzle one</option>
                                <option value="1">Puzzle two</option>
                            </select>
                            <br/>
                            <a onClick={this.checkAnswer.bind(this)}> [Submit]</a>
                            <a onClick={this.clearInput.bind(this)}> [Clear]</a>
                            <hr/>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="answer">
                                        {this.state.answer}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-1"/>
                        <div className="col-md-8">
                            <span>Select day:</span>
                            {days.map(id => <Day active={id == this.state.day} key={id} name={id} handler={() => this.changeDayHandler(id)}>{collection[id].description}</Day>)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const Day = (props) => <h4><a className={props.active === true ? "active" : ""} onClick={props.handler}>{props.name} {props.children}</a></h4>

export default App;
