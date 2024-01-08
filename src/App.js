import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";


const App = () => {
    return (
        <div>
            <Header />
            <Body />
        </div>
    )
}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/contact",
        element: <Contact />
    }
])

// const h1 = React.createElement("h1", {}, "Hello All")
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)