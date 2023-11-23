import { CDN_URL, styleCard } from "../utils/constants"

const RestaurantCard = ({ resData }) => {

    const { name, cuisines, avgRating, costForTwo, areaName, cloudinaryImageId } = resData.info
    const { deliveryTime } = resData.info.sla
    return (
        <div style={styleCard} className="res-card">
            <img className="res-pic" src={CDN_URL + cloudinaryImageId} alt="restaurant" />

            <div>
                <h3>{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{costForTwo}</h4>
                <h4>{areaName}</h4>
                <h4>{avgRating}</h4>
                <h4>{deliveryTime} minutes</h4>
            </div>
        </div>
    )
}
export default RestaurantCard;