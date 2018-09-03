import React from 'react';

class CounterButton extends React.Component {

    constructor() {
        super();
        this.state = {
            count: 0
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.count !== this.state.count;
    }

    updateCount = () => {
        this.setState(previousState => {
            return { count: previousState.count + 1 };
        });
    }

    render() {
        return (
            <button onClick={this.updateCount}>
                Count: {this.state.count}
            </button>
        );
    }
}

export default CounterButton;
