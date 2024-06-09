import React from "react"
class UserClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: {
                name: "Imaad",
                location: "Default",
                avatar_url: "",
                public_repos: 0,
                company: ""
            }

        }
    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/hafizkh")
        const respone = await data.json()
        this.setState({
            userInfo: respone
        })
        console.log(respone)
    }

    componentDidUpdate() {
        console.log("ComponentDidUpdate")
    }
    componentWillUnmount() {
        console.log("ComponentWillUnmount")

    }
    render() {
        const { name, location, avatar_url, public_repos, company } = this.state.userInfo
        return <div className="user-card">
            <img src={avatar_url} alt="" />
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Repositories: {public_repos}</h4>
            <h4>Company: {company}</h4>
        </div>
    }
}

export default UserClass