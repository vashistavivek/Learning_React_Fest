import React, { Component } from 'react';

const withCounter = (WrappedComponent, InitialValue, IncrementValue) => {
    
    class WithCounter extends Component {
        reducer = (state, action) => {
            switch(action){
                case 'increment' : return state + IncrementValue;
                case 'decrement' : return state - IncrementValue;
                case 'reset' : return InitialValue;
                default : return state;
            }
        }

        render() { 
            return (  
                <WrappedComponent reducer={this.reducer} {...this.props}/>
            );
        }
    }
     
    return WithCounter;
}

export default withCounter;