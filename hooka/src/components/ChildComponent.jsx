import React from 'react';
import { useEffect } from 'react';

const ChildComponent = () => {
    const [counter, setCounter] = React.useState(0);
    const handleClick = () => {
        setCounter(counter + 1);
    };

    useEffect(() => {
        console.log('Child Component Mounted');
        console.log(`Counter value is: ${counter}`);
    }, [counter]);

    return (
        <div>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
};

export default ChildComponent;