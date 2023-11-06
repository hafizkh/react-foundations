import RestaurantCard from "./RestaurantCard"
import resData from "../utils/apiData"

const Body = () => {
    return (
        <div>
            <div>
                <input className="search" type="text" placeholder="search for restaurants" />
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