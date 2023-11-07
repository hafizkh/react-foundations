import { useState } from "react"
import RestaurantCard from "./RestaurantCard"
import resData from "../utils/apiData"


const Body = () => {
    const [resList, setResList] = useState(resData)
    return (
        <div>
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = resList.filter((res) => res.info.areaName === "Rohini")
                    setResList(filteredList)
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    resList.map((resData) => {
                        return (
                            <RestaurantCard key={resData.info.id} resData={resData} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Body