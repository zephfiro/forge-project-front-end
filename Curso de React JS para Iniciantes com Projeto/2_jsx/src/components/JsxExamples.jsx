import React from 'react'

const JsxExamples = () => {
    const userName = "Peter Parker";
    const userRole = "Superhero";
    const user = {
        name: "Peter Parker",
        age: 25,
        address: {
            city: "New York",
            country: "USA"
        }
    }

    const users = [
        { name: "Peter Parker", age: 25 },
        { name: "Tony Stark", age: 45 }
    ]

    function getJoke() {
        return "Why did the chicken cross the road? To get to the other side!";
    }

    return (
        <div>
            <h2>Content</h2>
            <p>The user name is {userName}</p>
            <p>The user name is {user.name}, age is {user.age}, lives in {user.address.city}, {user.address.country}.</p>
            <p>{getJoke()}</p>
            <div className="something">This div has the something class</div>
            <button onClick={() => alert("Hey Man!")}>Hello</button>
            <p>{userRole === 'SuperHero'} Oh my, youre spider man!</p>

            <div>
                <ul>
                    {users.map((user, index) => (
                        <li key={index}>
                            {user.name} is {user.age} years old.
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )

}

export default JsxExamples