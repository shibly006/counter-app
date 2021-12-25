import React, { Component } from 'react';

class Counter extends React.Component {
    
    render() {         
        // console.log('Props', this.props);        
        return (
                <div>                                             
                    <span className={this.getBadgeClsses()}>{this.formatCount()}</span>

                    <button 
                        onClick={()=>this.props.onIncrement(this.props.counter)} 
                        className="btn btn-secondary btn-sm"
                        >
                        Increment
                    </button>

                    <button 
                        onClick={ () => this.props.onDelete(this.props.counter.id)} 
                        className="btn btn-danger btn-sm m-2"
                        >
                        Delete
                    </button>                    
                </div>
                );        
    }

    getBadgeClsses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value == 0 )?  "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value: count} = this.props.counter;
        return count == 0 ? "Zero" : count; 
        
        // const x = <h1>Zero</h1>;
        // return count == 0 ? x : count; 
        // return count == 0 ? 'Zero' : count;         
        // return count == 0 ? <h1>Zero</h1> : count; 
        
    }
}
 
export default Counter;