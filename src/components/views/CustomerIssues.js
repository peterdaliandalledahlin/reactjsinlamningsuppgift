import React, { Component } from 'react'
import http from 'axios'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { TextField  } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import Icon from '@material-ui/core/Icon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
//import Modal from './Modal'

    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 3
            }}
        />
    );

class CustomerIssues extends Component {

    constructor(props)
        {super(props)
    
        this.state = {
            searchcustomeremail: '',
            customer: {},
            issues: {},
            allcustomers: {}
        }
    }

    handleChange = e => {
        this.setState({ [e.target.id] : e.target.value })
    }

    componentDidMount() {
        let token = localStorage.getItem('ACCESS_TOKEN')
        http.get('http://localhost:3001/api/customers/all', {headers: {'Authorization' : `Bearer  ${token}`}})
            .then(user => this.setState({ allcustomers : user.data }))
            .catch(error => console.log(error))
    }

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


        const { searchcustomeremail, customer, issues, allcustomers } = this.state
        return(
            <div className="container">

                {/* <Modal /> */}

                <Button id="customerindexbutton" className="mt-5" variant="contained"  data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    Slå upp e-post i kunddatabasen
                </Button>

                <div className="collapse" id="collapseExample">
                    <div className="card card-body">
                    <Paper>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-weight-bold">Förnamn</TableCell>
                                    <TableCell className="font-weight-bold">Efternamn</TableCell>
                                    <TableCell className="font-weight-bold">E-post</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Paper>
                        {allcustomers.length ? allcustomers.map( (allcustomer) => <div key={allcustomer._id}>
                            <Paper>
                                <List component="nav" aria-label="Customers">
                                    <ListItem button>
                                        <ListItemIcon>
                                            <Icon>portrait</Icon>
                                        </ListItemIcon>
                                        <ListItemText className="smal" primary={allcustomer.firstname} />
                                        <ListItemText primary={allcustomer.lastname} />
                                        <ListItemIcon>
                                            <Icon>email</Icon>
                                        </ListItemIcon>
                                        <ListItemText primary={allcustomer.email} />
                                    </ListItem>
                                </List>
                            </Paper>
                        </div>) : null
                        }
                    </div>
                </div>

                    {/* <Paper>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Kundindex</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-weight-bold"><Icon>portrait</Icon>Förnamn</TableCell><TableCell className="font-weight-bold">Efternamn</TableCell><TableCell className="font-weight-bold">E-post</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Paper>
                {allcustomers.length ? allcustomers.map( (allcustomer) => <div key={allcustomer._id}>
                    <Paper>
                        <List component="nav" aria-label="Customers">
                            <ListItem button>
                                <ListItemIcon>
                                    <Icon>portrait</Icon>
                                </ListItemIcon>
                                <ListItemText className="smal" primary={allcustomer.firstname} /><ListItemText primary={allcustomer.lastname} /><ListItemText primary={allcustomer.email} />
                            </ListItem>
                        </List>
                    </Paper>
            </div>) : null
                } */}

                <form className="mt-5 mb-5" onSubmit={this.handleSubmit}>
                <InputLabel className="mb-3" htmlFor="searchcustomeremail">Här kan du söka efter kundärenden via kundens e-postadress</InputLabel>
                    <Icon>search</Icon><TextField type="text" id="searchcustomeremail" value={searchcustomeremail} onChange={this.handleChange} />
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
                                <TableCell className="font-weight-bold">E-post</TableCell><TableCell className="font-weight-bold">Telefon</TableCell><TableCell></TableCell>
                            </TableRow>
                            <TableRow>
                            <TableCell>{customer.email}</TableCell><TableCell>{customer.phone}</TableCell><TableCell></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-weight-bold">Adress</TableCell><TableCell></TableCell><TableCell></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{customer.addressline}</TableCell><TableCell></TableCell><TableCell></TableCell>
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
                {issues.length ? issues.map( (issue, index) => <div key={issue._id}>
                    <Paper>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-weight-bold"><Icon>format_list_numbered</Icon>Ärendenummer</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>{index}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-weight-bold">Ärende skapat av</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>{issue.currentuseremail}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-weight-bold"><Icon>email</Icon> E-post</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>{issue.customeremail}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-weight-bold"><Icon>subject</Icon> Ämne</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>{issue.subject}</TableCell>          
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-weight-bold"><Icon>description</Icon> Beskrivning</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>{issue.description}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-weight-bold">Status</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>{issue.status}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><form method='POST' action={`http://localhost:3001/api/customerissues/${issue._id}?_method=DELETE&taskId=${issue._id}`}><Button className="btn button--tasks" >Delete</Button></form></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Paper>
                    <ColoredLine color="grey" />
            </div>) : null
            }  

            </div>
        )
    }
}

export default CustomerIssues