import React, { useReducer } from 'react';
import withCounter from './withCounter';

const InitialValue = 0;
const CounterOne = (props) => {
    
    const [count, dispatch] = useReducer(props.reducer, InitialValue)

    return (  
        <div>
            <div>Count: {count}</div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    );
}
 
export default withCounter(CounterOne,0,1);