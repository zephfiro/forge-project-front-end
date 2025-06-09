import {useState} from 'react'

const EventHadlingExamples = () => {
    const handleClick = () => alert('Hello man!')
    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Hello ${name}`)
    }

    const [name, setName] = useState('')

    return (
        <div>
        <h2>Event Handling Examples</h2>
        <button onClick={() => alert('Hi there!')}>Hello</button>
        <button onClick={handleClick}>Hello</button>
        
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Type something..." 
            />
            <button type="submit">Submit</button>
        </form>
        </div>
    )
}

export default EventHadlingExamples