import React, { Component } from 'react'
import http from 'axios'
import { withRouter } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import { Checkbox } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

    class RegistrationForm extends Component {

        constructor(props) {
        super(props)

        this.state = {
            firstname: '',
            middlename: '',
            lastname: '',
            birthday: '',
            email: '', 
            password: '', 
            addressline: '', 
            zipcode: '', 
            city: '', 
            country: 'Sweden', 
            termsaccept: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = e => {
        this.setState({ [e.target.id] : e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()

        http
            .post('http://localhost:3001/api/users/register', this.state)
            .then(res => console.log(res))
            .then(() => this.props.history.push('/login'))


            .catch(error => console.log(error))
       
    }

    render() {
        const {firstname, middlename, lastname, birthday, email, password, addressline, zipcode, city, country, termsaccept} = this.state

        return (
            <div className="container">
                <h4 className="mt-5 mb-3">Registrera användare</h4>
                <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                    <Paper>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell><TextField type="text" id="firstname" label="Förnamn" placeholder="Förnamn" value={firstname} onChange={this.handleChange} /></TableCell>
                                    <TableCell><TextField type="text" id="middlename" label="Mellannamn" placeholder="Mellannamn" value={middlename} onChange={this.handleChange} /></TableCell>
                                    <TableCell><TextField type="text" id="lastname" label="Efternamn" placeholder="Efternamn" value={lastname} onChange={this.handleChange} /></TableCell>

                                    {/* <td><input type="text" className="form-control" id="firstname" placeholder="Förnamn" value={firstname} onChange={this.handleChange} /></td>
                                    <td><input type="text" className="form-control" id="middlename" placeholder="Mellannamn" value={middlename} onChange={this.handleChange} /></td>
                                    <td><input type="text" className="form-control" id="lastname" placeholder="Efternamn" value={lastname} onChange={this.handleChange} /></td> */}
                                </TableRow>
                                <TableRow>
                                    <TableCell><TextField type="date" id="birthday" label="Födelsedag" InputLabelProps={{shrink: true,}} value={birthday} onChange={this.handleChange}/></TableCell>
                                    <TableCell><TextField type="email" id="email" label="E-post" placeholder="E-post" value={email} onChange={this.handleChange}/></TableCell>
                                    <TableCell><TextField type="password" id="password" label="Lösenord" placeholder="Lösenord" value={password} onChange={this.handleChange}/></TableCell>

                                    {/* <td><input type="date" className="form-control" id="birthday" placeholder="Födelsedag" value={birthday} onChange={this.handleChange} /></td>
                                    <td><input type="email" className="form-control" id="email" placeholder="E-post" value={email} onChange={this.handleChange} /></td>
                                    <td><input type="password" className="form-control" id="password" placeholder="Lösenord" value={password} onChange={this.handleChange} /></td> */}
                                </TableRow>
                                <TableRow>
                                    <TableCell><TextField type="text" id="addressline" label="Adress" placeholder="Adress" value={addressline} onChange={this.handleChange}/></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    {/* <td colSpan="2"><input type="text" className="form-control" id="addressline" placeholder="Ange din adress" value={addressline} onChange={this.handleChange} /></td> */}
                                </TableRow>
                                <TableRow>
                                    <TableCell><TextField type="text" id="zipcode" label="Postnummer" placeholder="Postnummer" value={zipcode} onChange={this.handleChange}/></TableCell>
                                    <TableCell><TextField type="text" id="city" label="Stad" placeholder="Stad" value={city} onChange={this.handleChange}/></TableCell>

                                {/* <td><input type="text" className="form-control" id="zipcode" placeholder="Postnummer" value={zipcode} onChange={this.handleChange} /></td>
                                <td><input type="text" className="form-control" id="city" placeholder="Stad" value={city} onChange={this.handleChange} /></td> */}
                                
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

                                <TableRow>
                                    <TableCell>Jag godkänner användarvillkoren! <Checkbox id="termsaccept" value={termsaccept} onChange={this.handleChange} /></TableCell>
                                </TableRow>
                                {/* <tr>
                                    <td>Jag godkänner användarvillkoren! <input className="form-check-input ml-3 mt-2" type="checkbox" id="termsaccept" value={termsaccept} onChange={this.handleChange} /></td>
                                </tr> */}
                            </TableBody>
                        </Table>
                    </Paper>

                <Button type="submit" variant="contained" className="mt-3">Sign Up</Button>
            </form>
        </div>
            
        )
    }
}

export default withRouter(RegistrationForm)