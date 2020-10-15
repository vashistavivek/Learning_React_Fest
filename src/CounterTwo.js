import React, { useReducer } from 'react';
import withCounter from './withCounter';

const InitialValue = 0;
const CounterTwo = (props) => {
    
    const [count, dispatch] = useReducer(props.reducer, InitialValue)

    return (  
        <div>
            <div>Count: {count} {props.counter}</div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    );
}
 
export default withCounter(CounterTwo,0,5);