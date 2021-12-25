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

    hanldeDelete = (id) => {
        // console.log(id);
        const counters = this.state.counters.filter(c => c.id !== id);
        this.setState({counters});
    }

    render() { 
        return (
            <div>
                {this.state.counters.map(counter => (
                    <Counter key={counter.id} onDelete={this.hanldeDelete} counter={counter}>
                        <h4>Counter: {counter.id}</h4>
                    </Counter>
                ))}
            </div>
        );
    }
}
 
export default Counters;
