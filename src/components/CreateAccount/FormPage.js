import React, { useState} from 'react';
import './FormPage.css'
import Form from './Form/Form'
import AccountDescription from './AccountDescription/AcountDescription';

function FormPage() {

    const [createdAccount, setCreatedAccount] = useState([])
    return <>
            <div className="formPage">
            <Form setCreatedAccount={setCreatedAccount} createdAccount={createdAccount}/>
            <AccountDescription item={createdAccount} />
            </div>
        </>

}

export default FormPage;