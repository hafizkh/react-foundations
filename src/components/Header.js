import { LOGO_URL, navStyling } from "../utils/constants"

const Header = () => {
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
                </ul>
            </nav>
        </div>
    )
}

export default Header