import React from 'react'
import UserClass from '../components/UserClass'

class About extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
    }
    render() {
        return (
            <div>
                <h1>About Us</h1>
                <h2>Hello This is testing about page</h2>
                <UserClass />
            </div>
        )
    }

}


export default About
