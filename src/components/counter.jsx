import React, { Component } from 'react';

class Counter extends React.Component {
    state = {
        value : this.props.value,
        tags: ["tag1", "tag2", "tag3"]       
    };
    
    // constructor(){
    //     super();
    //     console.log("Constructor", this);
    //     this.handleIncrement= this.handleIncrement.bind(this);
    // }

    handleIncrement = (product) => {
        // console.log('Increment Clicked', this);        
        // this.state.count++;                

        console.log(product);
        this.setState({value: this.state.value+1});    //To notify React the change        
    };

    render() {         
        console.log('Props', this.props);        
        return (
                <div>     
                    {/* {this.props.children}                */}
                    
                    <span className={this.getBadgeClsses()}>{this.formatCount()}</span>

                    <button 
                        onClick={()=>this.handleIncrement({id: 1})} 
                        className="btn btn-secondary btn-sm"
                        >
                        Increment
                    </button>

                    <button 
                        onClick={ () => this.props.onDelete(this.props.id)} 
                        className="btn btn-danger btn-sm m-2"
                        >
                        Delete
                    </button>                    
                </div>
                );        
    }

    getBadgeClsses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value == 0 )?  "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value: count} = this.state;
        return count == 0 ? "Zero" : count; 
        
        // const x = <h1>Zero</h1>;
        // return count == 0 ? x : count; 
        // return count == 0 ? 'Zero' : count;         
        // return count == 0 ? <h1>Zero</h1> : count; 
        
    }
}
 
export default Counter;