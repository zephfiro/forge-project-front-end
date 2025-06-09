import {useState} from 'react'

const UserStateComponent = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount((prevCount) => prevCount + 1);
    }

    const [user, setUser] = useState({
        name: "Peter Parker",
        age: 25,
        suits: ["Spider Suit", "Iron Spider Suit"]
    });

    const updateUserAge = () => {
        setUser((prevUser) => ({
            ...prevUser,
            age: prevUser.age + 1
        }));
    }

    return (
        <div>
            <h2>State Management Example</h2>
            <p>Current count: {count}</p>
            <button onClick={incrementCount}>Increment Count</button>
        </div>
    )
}

export default UserStateComponent