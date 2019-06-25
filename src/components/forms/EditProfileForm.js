import React, { Component } from 'react'
import { TextField } from '@material-ui/core';

class EditProfileForm extends Component {



    componentDidMount() {
        this.inputPassword.value = "";
    }
    // ref={el => this.inputPassword = el}

    render() {
        return(
            <div>
                <form>
                    <table className="table table-striped">
                        <tbody>
                            <tr>
                                <th>Förnamn</th><th>Mellannamn</th><th>Efternamn</th>
                            </tr>
                            <tr>
                                <td><TextField id="firstname" type="text" value={this.props.currentUser.firstname} onChange={this.props.onChange} /></td>
                                <td><TextField id="middlename" type="text" value={this.props.currentUser.middlename} onChange={this.props.onChange} /></td>
                                <td><TextField id="lastname" type="text" value={this.props.currentUser.lastname} onChange={this.props.onChange} /></td>
                                {/* <td><input type="text" id="firstname" className="form-control" value={this.props.currentUser.firstname} onChange={this.props.onChange} /></td>
                                <td><input type="text" id="middlename" className="form-control" value={this.props.currentUser.middlename} onChange={this.props.onChange} /></td>
                                <td><input type="text" id="lastname" className="form-control" value={this.props.currentUser.lastname} onChange={this.props.onChange} /></td> */}
                            </tr>
                            <tr>
                                <th>Födelsedag</th><th>E-post</th><th>Lösenord</th>
                            </tr>
                            <tr>
                                <td><TextField id="birthday" type="text" value={this.props.currentUser.birthday} onChange={this.props.onChange} /></td>
                                <td><TextField id="email" type="text" value={this.props.currentUser.email} onChange={this.props.onChange} /></td>
                                {/* <td><TextField id="password" type="password" ref={el => this.inputPassword = el} value={this.props.currentUser.password} onChange={this.props.onChange} /></td> */}

                                {/* <td><input type="text" id="birthday" className="form-control" value={this.props.currentUser.birthday} onChange={this.props.onChange} /></td>
                                <td><input type="email" id="email" className="form-control" value={this.props.currentUser.email} onChange={this.props.onChange} /></td> */}
                                <td><input ref={el => this.inputPassword = el} type="password" id="password" className="form-control" value={this.props.currentUser.password} onChange={this.props.onChange} /></td>
                            </tr>
                            <tr>
                                <th>Adress</th><th></th><th></th>
                            </tr>
                            <tr>
                            <td><TextField id="addressline" type="text" value={this.props.currentUser.addressline} onChange={this.props.onChange} /></td>
                                {/* <td><input type="text" id="addressline" className="form-control" value={this.props.currentUser.addressline} onChange={this.props.onChange} /></td> */}
                            </tr>
                            <tr>
                                <th>Postnummer</th><th>Ort</th><th>Land</th>
                            </tr>
                            <tr>
                            <td><TextField id="zipcode" type="text" value={this.props.currentUser.zipcode} onChange={this.props.onChange} /></td>
                            <td><TextField id="city" type="text" value={this.props.currentUser.city} onChange={this.props.onChange} /></td>
                            <td><TextField id="country" type="text" value={this.props.currentUser.country} onChange={this.props.onChange} /></td>
                                {/* <td><input type="text" id="zipcode" className="form-control" value={this.props.currentUser.zipcode} onChange={this.props.onChange} /></td>
                                <td><input type="text" id="city" className="form-control" value={this.props.currentUser.city} onChange={this.props.onChange} /></td>
                                <td><input type="text" id="country" className="form-control" value={this.props.currentUser.country} onChange={this.props.onChange} /></td> */}
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

export default EditProfileForm