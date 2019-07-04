import React, { Component } from 'react'
import http from 'axios'
import Paper from '@material-ui/core/Paper';
// import Button from '@material-ui/core/Button';
// import { TextField  } from '@material-ui/core';
// import InputLabel from '@material-ui/core/InputLabel';
import Icon from '@material-ui/core/Icon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

class CustomerModalData extends Component {

        constructor(props) {
            super(props)
    
            this.state = {
                allcustomers: {}
            }
        }

        componentDidMount() {
            let token = localStorage.getItem('ACCESS_TOKEN')
            http.get('http://localhost:3001/api/customers/all', {headers: {'Authorization' : `Bearer  ${token}`}})
                .then(user => this.setState({ allcustomers : user.data }))
                .catch(error => console.log(error))
        }

    render() {

        const { allcustomers } = this.state


        return(
            <div className="container mt-5">

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
                }
             
            </div>        
        )

    }
}

export default CustomerModalData