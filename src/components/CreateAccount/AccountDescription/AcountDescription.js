import React from 'react'
import './AcountDescription.css'
import ListItem from "./ListItem/Listitem"

function AccountDescription(props) {
    return <ul className="accountDescription">
        {props.item.map((item) => (
            <li key={item}>{item}</li>
        ))}
    </ul>
        
};
export default AccountDescription;