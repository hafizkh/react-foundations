import { useEffect, useState } from "react"
import { LOGO_URL, navStyling } from "../utils/constants"

const Header = () => {
    const [btn, setBtn] = useState("Login")

    useEffect(() => {
        console.log("useEffect Called")
    }, [btn])

    return (
        <div style={navStyling} className="header">
            <div style={{ display: "flex", alignItems: "center" }}>
                <img className="logo" src={LOGO_URL} alt="logo" />
            </div>
            <nav className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Offers</li>
                    <li>Contact</li>
                    <div className="auth-buttons">
                        <button className="login" onClick={() => {
                            btn === "Login" ?
                                setBtn("Logout") :
                                setBtn("Login")
                        }}>{btn}</button>
                        <button>Signup</button>
                    </div>
                </ul>
            </nav>
        </div >
    )
}

export default Header