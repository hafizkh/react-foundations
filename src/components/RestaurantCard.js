import { CDN_URL, styleCard } from "../utils/constants"

const RestaurantCard = ({ resData }) => {

    const {
        name,
        cuisines,
        avgRating,
        costForTwo,
        areaName,
        cloudinaryImageId } = resData.info
    const { deliveryTime } = resData.info.sla
    return (
        <div style={styleCard} className="res-card">
            <img className="res-pic" src={CDN_URL + cloudinaryImageId} alt="restaurant" />
            <div>
                <h3>{name}</h3>
                <h5>{cuisines.join(", ")}</h5>
                <p>{costForTwo}</p>
                <p>{areaName}</p>
                <p>{avgRating}💫 •{deliveryTime} minutes</p>

            </div>
        </div>
    )
}
export default RestaurantCard;