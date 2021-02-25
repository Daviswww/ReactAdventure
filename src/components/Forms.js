import { useState } from 'react'

const Forms = ( { onAdd } ) => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!email) {
            alert("Please add email")
            return
        }

        onAdd({username, email, password, reminder})
        setUsername('')
        setEmail('')
        setPassword('')
        setReminder(false)
    }

    return (
        <form className="p-3" onSubmit={onSubmit}>
        <div className="form-group">
            <label htmlFor="exampleInputText">Username</label>
            <input type="text" className="form-control" id="exampleInputText" placeholder="Enter your name" value={username} onChange= {(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange= {(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange= {(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"
            checked={reminder} 
            value={reminder} 
            onChange= {(e) => setReminder(e.currentTarget.checked)}/>
            <label className="form-check-label" htmlFor="exampleCheck1">Reminder</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Forms
