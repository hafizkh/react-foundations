import { useEffect, useState } from "react"
import { RES_URL_MENU } from "./constants"

const useRestaurantMenu = (resId) => {
    const [resTList, setRestList] = useState(null)
    useEffect(() => {
        fetchData()
    })
    const fetchData = async () => {
        const data = await fetch(RES_URL_MENU + resId)
        const json = await data.json()
        setRestList(json.data)
    }
    return resTList

}

export default useRestaurantMenu