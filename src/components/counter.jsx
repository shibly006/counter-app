import React, { Component } from 'react';

class Counter extends React.Component {
    state = {
        count : 1       
    };

    render() {         
        return (
                <React.Fragment>                    
                    <span className={this.getBadgeClsses()}>{this.formatCount()}</span>
                    <button className="btn btn-secondary btn-sm">Increment</button>
                </React.Fragment>
                );        
    }

    getBadgeClsses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count == 0 )?  "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {count} = this.state;
        return count == 0 ? "Zero" : count; 
        
        // const x = <h1>Zero</h1>;
        // return count == 0 ? x : count; 
        // return count == 0 ? 'Zero' : count;         
        // return count == 0 ? <h1>Zero</h1> : count; 
        
    }
}
 
export default Counter;