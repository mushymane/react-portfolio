import React, { useState } from 'react';

export default function Contact() {
    const [input, setInput] = useState({
        input: {},
        errors: {}
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            let formInput = {};
            formInput["name"] = ""
            formInput["email"] = ""
            formInput["message"] = ""

            setInput({
                input: formInput
            })
            alert("Your message has been sent");
        }
    }

    const handleChange = (e) => {
        let formInput = input;
        formInput[e.target.name] = e.target.value;
        console.log(formInput)
        setInput(formInput);
    }

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const validatePassword = (password) => {
        const passregex = /^[A-Za-z]\w{7,14}$/;
        if (password.match(passregex)) {
            return true;
        }
        return false;
    }

    return (
        <form className="container mt-3 px-5" onSubmit={handleSubmit}>
            <h3>Contact</h3>
            <div className="mb-3">
                <label for="name" className="form-label">Name</label>
                <input 
                    type="text" 
                    name="name"
                    className="form-control" 
                    id="name" 
                    placeholder="John Doe"
                    value={input} 
                    onChange={handleChange}
                />
                <div className="text-danger">{input.errors.name}</div>
            </div>
            <div className="mb-3">
                <label for="email" className="form-label">Email address</label>
                <input 
                    type="text" 
                    name="email"
                    className="form-control" 
                    id="email" 
                    placeholder="name@example.com" 
                    value={input} 
                    onChange={handleChange}
                />
                <div className="text-danger">{input.errors.email}</div>
            </div>
            <div className="mb-3">
                <label for="message" className="form-label">Message</label>
                <textarea 
                    className="form-control" 
                    id="message" 
                    rows="3"
                    name="message"
                    value={input}
                    onChange={handleChange}>

                </textarea>
            </div>
            <button type="submit" className="btn btn-info">Submit</button>
        </form>
    )
}