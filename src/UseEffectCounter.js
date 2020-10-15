import React, { useState, useEffect } from 'react';

const UseEffectCounter = (props) => {
    
    const [count, setCount] = useState(0)
    const [value, setValue] = useState('none')

    const doSomething = () => {
        setValue(value+'1')
    }
    useEffect(() => {
        doSomething()
        console.log("useEffect called")
    },[count]);

    return ( 
        <div>
            <button onClick={()=> setCount(count+1)}>Click {count} {value}</button>
        </div>
    );
}
 
export default UseEffectCounter;