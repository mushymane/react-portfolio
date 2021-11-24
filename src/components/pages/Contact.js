import React, { useState } from 'react';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameErrorMessage, setNameErrorMessage] = useState('');
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [messageErrorMessage, setMessageErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name) {
            setNameErrorMessage("What's your name? 🥺");
            return;
        }

        if (!validateEmail(email)) {
            setEmailErrorMessage('Please enter a valid email address');
            return;
        }

        if (!message) {
            setMessageErrorMessage('Please send me a meaningful message 💜');
            return;
        }

        alert("Message submitted successfully. (Actually no this portfolio doesn't have a backend yet, contact me somewhere else!)");

        setName('');
        setEmail('');
        setMessage('');
        setNameErrorMessage('');
        setEmailErrorMessage('');
        setMessageErrorMessage('');
    }

    const handleChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    }

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    return (
        <div>
            <form className="container mt-3 px-5">
                <h3>Contact</h3>
                <div className="mb-3">
                    <label for="name" className="form-label">Name</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="John Doe"
                        value={name}
                        onChange={handleChange}
                    />
                    {nameErrorMessage && (
                        <div>
                            <p className="error-text">{nameErrorMessage}</p>
                        </div>
                    )}
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Email address</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={handleChange}
                    />
                    {emailErrorMessage && (
                        <div>
                            <p className="error-text">{emailErrorMessage}</p>
                        </div>
                    )}
                </div>
                <div className="mb-3">
                    <label for="message" className="form-label">Message</label>
                    <textarea
                        className="form-control"
                        id="message"
                        rows="3"
                        name="message"
                        value={message}
                        onChange={handleChange}>

                    </textarea>
                    {messageErrorMessage && (
                        <div>
                            <p className="error-text">{messageErrorMessage}</p>
                        </div>
                    )}
                </div>
                <button type="button" onClick={handleSubmit} className="btn btn-info">Submit</button>
            </form>
        </div>
    )
}