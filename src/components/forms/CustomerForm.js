import React, { Component } from 'react'
import http from 'axios'
import { withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { TextField  } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
//import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class RegisterCustomer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstname: '',
            lastname: '',
            company: '',
            email: '', 
            phone: '', 
            addressline: '', 
            zipcode: '', 
            city: '', 
            country: 'Sweden'
        }
    }

    handleChange = e => {
        this.setState({ [e.target.id] : e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()

        http
            .post('http://localhost:3001/api/customers/register', this.state)
            .then(res => console.log(res))
            .then(() => this.props.history.push('/customerinfo'))


            .catch(error => console.log(error))
       
    }

    // onFocus() {
    //     this.userFirstName.setAttribute("class", "highlight");
    //   }
    
    // onBlur() {
    //     this.userFirstName.setAttribute("class", "");
    //   }

    // ref={input => {this.userFirstName = input;}} onFocus={this.onFocus.bind(this)} onBlur={this.onBlur.bind(this)}

    render() {
        const { firstname, lastname, company, email, phone, addressline, zipcode, city, country } = this.state

        return (
            <div className="container">
                <h4 className="mt-5 mb-3">Registrera kund</h4>
                <form noValidate onSubmit={this.handleSubmit}>
                <Paper>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell><TextField type="text" id="firstname" label="Förnamn" placeholder="Förnamn" value={firstname} onChange={this.handleChange} /></TableCell>
                                <TableCell><TextField type="text" id="lastname" label="Efternamn" placeholder="Efternamn" value={lastname} onChange={this.handleChange} /></TableCell>
                                <TableCell><TextField type="text" id="company" label="Företag" placeholder="Företag" value={company} onChange={this.handleChange} /></TableCell>
                                {/* <td><input type="text" id="firstname" className="form-control" placeholder="Förnamn" value={firstname} onChange={this.handleChange} /></td>
                                <td><input type="text" id="lastname" className="form-control" placeholder="Efternamn" value={lastname} onChange={this.handleChange} /></td>
                                <td><input type="text" id="company" className="form-control" placeholder="Företag" value={company} onChange={this.handleChange} /></td> */}
                            </TableRow>
                            <TableRow>
                                <TableCell><TextField type="email" id="email" label="E-post" placeholder="E-post" value={email} onChange={this.handleChange} /></TableCell>
                                <TableCell><TextField type="text" id="phone" label="Telefon" placeholder="Telefon" value={phone} onChange={this.handleChange} /></TableCell>
                                <TableCell></TableCell>
                                {/* <td><input type="email" id="email" className="form-control" placeholder="E-post" value={email} onChange={this.handleChange} /></td>
                                <td><input type="text" id="phone" className="form-control" placeholder="Telefonnummer" value={phone} onChange={this.handleChange} /></td> */}
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan="2"><TextField type="text" id="addressline" label="Adress" placeholder="Adress" value={addressline} onChange={this.handleChange} /></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                {/* <td colSpan="2"><input type="text" id="addressline" className="form-control" placeholder="Adress" value={addressline} onChange={this.handleChange} /></td> */}
                            </TableRow>
                            <TableRow>
                                <TableCell><TextField type="text" id="zipcode" label="Postnummer" placeholder="Postnummer" value={zipcode} onChange={this.handleChange} /></TableCell>
                                <TableCell><TextField type="text" id="city" label="Stad" placeholder="Stad" value={city} onChange={this.handleChange} /></TableCell>

                                {/* <td><input type="text" id="zipcode" className="form-control" placeholder="Postnummer" value={zipcode} onChange={this.handleChange} /></td>
                                <td><input type="text" id="city" className="form-control" placeholder="Stad" value={city} onChange={this.handleChange} /></td> */}
                                
                                {/* <td><Select id="country" value={country} onChange={this.handleChange}>
                                        <MenuItem value="Sweden">Sverige</MenuItem>
                                        <MenuItem value="Norway">Norge</MenuItem>
                                        <MenuItem value="Finnland">Finland</MenuItem>
                                        <MenuItem value="Denmark">Danmark</MenuItem>
                                    </Select>
                                </td> */}

                                <TableCell><select id="country" className="form-control" value={country} onChange={this.handleChange}>
                                        <option value="Sweden">Sweden</option>
                                        <option value="Norway">Norway</option>
                                        <option value="Finnland">Finnland</option>
                                        <option value="Denmark">Denmark</option>
                                    </select>
                                </TableCell>
                            </TableRow>
                            {/* <tr>
                                <td><TextField type="text" id="subject" label="Ämne" placeholder="Ämne" value={subject} onChange={this.handleChange} /></td>
                                <td><TextField type="text" id="description" label="Beskrivning" placeholder="Beskrivning" value={description} onChange={this.handleChange} /></td>
                                <td><select id="status" className="form-control" value={status} onChange={this.handleChange}>
                                        <option value="ongoing">Pågående</option>
                                        <option value="closed">Avslutat</option>
                                        <option value="notstarted">Ej påbörjat</option>
                                    </select>
                                </td>         
                            </tr> */}
                        </TableBody>
                    </Table>
                </Paper>

                <Button type="submit" variant="contained" className="mt-3">Registrera</Button>
            </form>
        </div>
            
        )
    }
}

export default withRouter(RegisterCustomer)