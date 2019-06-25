import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { get, update, logout } from '../../store/actions/authActions'
import EditProfileForm from '../forms/EditProfileForm'

const mapStateToProps = (state) => {
    return {
        currentUser: state.auth.currentUser,
        isLoggedIn: state.auth.isLoggedIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        get: () => dispatch(get()),
        update: (currentUser, token) => dispatch(update(currentUser, token)),
        logout: () => dispatch(logout())
    }
}

class Profile extends Component {

        constructor(props) {
            super(props)
    
            this.state = {
                currentUser: this.props.currentUser,
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
        const currentUser = this.state.currentUser
        currentUser[e.target.id] = e.target.value
        return this.setState({ currentUser: currentUser })
    }

    saveEdit = e => {
        e.preventDefault()
        this.props.update(this.state.currentUser, localStorage.getItem('ACCESS_TOKEN'))
        this.props.history.push('/profile')
    }   

    cancelEdit = e => {
        this.setState({ currentUser: JSON.parse(localStorage.getItem('user')) })
        this.props.history.push('/profile')
    }

    toggleEdit = e => {
        this.setState({ isEditing: !this.state.isEditing })
    }

    logout = e => {
        this.props.logout(this.state.currentUser._id, localStorage.getItem('ACCESS_TOKEN'))
        this.setState({ isLoggedIn: false })
    } 

    render() {

        if(localStorage.getItem('ACCESS_TOKEN') === null) {
            return( <Redirect to="/login" /> )
        }

        if(this.state.isEditing) {
            return(
                <div className="container mt-5">
                    <EditProfileForm currentUser={this.state.currentUser} onChange={this.onChange} saveEdit={this.saveEdit} cancelEdit={this.cancelEdit} />
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
                                <th>Förnamn</th><th>Mellannamn</th><th>Efternamn</th>
                            </tr>
                            <tr>
                                <td>{this.props.currentUser.firstname}</td><td>{this.props.currentUser.middlename}</td><td>{this.props.currentUser.lastname}</td>
                            </tr>
                            <tr>
                                <th>Födelsedag</th><th>E-post</th><th>Lösenord</th>
                            </tr>
                            <tr>
                                <td>{this.props.currentUser.birthday}</td><td>{this.props.currentUser.email}</td><td>****</td>
                            </tr>
                            <tr>
                                <th>Adress</th><th></th><th></th>
                            </tr>
                            <tr>
                                <td>{this.props.currentUser.addressline}</td>
                            </tr>
                            <tr>
                                <th>Postnummer</th><th>Ort</th><th>Land</th>
                            </tr>
                            <tr>
                                <td>{this.props.currentUser.zipcode}</td><td>{this.props.currentUser.city}</td><td>{this.props.currentUser.country}</td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>        
        )

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)