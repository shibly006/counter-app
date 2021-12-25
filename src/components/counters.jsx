import React, { Component } from 'react';

import Counter from './counter'

class Counters extends React.Component {
    state = {
        counters: [
            {id: 1, value: 10},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
    }

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({counters});
    }

    hanldeDelete = (id) => {
        // console.log(id);
        const counters = this.state.counters.filter(c => c.id !== id);
        this.setState({counters});
    }

    handleIncrement = counter => {
        // console.log(counter);
        const counters = [...this.state.counters]
        const ind = counters.indexOf(counter);
        counters[ind] = {...counter};
        counters[ind].value++;
        this.setState({counters});
        // this.setState({value: this.state.value+1});    //To notify React the change        
    };

    render() { 
        return (
            <div>
                <button 
                onClick={this.handleReset}
                className="btn btn-primary btn-sm m-2">Reset</button>
                {this.state.counters.map(counter => (
                    <Counter key={counter.id} onIncrement={this.handleIncrement} onDelete={this.hanldeDelete} counter={counter}>
                        <h4>Counter: {counter.id}</h4>
                    </Counter>
                ))}
            </div>
        );
    }
}
 
export default Counters;
