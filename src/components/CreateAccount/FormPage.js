import React from 'react';
import './FormPage.css'
import Form from './Form/Form'
import AccountDescription from './AccountDescription/AcountDescription'
function FormPage() {
  
    return <>
            <div className="formPage">
            <Form/>
                <AccountDescription />
            </div>
        </>

}

export default FormPage;