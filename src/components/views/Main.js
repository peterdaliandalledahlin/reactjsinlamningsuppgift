import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import Profile from './Profile'
import RegisterCustomer from './RegisterCustomer';
import CustomerInfo from './CustomerInfo'
import CustomerIssues from '../views/CustomerIssues';

class Main extends Component {

    render() {
        return(
            <main>
                <Switch>
                    <Route exact path='/' component={ Home } />
                    <Route path='/login' component={ Login } />
                    <Route path='/register' component={ Register } />
                    <Route path='/profile' component={ Profile } />
                    <Route path="/registercustomer" component={  RegisterCustomer } />
                    <Route path='/customerinfo' component={ CustomerInfo } />
                    <Route path='/customerissues' component={ CustomerIssues } />
                </Switch>
            </main>   
        )
    }

}

export default Main