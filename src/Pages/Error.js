import React from "react"
import { useRouteError } from "react-router-dom"

const Error = () => {
    const errorHandle = useRouteError()
    console.log("Errors", errorHandle)
    return (
        <div>
            <h2>{errorHandle.status} {errorHandle.statusText}</h2>
            <h3>{errorHandle.error.message}</h3>
        </div>
    )
}

export default Error