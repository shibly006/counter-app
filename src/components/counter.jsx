import React, { Component } from 'react';

class Counter extends React.Component {
    state = {
        count : 0,
        imageUrl: 'https://picsum.photos/200'
    };

    styles = {
        fontSize: 10,
        fontWeight: 'bold'
    }
    render() { 
        return (
                <React.Fragment>
                    
                    {/* <span style={{fontSize:30}} className="badge badge-primary m-2">{this.formatCount()}</span> */}
                    <span style={this.styles} className="badge badge-primary m-2">{this.formatCount()}</span>
                    <button className="btn btn-secondary btn-sm">Increment</button>
                </React.Fragment>
                );
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