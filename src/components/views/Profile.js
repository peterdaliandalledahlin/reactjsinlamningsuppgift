import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
//import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
//import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
                    <Button type="button" variant="contained" className="px-2 mb-5 " onClick={this.toggleEdit}>Ändra</Button>
                    <Button type="button" variant="contained" className="px-2 ml-3 mb-5 " onClick={this.logout}>Logga ut</Button>
                    <Paper>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-weight-bold">Förnamn</TableCell><TableCell className="font-weight-bold">Mellannamn</TableCell><TableCell className="font-weight-bold">Efternamn</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{this.props.currentUser.firstname}</TableCell><TableCell>{this.props.currentUser.middlename}</TableCell><TableCell>{this.props.currentUser.lastname}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-weight-bold">Födelsedag</TableCell><TableCell className="font-weight-bold">E-post</TableCell><TableCell className="font-weight-bold">Lösenord</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{this.props.currentUser.birthday}</TableCell><TableCell>{this.props.currentUser.email}</TableCell><TableCell>****</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-weight-bold">Adress</TableCell><TableCell></TableCell><TableCell></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{this.props.currentUser.addressline}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-weight-bold">Postnummer</TableCell><TableCell className="font-weight-bold">Ort</TableCell><TableCell className="font-weight-bold">Land</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{this.props.currentUser.zipcode}</TableCell><TableCell>{this.props.currentUser.city}</TableCell><TableCell>{this.props.currentUser.country}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    </Paper>
                </form>
            </div>        
        )

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)