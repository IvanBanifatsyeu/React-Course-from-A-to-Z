import React from "react";

export default class ClassCounter extends React.Component {
    constructor (props) {
        super(props);
        this.state = {counter: 0 };
        this.handleClickIncrement = this.handleClickIncrement.bind(this);
        this.handleClickdDecrement = this.handleClickdDecrement.bind(this)

    }

    handleClickIncrement() {
		this.setState({counter: this.state.counter + 1 })
	}

	handleClickdDecrement () {
		this.setState({counter: this.state.counter - 1 })
	}

    render() {
        return (
            <div>
            <h1>{this.state.counter}</h1>
            <button onClick={this.handleClickIncrement}>Increment</button>
			<button onClick={this.handleClickdDecrement}>Decrement</button>
        </div>

        )
    }
    

}