import useRestaurantMenu from '../utils/useRestaurantMenu'
import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'

const RestaurantMenu = () => {
    const { resId } = useParams()
    const resMenu = useRestaurantMenu(resId)


    if (resMenu === null) return (<Shimmer />)
    const { name, cuisines, costForTwoMessage } = resMenu?.cards[2]?.card?.card?.info
    const { itemCards } = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card.card
    console.log("Items card", itemCards)
    return (
        <div className='menu'>
            <h1>{name}</h1>
            <p>{cuisines.join(', ')} - {costForTwoMessage}</p>
            <h3>Menu</h3>
            <ul>
                {
                    itemCards.map((item) =>
                        <li key={item.card.info.id}>{item.card.info.name}{" - Rs. "}{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</li>
                    )
                }
            </ul>
        </div>
    )
}

export default RestaurantMenu