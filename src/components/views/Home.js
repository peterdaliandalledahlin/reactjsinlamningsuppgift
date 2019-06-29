import React, { Component } from 'react'
import backgroundimage from '../../bg.jpg'

class Home extends Component {

    render() {
        return(
            <div>
                <img src={backgroundimage} alt="A nice background" />
            </div>   
        )
    }
}

export default Home