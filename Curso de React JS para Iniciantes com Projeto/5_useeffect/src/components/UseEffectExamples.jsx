import {useState, useEffect} from 'react';

const UseEffectExamples = () => {
    // good for fetching data, setting up subscriptions, or manually changing the DOM
    useEffect(() => {
        console.log('Component mounted or updated');
    }, []);

    const [count, setCount] = useState(0);

    return (
        <>
            <div>UseEffectExamples</div>
            <div>
                <h1>Count: {count}</h1>
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <button onClick={() => setCount(count - 1)}>Decrement</button>
                <button onClick={() => setCount(0)}>Reset</button>
            </div>
        </>
    )
}

export default UseEffectExamples