import React from "react";
import ReactDOM from "react-dom/client";

/*
Header

-logo
- nav items

Body
- search
- Restaurant container
    - Restaurant card
        - image
        - name,cuisines
        - rating

Footer
- copy right
- links
- address
- contact
*/
const styleCard = {
    width: "200px",
    height: "300px",
    backgroundColor: "#f0f0f0",
    margin: "5px",
    borderRadius: "10px",
    boxShadow: "0 0 10px 0 rgb(163, 145, 145)",
    overflow: "hidden",
    padding: "9px"

}

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg" alt="Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = ({ resName, cuisine }) => {
    return (
        <div className="res-card" style={styleCard}>
            <img className="res-pic" src="https://i.ytimg.com/vi/Ro8s63DKlO0/maxresdefault.jpg" alt="Biryani" />
            <h2>{resName}</h2>
            <h3>{cuisine}</h3>
            <h3>5 star</h3>
            <h4>30 mins</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                <input type="text" placeholder="Search for food" />
            </div>
            <div className="res-container">
                <RestaurantCard resName="Javed Nehari" cuisine="Naan and Nehari" />
                <RestaurantCard resName="Mota Chanay Wala" cuisine="Specialist in chanay anda" />
                <RestaurantCard resName="Jilla Chanay Wala" cuisine="Butter Naan Chanay" />
            </div>
        </div>
    )
}

const App = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)