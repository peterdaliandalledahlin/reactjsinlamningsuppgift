import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { get, update } from '../../store/actions/authActions'
import EditCustomerForm from '../forms/EditCustomerForm'

const mapStateToProps = (state) => {
    return {
        customer: state.auth.customer,
        isLoggedIn: state.auth.isLoggedIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        get: () => dispatch(get()),
        update: (customer, token) => dispatch(update(customer, token)),
    }
}

class Customer extends Component {

        constructor(props) {
            super(props)
    
            this.state = {
                customer: this.props.customer,
                isEditing: false
            }
        }

    componentDidMount() {
        this.props.get()
        this.setState({ user: JSON.parse(localStorage.getItem('user')) })
    }

    componentWillReceiveProps() {
        this.setState({ isEditing: false })
    }

    onChange = e => {
        const customer = this.state.customer
        customer[e.target.id] = e.target.value
        return this.setState({ customer: customer })
    }

    saveEdit = e => {
        e.preventDefault()
        this.props.update(this.state.customer, localStorage.getItem('ACCESS_TOKEN'))
        this.props.history.push('/profile')
    }   

    cancelEdit = e => {
        this.setState({ customer: JSON.parse(localStorage.getItem('user')) })
        this.props.history.push('/profile')
    }

    toggleEdit = e => {
        this.setState({ isEditing: !this.state.isEditing })
    }

    logout = e => {
        this.props.logout(this.state.customer._id, localStorage.getItem('ACCESS_TOKEN'))
        this.setState({ isLoggedIn: false })
    } 

    render() {

        if(localStorage.getItem('ACCESS_TOKEN') === null) {
            return( <Redirect to="/login" /> )
        }

        if(this.state.isEditing) {
            return(
                <div className="container mt-5">
                    <EditCustomerForm currentUser={this.state.customer} onChange={this.onChange} saveEdit={this.saveEdit} cancelEdit={this.cancelEdit} />
                </div>
            )            
        }

        return(
            <div className="container mt-5">
                <form>
                    <button type="button" className="btn btn-primary btn-sm px-2 mb-5 " onClick={this.toggleEdit}>Ändra</button>
                    <button type="button" className="btn btn-primary btn-sm px-2 ml-3 mb-5 " onClick={this.logout}>Logga ut</button>

                    <table className="table table-striped">
                        <tbody>
                            <tr>
                                <th>Kundnummer</th><th>Förnamn</th><th>Efternamn</th>
                            </tr>
                            <tr>
                            <td>{this.props.customer.customer_number}</td><td>{this.props.customer.firstname}</td><td>{this.props.customer.lastname}</td>
                            </tr>
                            <tr>
                                <th>Företag</th><th>E-post</th><th></th>
                            </tr>
                            <tr>
                                <td>{this.props.customer.company}</td><td>{this.props.customer.email}</td><td></td>
                            </tr>
                            <tr>
                                <th>Adress</th><th></th><th></th>
                            </tr>
                            <tr>
                                <td>{this.props.customer.addressline}</td>
                            </tr>
                            <tr>
                                <th>Postnummer</th><th>Ort</th><th>Land</th>
                            </tr>
                            <tr>
                                <td>{this.props.customer.zipcode}</td><td>{this.props.customer.city}</td><td>{this.props.customer.country}</td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>        
        )

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Customer)