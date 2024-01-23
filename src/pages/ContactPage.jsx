import { useState } from 'react'
export default function ContactPage() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleInputChange = (e) => {
        const { target } = e
        const inputType = target.name
        const inputValue = target.value

        switch(inputType) {
            case 'name':
                setName(inputValue)
                break;
            case 'email':
                setEmail(inputValue)
                break;
            case 'message':
                setMessage(inputValue)
        }
    }
    
    const handleFormSubmit = (e) => {
        e.preventDefault()
        alert('Message sent!')

        setName('')
        setEmail('')
        setMessage('')
    }
    return (
        <form onSubmit={handleFormSubmit}>
            <input
                value={name}
                name='name'
                onChange={handleInputChange}
                type='text'
                placeholder='Name'
            />
            <input
                value={email}
                name='email'
                onChange={handleInputChange}
                type='email'
                placeholder='email'
            />
            <input
                value={message}
                name='message'
                onChange={handleInputChange}
                type='text'
                placeholder='Enter your message here!'
            />
            <button type='submit'>Submit</button>
        </form>
    )
}
