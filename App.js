import React from "react";
import ReactDOM from "react-dom/client";

const name = "Hafiz"
const age = 37
const greet = <p>Hello {name} and you are {age} years old</p>

const Header = () => {
    return (
        <div>
            <h1>Header</h1>
            <NavBar />
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            <h1>Footer</h1>
            {Header()}
        </div>
    )
}

const NavBar = () => {
    return (
        <div>
            <h2>NavBar is inside in Header component</h2>
            {greet}
            {/* Example */}
            {45 - 5}
        </div>
    )
}


const App = () => {
    return (
        <div>
            <Header />
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)