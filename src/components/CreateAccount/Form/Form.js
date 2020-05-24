import React, { useState }from 'react'
import './Form.css'

function Form() {
  const [howMany, setHowMany] = useState(0);
    const [API, setAPI] = useState("");
    const [server, setServer] = useState("eune")
    function Submit(e) {
        e.preventDefault()
            fetch("http://localhost:8080/", {
                method: 'POST',
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded',
                    "Access-Control-Allow-Origin" : "*", 
"Access-Control-Allow-Credentials" : true 
                },
                body: `server=${server}&key=${API}`   
            })
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.log('error', error))
            
        } 
    return <>
        <form className="form-accountCreator" onSubmit={Submit}>
            <label htmlFor="form-howMany">How many accouts:</label>
            <input type="number" id="form-howMany" value={howMany} onChange={e => setHowMany(e.target.value)} required/>
            <label htmlFor="form-whatServer">What Server:</label>
            <select id="form-whatServer" value={server} onChange={e => setServer(e.target.value)} required>
                <option value="eune">EUNE</option>
                <option value="euw">EUW</option>
            </select>
            <label htmlFor="form-2CaptchaKey">Your 2captcha API key:</label>
            <input type="text" id="form-2CaptchaKey" value={API} onChange={e => setAPI(e.target.value)} required/>
            <input type="submit" className="button" value="Twórz" />
        </form>    
    </>
}

export default Form;