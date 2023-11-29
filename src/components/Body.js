import { useEffect, useState } from "react"
import RestaurantCard from "./RestaurantCard"
import resData from "../utils/apiData"
import Shimmer from "./Shimmer"


const Body = () => {
    const [resList, setResList] = useState([])
    const [filteredResList, setFilteredResList] = useState([])
    const [searchText, setSearchText] = useState("")
    console.log("body rensderh")

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await response.json()
        console.log(json)
        /*
        let cards = json.data.cards
        // console.log(cards)
        let cardsList = cards.map(x => x.card)
        let cardItems = cardsList.map(x => x.card)
        // console.log({ cardItems })
        let gridItems = cardItems.map(x => x.gridElements)
        gridItems = gridItems.filter(x => x != undefined)
        // console.log({ gridItems })
        let infoWithStyle = gridItems.map(x => x.infoWithStyle)
        // console.log({ infoWithStyle })
        let restaurants = infoWithStyle.map(x => x.restaurants != undefined && x.restaurants)
        restaurants = restaurants.filter(x => x).flatMap(x => x)
        // console.log({ restaurants })
        let restaurantsInfo = restaurants.map(x => x.info)
        console.log({ restaurantsInfo })
        */


        setResList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredResList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return resList.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="search" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }} />
                    <button className="search-btn" onClick={() => {
                        const filteredRes = resList.filter((res) => res.info.name.toLowerCase().includes(searchText))
                        // console.log(filteredRes)
                        setFilteredResList(filteredRes)
                        setSearchText("")
                    }}>Search</button>
                </div>

                <button className="filter-btn" onClick={() => {
                    const filteredList = resList.filter((res) => res.info.avgRating >= 4)
                    console.log(filteredList)
                    setFilteredResList(filteredList)
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    filteredResList.map((resData) => {
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