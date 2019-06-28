import React, { Component } from 'react'
import { TextField } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
//import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class EditProfileForm extends Component {



    componentDidMount() {
        this.inputPassword.value = "";
    }
    // ref={el => this.inputPassword = el}

    render() {
        return(
            <div>
                <form>
                    <Paper>
                        <Table className="table table-striped">
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-weight-bold">Förnamn</TableCell><TableCell className="font-weight-bold">Mellannamn</TableCell><TableCell className="font-weight-bold">Efternamn</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><TextField id="firstname" type="text" value={this.props.currentUser.firstname} onChange={this.props.onChange} /></TableCell>
                                    <TableCell><TextField id="middlename" type="text" value={this.props.currentUser.middlename} onChange={this.props.onChange} /></TableCell>
                                    <TableCell><TextField id="lastname" type="text" value={this.props.currentUser.lastname} onChange={this.props.onChange} /></TableCell>
                                    {/* <td><input type="text" id="firstname" className="form-control" value={this.props.currentUser.firstname} onChange={this.props.onChange} /></td>
                                    <td><input type="text" id="middlename" className="form-control" value={this.props.currentUser.middlename} onChange={this.props.onChange} /></td>
                                    <td><input type="text" id="lastname" className="form-control" value={this.props.currentUser.lastname} onChange={this.props.onChange} /></td> */}
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-weight-bold">Födelsedag</TableCell><TableCell className="font-weight-bold">E-post</TableCell><TableCell className="font-weight-bold">Lösenord</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><TextField id="birthday" type="text" value={this.props.currentUser.birthday} onChange={this.props.onChange} /></TableCell>
                                    <TableCell><TextField id="email" type="text" value={this.props.currentUser.email} onChange={this.props.onChange} /></TableCell>
                                    {/* <td><TextField id="password" type="password" ref={el => this.inputPassword = el} value={this.props.currentUser.password} onChange={this.props.onChange} /></td> */}

                                    {/* <td><input type="text" id="birthday" className="form-control" value={this.props.currentUser.birthday} onChange={this.props.onChange} /></td>
                                    <td><input type="email" id="email" className="form-control" value={this.props.currentUser.email} onChange={this.props.onChange} /></td> */}
                                    <TableCell><input ref={el => this.inputPassword = el} type="password" id="password" className="form-control" value={this.props.currentUser.password} onChange={this.props.onChange} /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-weight-bold">Adress</TableCell><TableCell></TableCell><TableCell></TableCell>
                                </TableRow>
                                <TableRow>
                                <TableCell><TextField id="addressline" type="text" value={this.props.currentUser.addressline} onChange={this.props.onChange} /></TableCell>
                                    {/* <td><input type="text" id="addressline" className="form-control" value={this.props.currentUser.addressline} onChange={this.props.onChange} /></td> */}
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-weight-bold">Postnummer</TableCell><TableCell className="font-weight-bold">Ort</TableCell><TableCell className="font-weight-bold">Land</TableCell>
                                </TableRow>
                                <TableRow>
                                <TableCell><TextField id="zipcode" type="text" value={this.props.currentUser.zipcode} onChange={this.props.onChange} /></TableCell>
                                <TableCell><TextField id="city" type="text" value={this.props.currentUser.city} onChange={this.props.onChange} /></TableCell>
                                <TableCell><TextField id="country" type="text" value={this.props.currentUser.country} onChange={this.props.onChange} /></TableCell>
                                    {/* <td><input type="text" id="zipcode" className="form-control" value={this.props.currentUser.zipcode} onChange={this.props.onChange} /></td>
                                    <td><input type="text" id="city" className="form-control" value={this.props.currentUser.city} onChange={this.props.onChange} /></td>
                                    <td><input type="text" id="country" className="form-control" value={this.props.currentUser.country} onChange={this.props.onChange} /></td> */}
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Paper>

                    <Button type="submit" variant="contained" onClick={this.props.saveEdit}>Spara</Button>
                    <Button type="reset" variant="contained" color="secondary" className="ml-3 px-2" onClick={this.props.cancelEdit}>Avbryt</Button>

                </form>
            </div>
        )
    }
}

export default EditProfileForm