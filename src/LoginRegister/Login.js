import React, { useState } from 'react';
import './Login.css';

export default function Login() {
    const [nickname, setNickname] = useState("");
    const [password, setPassword] = useState("");

    function submit(e) { 

    }

    return <><div className="container">
        <h1>Login</h1>
            <form className="form" onSubmit={submit}>
                <label htmlFor="nickname">Nickname:</label>
                <input id="nickname" type="text" value={nickname} onChange={e => setNickname(e.target.value)} placeholder="Enter a nickname" className="textfield" />

                <label htmlFor="password">Password:</label>
                <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter a password" className="textfield" />
                <div className="form-footer">
                    <a className="link-register" href="./register.js">Are u need a account?</a>
                    <input type="submit" className="button" value="Login" />
                </div>
            </form>
        </div>
        </>
}