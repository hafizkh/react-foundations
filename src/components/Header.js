import { useEffect, useState } from "react"
import { LOGO_URL, navStyling } from "../utils/constants"
import { Link } from "react-router-dom"
import useNetworkStatus from "../utils/useNetworkStatus"

const Header = () => {
    const [btn, setBtn] = useState("Login")
    // console.log("Header Rendered")

    useEffect(() => {
        // console.log("useEffect Called from the header")
    }, [btn])

    const onlineStatus = useNetworkStatus()

    return (
        <div style={navStyling} className="header">
            <div style={{ display: "flex", alignItems: "center" }}>
                <img className="logo" src={LOGO_URL} alt="logo" />
            </div>
            <nav className="nav-items">
                <ul>
                    <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
                    <li><Link to="/"> Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/cart">Cart</Link></li>

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