import React, { Component } from 'react'
import http from 'axios'
import { withRouter } from 'react-router-dom'
// import TextField from '@material-ui/core/TextField';
// import { Select, MenuItem, Checkbox } from '@material-ui/core';

class CustomerIssueForm extends Component {

        constructor(props) {
        super(props)

        this.state = {

            customeremail: '',
            subject: '', 
            description: '', 
            status: '',
            issues: []
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = e => {
        this.setState({ [e.target.id] : e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()

        http
            .post('http://localhost:3001/api/customerissues/register', this.state)
            .then(res => console.log(res))
            .then(() => this.props.history.push('/customerissueform'))


            .catch(error => console.log(error))
       
    }

    // deleteIssue = (_id, event) => {
    //     const issues = Object.assign({}, this.state.issues);
    //     issues.splice(_id, 1);
    //     this.setState({issues: issues})
    // }

    render() {
        const {customeremail, subject, description, status } = this.state
        const {issues} = this.state
 
        return (
            <div className="container">
                <h4 className="mt-5 mb-3">Registrera kundärende</h4>
                <form noValidate onSubmit={this.handleSubmit}>
                    <table className="table">
                        <tbody>
                            <tr>
                                {/* <td><TextField type="text" id="customer_number" label="Förnamn" placeholder="Förnamn" value={firstname} onChange={this.handleChange}/></td>
                                <td><TextField type="text" id="firstname" label="Mellannamn" placeholder="Mellannamn" value={middlename} onChange={this.handleChange}/></td>
                                <td><TextField type="text" id="lastname" label="Efternamn" placeholder="Efternamn" value={lastname} onChange={this.handleChange}/></td> */}

                                {/* <td><input type="text" id="firstname" className="form-control" placeholder="Förnamn" value={firstname} onChange={this.handleChange} /></td>
                                <td><input type="text" id="lastname" className="form-control" placeholder="Efternamn" value={lastname} onChange={this.handleChange} /></td> */}
                            </tr>
                            <tr>
                            {/* <td><TextField type="date" id="user_birthday" label="Födelsedag" InputLabelProps={{shrink: true,}} value={birthday} onChange={this.handleChange}/></td>
                            <td><TextField type="email" id="user_email" label="E-post" placeholder="E-post" value={email} onChange={this.handleChange}/></td>
                            <td><TextField type="password" id="user_password" label="Lösenord" placeholder="Lösenord" value={password} onChange={this.handleChange}/></td> */}
                                <td><input id="customeremail" type="email" className="form-control" placeholder="E-post" value={customeremail} onChange={this.handleChange} /></td>

                                <td><input id="subject" type="text" className="form-control" placeholder="Ämne" value={subject} onChange={this.handleChange} /></td>
                                <td><textarea id="description" type="text" className="form-control" placeholder="Beskrivning" value={description} onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                            {/* <td><TextField type="text" id="user_zipcode" label="Postnummer" placeholder="Postnummer" value={zipcode} onChange={this.handleChange}/></td>
                            <td><TextField type="text" id="user_city" label="Stad" placeholder="Stad" value={city} onChange={this.handleChange}/></td> */}

                            {/* <td><Select id="user_country" value={country} onChange={this.handleChange}>
                                    <MenuItem value="Sweden">Sverige</MenuItem>
                                    <MenuItem value="Norway">Norge</MenuItem>
                                    <MenuItem value="Finnland">Finland</MenuItem>
                                    <MenuItem value="Denmark">Danmark</MenuItem>
                                </Select>
                            </td> */}
                            <td><select id="status" className="form-control" value={status} onChange={this.handleChange}>
                                    <option value="notstarted">Ej påbörjat</option>
                                    <option value="ongoing">Pågående</option>
                                    <option value="finished">Avslutat</option>
                                </select>
                            </td>
                            </tr>
 
                        </tbody>
                    </table>

                <button type="submit" className="btn btn-sm btn-primary">Registrera ärende</button>
            </form>

            <div>
                <h4 className="mt-5 mb-3">Ärenden</h4>
                {issues.length ? issues.map( (issue) => <div key={issue._id}>
                    <table className="table table-striped mb-5">
                        <tbody>
                            <tr>
                                <th>Ärendenummer</th>
                            </tr>
                            <tr>
                                <td>{issue._id}</td>
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

    componentDidMount() {
        const token = localStorage.getItem('ACCESS_TOKEN')
        console.log(token)
        http.get('http://localhost:3001/api/customerissues/all', {headers: {'Authorization' : `Bearer  ${token}`}})
            .then(user => this.setState({ issues : user.data }))
            .catch(error => console.log(error))
    }
}

export default withRouter(CustomerIssueForm)