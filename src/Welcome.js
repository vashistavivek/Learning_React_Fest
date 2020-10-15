import React, { useState } from 'react';

const Welcome = (props) => {
    const [name, setName] = useState({firstName:'', lastName: ''})
    return (
        <form>
            <input value={name.firstName} onChange={e => setName({...name , firstName: e.target.value})}/>
            <input value={name.lastName} onChange={e => setName({...name, lastName: e.target.value})}/>
            FirstName: {name.firstName}
            LastName: {name.lastName}
        </form>
    )
}

export default Welcome;