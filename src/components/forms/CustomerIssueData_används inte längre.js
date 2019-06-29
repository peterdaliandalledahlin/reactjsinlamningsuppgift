import React, { Component } from 'react'
//import http from 'axios'
//import { withRouter } from 'react-router-dom'
// import TextField from '@material-ui/core/TextField';
// import { Select, MenuItem, Checkbox } from '@material-ui/core';

class CustomerIssues extends Component {

        constructor(props) {
        super(props)

        this.state = {
            issues: []
        }
        // this.handleChange = this.handleChange.bind(this);
    }

    // handleChange = e => {
    //     this.setState({ [e.target.id] : e.target.value })
    // }

    // handleSubmit = e => {
    //     e.preventDefault()

    //     http
    //         .post('http://localhost:3001/api/customerissues/register', this.state)
    //         .then(res => console.log(res))
    //         .then(() => this.props.history.push('/customerissueform'))


    //         .catch(error => console.log(error))
       
    // }

    // deleteIssue = (_id, event) => {
    //     const issues = Object.assign({}, this.state.issues);
    //     issues.splice(_id, 1);
    //     this.setState({issues: issues})
    // }

    // componentDidMount() {
    //     const token = localStorage.getItem('ACCESS_TOKEN')
    //     console.log(token)
    //     http.get('http://localhost:3001/api/customerissues/all', {headers: {'Authorization' : `Bearer  ${token}`}})
    //         .then(user => this.setState({ issues : user.data }))
    //         .catch(error => console.log(error))
    // }

    render() {
        // const {customeremail, subject, description, status } = this.state
        const {issues} = this.state
 
        return (
            <div className="container">
                <h4 className="mt-5 mb-3">Kundärenden</h4>

            <div>
                <h4 className="mt-5 mb-3">Ärenden</h4>
                {issues.length ? issues.map( (issue) => <div key={issue._id}>
                    <table className="table table-striped mb-5">
                        <tbody>
                            <tr>
                                <td>{issue.currentuseremail}</td>
                            </tr>
                            <tr>
                                <td>{issue.customeremail}</td>
                            </tr>
                            <tr>
                                <td>{issue.subject}</td>          
                            </tr>
                            <tr>
                                <td>{issue.description}</td>
                            </tr>
                            <tr>
                                <td>{issue.status}</td>
                            </tr>
                        </tbody>
                    </table>
            </div>) : null
            }  
            </div>
        </div>
        )
    }
}

export default CustomerIssues