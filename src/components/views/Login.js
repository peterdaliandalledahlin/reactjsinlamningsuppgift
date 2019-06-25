import React, { Component } from 'react'
import LoginForm from '../forms/LoginForm'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from '../../store/actions/authActions'

const mapStateToProps = (state) => {
    return {
        user: state.auth.currentUser,
        isLoggedIn: state.auth.isLoggedIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (credentials) => dispatch(login(credentials))
    }
}

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            user: {},
            cred: {
                email: '',
                password: ''
            }
        }
    }

    // validateForm() {
    //     return this.state.email.length > 0 && this.state.password.length > 0;
    // }

    onChange = (e) => {
        const credentials = this.state.cred
        credentials[e.target.id] = e.target.value
        return this.setState({ cred: credentials })
     }
 
     onSubmit = (e) => {
         e.preventDefault()
         this.props.login(this.state.cred)
     }


     render() {
        if(localStorage.getItem('ACCESS_TOKEN') !== null) {
            return( <Redirect to="/profile" /> )
        }

        return(
            <div className="container mt-5">
                <LoginForm cred={this.state.cred} onSubmit={this.onSubmit} onChange={this.onChange} />
            </div>
        )
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Login)