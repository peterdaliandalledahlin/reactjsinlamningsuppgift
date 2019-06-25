import React, { Component } from 'react'
import http from 'axios'
import { NavLink } from 'react-router-dom'
import CustomerIssueForm from './CustomerIssueForm';

class CustomerIssue extends Component {
    constructor(props) {
        super(props)

        this.state = {
            //id: '5cff5e2cf3bdc327ecc3db69',
            //currentUser: {}
            customers: []
        }
    }

    render() {

        const { customers} = this.state
        return (
            <div>
                <CustomerIssueForm />
                <h4 className="mt-5 mb-3">Kundregister</h4>
                {customers.length ? customers.map( (customer) => <div key={customer._id}>
                    <table className="table table-striped mb-5">
                        <tbody>
                            <tr>
                                <th>
                                    Kundnummer
                                </th>
                            </tr>
                            <tr>
                                <td>{customer._id}</td>
                            </tr>
                            <tr>
                                <th>Förnamn</th><th>Efternamn</th><th>Företag</th>
                            </tr>
                            <tr>
                                <td>{customer.firstname}</td><td>{customer.lastname}</td><td>{customer.company}</td>           
                            </tr>
                            <tr>
                                <th>E-post</th><th>Telefon</th><th></th>
                            </tr>
                            <tr>
                                <td>{customer.email}</td><td>{customer.phone}</td>
                            </tr>
                            <tr>
                                <th>Adress</th><th></th><th></th>
                            </tr>
                            <tr>
                                <td>{customer.addressline}</td>
                            </tr>
                            <tr>
                                <th>Postnummer</th><th>Stad</th><th>Land</th>
                            </tr>
                            <tr>
                                <td>{customer.zipcode}</td><td>{customer.city}</td><td>{customer.country}</td>
                            </tr>
                            <tr>
                                <td><NavLink to="/customerissueform" type="button"  className="btn btn-primary">Registrera ärende</NavLink></td>
                            </tr>
                        </tbody>
                    </table>
            </div>) : null
            }  
        </div>

        )
    }

    componentDidMount() {
        let token = localStorage.getItem('ACCESS_TOKEN')
        http.get('http://localhost:3001/api/customers/all', {headers: {'Authorization' : `Bearer  ${token}`}})
            .then(user => this.setState({ customers : user.data }))
            .catch(error => console.log(error))
    }

}

export default CustomerIssue