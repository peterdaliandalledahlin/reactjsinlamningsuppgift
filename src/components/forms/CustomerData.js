import React, { Component } from 'react'
import http from 'axios'
// import { NavLink } from 'react-router-dom'
// import CustomerIssueForm from './CustomerIssueForm';
import { withRouter } from 'react-router-dom'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { TextField, FormControl  } from '@material-ui/core';
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';
// import InputLabel from '@material-ui/core/InputLabel';

    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 3
            }}
        />
    );

class CustomerIssue extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentuseremail: localStorage.getItem('USER_EMAIL'),
            customeremail: '',
            subject: '', 
            description: '', 
            status: '',
            customers: []
        }
        console.log(this.state)

    }

    componentDidMount() {
        let token = localStorage.getItem('ACCESS_TOKEN')
        http.get('http://localhost:3001/api/customers/all', {headers: {'Authorization' : `Bearer  ${token}`}})
            .then(user => this.setState({ customers : user.data }))
            .catch(error => console.log(error))
    }

    handleChange = e => {
        this.setState({ [e.target.id] : e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()

        http
            .post('http://localhost:3001/api/customerissues/register', this.state)
            .then(res => console.log(res))
            .then(() => this.props.history.push('/customerissues'))
            .catch(error => console.log(error))
       
    }

    render() {

        const { customers, subject, description, status, currentuseremail, customeremail} = this.state
        return (
            <div>
                <h4 className="mt-5 mb-3">Kundregister</h4>
                {customers.length ? customers.map( (customer) => <div key={customer._id}>
                    <Paper>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-weight-bold">Kundnummer</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>{customer._id}</TableCell>
                                </TableRow>
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
                                    <TableCell>{customer.email}</TableCell><TableCell>{customer.phone}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-weight-bold">Adress</TableCell><TableCell></TableCell><TableCell></TableCell>
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
                                {/* <tr>
                                    <th>Ämne</th><th>Beskrivning</th><th>Status</th>
                                </tr>
                                <tr>
                                    <td>{customer.issues.subject}</td><td>{customer.issues.description}</td><td>{customer.issues.status}</td>
                                </tr> */}
                                {/* <tr>
                                    <td><NavLink to="/customerissueform" type="button"  className="btn btn-primary">Registrera ärende</NavLink></td>
                                </tr> */}
                            </TableBody>
                        </Table>
                    </Paper>
                    <form noValidate onSubmit={this.handleSubmit}>
                    <Paper>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-weight-bold">Skapa nytt ärende för {customer.firstname} {customer.lastname};</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-weight-bold">Ärende skapad av</TableCell><TableCell className="font-weight-bold"><TextField type="email" value={currentuseremail} readOnly /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <td></td>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-weight-bold">Ärende;</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><TextField id="customeremail" type="text" placeholder="Kundens e-post" value={customeremail} onChange={this.handleChange} /></TableCell>
                                </TableRow>
                                <TableRow>
                                    {/* <td><TextField type="text" id="customer_number" label="Förnamn" placeholder="Förnamn" value={firstname} onChange={this.handleChange}/></td>
                                    <td><TextField type="text" id="firstname" label="Mellannamn" placeholder="Mellannamn" value={middlename} onChange={this.handleChange}/></td>
                                    <td><TextField type="text" id="lastname" label="Efternamn" placeholder="Efternamn" value={lastname} onChange={this.handleChange}/></td> */}

                                    {/* <td><input type="text" id="firstname" className="form-control" placeholder="Förnamn" value={firstname} onChange={this.handleChange} /></td>
                                    <td><input type="text" id="lastname" className="form-control" placeholder="Efternamn" value={lastname} onChange={this.handleChange} /></td> */}
                                </TableRow>
                                <TableRow>
                                {/* <td><TextField type="date" id="user_birthday" label="Födelsedag" InputLabelProps={{shrink: true,}} value={birthday} onChange={this.handleChange}/></td>
                                <td><TextField type="email" id="user_email" label="E-post" placeholder="E-post" value={email} onChange={this.handleChange}/></td>
                                <td><TextField type="password" id="user_password" label="Lösenord" placeholder="Lösenord" value={password} onChange={this.handleChange}/></td> */}
                                    {/* <td><input id="customeremail" type="email" className="form-control" placeholder="E-post" value={customeremail} onChange={this.handleChange} /></td> */}

                                    <TableCell><TextField id="subject" type="text" placeholder="Ämne" value={subject} onChange={this.handleChange} /></TableCell>
                                    </TableRow>
                                <TableRow>
                                    <TableCell><TextField fullWidth id="description" type="text" placeholder="Beskrivning" value={description} onChange={this.handleChange} /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <FormControl className="formControl">
                                        {/* <InputLabel htmlFor="status">Age</InputLabel> */}
                                            <select className="form-control" id="status" value={status} onChange={this.handleChange}>
                                                <option value="notstarted">Ej påbörjat</option>
                                                <option value="ongoing">Pågående</option>
                                                <option value="finished">Avslutat</option>
                                            </select>
                                        </FormControl>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                {/* <td><TextField type="text" id="user_zipcode" label="Postnummer" placeholder="Postnummer" value={zipcode} onChange={this.handleChange}/></td>
                                <td><TextField type="text" id="user_city" label="Stad" placeholder="Stad" value={city} onChange={this.handleChange}/></td> */}

                                {/* <td><Select id="user_country" value={country} onChange={this.handleChange}>
                                        <MenuItem value="Sweden">Sverige</MenuItem>
                                        <MenuItem value="Norway">Norge</MenuItem>
                                        <MenuItem value="Finnland">Finland</MenuItem>
                                        <MenuItem value="Denmark">Danmark</MenuItem>
                                    </Select>
                                </td> */}

                                </TableRow>
                            </TableBody>
                        </Table>
                    </Paper>
                <Button type="submit" variant="contained" className="mb-3 mt-3">Registrera ärende</Button>
            </form>
            <ColoredLine color="grey" />
            </div>) : null
            }
        </div>
        )
    }



}

export default withRouter(CustomerIssue)