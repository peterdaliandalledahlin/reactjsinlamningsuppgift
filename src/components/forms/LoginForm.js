import React, { Component } from 'react'
import lang from '../languages/e-us'
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';

class LoginForm extends Component {

    render() {

        return(
            <div className="my-5">
                <h4 className="mb-3">Logga in</h4>
                <form onSubmit={ this.props.onSubmit }>
                    <table className="table table-sm" id="login_table">
                        <tbody>
                            <tr>
                                <td><TextField type="email" label="E-post" id="email" placeholder={lang.login_email_tooltip} value={this.props.email} onChange={this.props.onChange} /></td>
                                {/* <td><input type="email" className="form-control" id="email" placeholder={lang.login_email_tooltip} value={this.props.email} onChange={this.props.onChange} /></td> */}
                            </tr>
                            <tr>
                                <td><TextField type="password" label="Lösenord" id="password" placeholder={ lang.login_password_tooltip } value={this.props.email} onChange={this.props.onChange} /></td>
                                {/* <td><input type="password" className="form-control" id="password" placeholder={ lang.login_password_tooltip } value={this.props.email} onChange={this.props.onChange}  /></td> */}
                            </tr>
                        </tbody>
                    </table>
                    {/* <button type="submit" className="btn btn-sm btn-primary">{ lang.login_button }</button> */}
                    <Button type="submit" variant="contained">{ lang.login_button }</Button>

                </form>
            </div>  
        )
    }
}

export default LoginForm;