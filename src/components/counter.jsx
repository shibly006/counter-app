import React, { Component } from 'react';

class Counter extends React.Component {
    state = {
        count : 1
    };
    render() { 
        return (
                <React.Fragment>
                    <span>{this.state.count}</span>
                    <button>Increment</button>
                </React.Fragment>
                );
    }

    formatCount(){
        const {count} = this.state;
        return count == 0 ? 'Zero' : count; 
    }
}
 
export default Counter;