import { useState } from "react"
import RestaurantCard from "./RestaurantCard"
// import resData from "../utils/apiData"


const Body = () => {

    const [resData, setResData] = useState([
        {
            "info": {
                "id": "10208",
                "name": "Subway",
                "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
                "costForTwo": "₹350 for two",
                "cuisines": [
                    "Burgers",
                    "American"
                ],
                "avgRating": 4.2,
                "deliveryTime": 18,
            },
        },
        {
            "info": {
                "id": "10209",
                "name": "Burger King",
                "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
                "costForTwo": "₹350 for two",
                "cuisines": [
                    "Burgers",
                    "American"
                ],
                "avgRating": 3.2,
                "deliveryTime": 18,
            },
        },
        {
            "info": {
                "id": "10210",
                "name": "Nordic Kitchen",
                "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
                "costForTwo": "₹350 for two",
                "cuisines": [
                    "Burgers",
                    "American"
                ],
                "avgRating": 4.2,
                "deliveryTime": 18,
            },
        },])

    return (
        <div>
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = resData.filter((res) => res.info.avgRating > 4)
                    setResData(filteredList)
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    resData.map((resData) => {
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