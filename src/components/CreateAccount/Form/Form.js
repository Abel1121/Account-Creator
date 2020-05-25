import React, { useState }from 'react'
import './Form.css'

function Form(props) {
  const [howMany, setHowMany] = useState(1);
    const [API, setAPI] = useState("");
    const [server, setServer] = useState("eune");
    const [disabled, setDisabled] = useState(false)

    async function Submit(e) {
        e.preventDefault()
        setDisabled(!disabled)
        for (let i = 0; i < howMany; i++) {
             await fetch("http://localhost:8080/", {
                method: 'POST',
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded',
                },
                body: `server=${server}&key=${API}`
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    props.setCreatedAccount([...props.createdAccount, data])
                    
                })
                .catch(error => console.log('error', error))
        }
setDisabled(disabled)
        } 
    return <>
        <form className="form-accountCreator" onSubmit={Submit}>
            <label htmlFor="form-howMany">How many accouts:</label>
            <input type="number" id="form-howMany" value={howMany} min="1" max="100" onChange={e => setHowMany(e.target.value)} required/>
            <label htmlFor="form-whatServer">What Server:</label>
            <select id="form-whatServer" value={server} onChange={e => setServer(e.target.value)} required>
                <option value="eune">EUNE</option>
                <option value="euw">EUW</option>
            </select>
            <label htmlFor="form-2CaptchaKey">Your 2captcha API key:</label>
            <input type="text" id="form-2CaptchaKey" value={API} onChange={e => setAPI(e.target.value)} required/>
            <input type="submit" className="button" value="Twórz" disabled={disabled} />
        </form>
    </>
}

export default Form;