import { useEffect, useState } from "react";

const useNetworkStatus = () => {

    const [onlineStatus, setOnlineStatus] = useState(true)

    useEffect(() => {
        addEventListener("offline", (event) => {
            setOnlineStatus(false)
        });
        addEventListener("online", (event) => {
            setOnlineStatus(true)
        });
    })
    return onlineStatus
}

export default useNetworkStatus