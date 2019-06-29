import React, { Component } from 'react'
//import { TextField } from '@material-ui/core';

class EditCustomerForm extends Component {

    // componentDidMount() {
    //     this.inputPassword.value = "";
    // }
    // ref={el => this.inputPassword = el}

    render() {
        return(
            <div>
                <form>
                    <table className="table table-striped">
                        <tbody>
                            <tr>
                                <th>Förnamn</th><th>Efternamn</th><th>Företag</th>
                            </tr>
                            <tr>
                                {/* <td><TextField  type="text" value={this.props.currentUser.firstname} onChange={this.props.onChange} /></td>
                                <td><TextField  type="text" value={this.props.currentUser.middlename} onChange={this.props.onChange} /></td>
                                <td><TextField  type="text" value={this.props.currentUser.lastname} onChange={this.props.onChange} /></td> */}
                                <td><input type="text" className="form-control" value={this.props.customer.firstname} onChange={this.props.onChange} /></td>
                                <td><input type="text" className="form-control" value={this.props.customer.lastname} onChange={this.props.onChange} /></td>
                                <td><input type="text" className="form-control" value={this.props.customer.company} onChange={this.props.onChange} /></td>
                            </tr>
                            <tr>
                                <th>Födelsedag</th><th>E-post</th><th>Lösenord</th>
                            </tr>
                            <tr>
                                {/* <td><TextField  type="text" value={this.props.currentUser.birthday} onChange={this.props.onChange} /></td>
                                <td><TextField  type="text" value={this.props.currentUser.email} onChange={this.props.onChange} /></td>
                                <td><TextField  type="password" ref={el => this.inputPassword = el} value={this.props.currentUser.password} onChange={this.props.onChange} /></td> */}

                                <td><input type="email" className="form-control" value={this.props.customer.email} onChange={this.props.onChange} /></td>
                                <td><input type="password" className="form-control" value={this.props.customer.phone} onChange={this.props.onChange} /></td>
                            </tr>
                            <tr>
                                <th>Adress</th><th></th><th></th>
                            </tr>
                            <tr>
                                <td><input type="text" className="form-control" value={this.props.customer.addressline} onChange={this.props.onChange} /></td>
                            </tr>
                            <tr>
                                <th>Postnummer</th><th>Ort</th><th>Land</th>
                            </tr>
                            <tr>
                                <td><input type="text" className="form-control" value={this.props.customer.zipcode} onChange={this.props.onChange} /></td>
                                <td><input type="text" className="form-control" value={this.props.customer.city} onChange={this.props.onChange} /></td>
                                <td><input type="text" className="form-control" value={this.props.customer.country} onChange={this.props.onChange} /></td>
                            </tr>
                        </tbody>
                    </table>

                    <button type="submit" className="btn btn-primary btn-sm px-2" onClick={this.props.saveEdit}>Spara</button>
                    <button type="reset" className="btn btn-danger btn-sm ml-3 px-2" onClick={this.props.cancelEdit}>Avbryt</button>

                </form>
            </div>
        )
    }
}

export default EditCustomerForm