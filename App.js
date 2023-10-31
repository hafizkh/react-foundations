import React from "react";
import ReactDOM from "react-dom/client";

const heading = (
    <h1 className="heading">h1 tag</h1>
)
const NavBar = () => (
    <div className="container">
        <h1 id="heading">NavBar</h1>
        <Logo />
    </div>
)

const Logo = () => (
    <div className="logo">
        <h1>Logo</h1>
    </div>
)

console.log(heading)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<NavBar />)
