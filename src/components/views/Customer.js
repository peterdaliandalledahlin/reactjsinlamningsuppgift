import React, { Component } from 'react'
import CustomerForm from '../forms/CustomerForm'

class RegisterCustomer extends Component {


    render() {
        return(
            <div>
                <h1>Registrera kund/ärende</h1>
                <CustomerForm />
            </div>   
        )
    }

}

export default RegisterCustomer