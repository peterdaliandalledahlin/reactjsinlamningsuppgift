import React, { Component } from 'react'
//import CustomerIssueData from '../forms/CustomerIssueData'
import http from 'axios'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { TextField  } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';

class CustomerIssues extends Component {

    constructor(props)
    {super(props)
    
        this.state = {
            searchcustomeremail: '',
            customer: {},
            issues: {},
            customers: {}
        }
    }

    handleChange = e => {
        this.setState({ [e.target.id] : e.target.value })
    }

    // componentDidMount() {
    //     let token = localStorage.getItem('ACCESS_TOKEN')
    //     http.get('http://localhost:3001/api/customers/all', {headers: {'Authorization' : `Bearer  ${token}`}})
    //         .then(user => this.setState({ allcustomers : user.data }))
    //         .catch(error => console.log(error))
    // }

    handleSubmit = e => {
        //let token = localStorage.getItem('ACCESS_TOKEN')
        e.preventDefault()

        http
            .post(`http://localhost:3001/api/customers/${this.state.searchcustomeremail}`)
            .then(user => this.setState({ customer : user.data }))
            //.then(res => console.log(res))
            .catch(error => console.log(error))
        http
            .post(`http://localhost:3001/api/customerissues/${this.state.searchcustomeremail}`)
            .then(user => this.setState({ issues : user.data }))
            //.then(res => console.log(res))
            .catch(error => console.log(error))
        // http
        //     .get(`http://localhost:3001/api/customers/all`)
        //     .then(user => this.setState({ customers : user.data }))
        //     .then(res => console.log(res))
        //     .catch(error => console.log(error))
       
    }

    render() {
        const { searchcustomeremail, customer, issues } = this.state
        return(
            <div className="container">
                {/* {allcustomers.length ? allcustomers.map( (allcustomer) => <div key={allcustomer._id}>
                    <Paper>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>{allcustomer.firstname}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>{allcustomer.lastname}</TableCell>          
                                </TableRow>
                                <TableRow>
                                    <TableCell>{allcustomer.email}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Paper>
            </div>) : null
                } */}
                <form className="mt-5 mb-5" onSubmit={this.handleSubmit}>
                <InputLabel className="mb-3" htmlFor="searchcustomeremail">Här kan du söka efter kundärenden via e-postadress</InputLabel>
                    <TextField type="text" id="searchcustomeremail" value={searchcustomeremail} onChange={this.handleChange} />
                    <Button className="ml-3" type="submit" variant="contained">Sök</Button>
                </form>
                <Paper>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-weight-bold">Förnamn</TableCell><TableCell className="font-weight-bold">Efternamn</TableCell><TableCell className="font-weight-bold">Företag</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{customer.firstname}</TableCell><TableCell>{customer.lastname}</TableCell><TableCell>{customer.company}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-weight-bold">E-post</TableCell><TableCell className="font-weight-bold">Telefon</TableCell>
                            </TableRow>
                            <TableRow>
                            <TableCell>{customer.email}</TableCell><TableCell>{customer.phone}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-weight-bold">Adress</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{customer.addressline}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-weight-bold">Postnummer</TableCell><TableCell className="font-weight-bold">Stad</TableCell><TableCell className="font-weight-bold">Land</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{customer.zipcode}</TableCell><TableCell>{customer.city}</TableCell><TableCell>{customer.country}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>
                <h4 className="mt-5 mb-3">Ärenden</h4>
                {issues.length ? issues.map( (issue) => <div key={issue._id}>
                    <Paper>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-weight-bold">Ärende skapat av {issue.currentuseremail}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>{issue.customeremail}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>{issue.subject}</TableCell>          
                                </TableRow>
                                <TableRow>
                                    <TableCell>{issue.description}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>{issue.status}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Paper>
            </div>) : null
            }  

            </div>
        )
    }
}

export default CustomerIssues