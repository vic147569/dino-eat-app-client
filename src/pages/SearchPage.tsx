import { useSearchRestaurants } from '@/api/RestaurantApi'
import { useParams } from 'react-router-dom'

const SearchPage = () => {
  const { city } = useParams()
  const { results } = useSearchRestaurants(city)

  return (
    <span>
      User search for {city}{' '}
      {results?.data.map((restaurant) => {
        return (
          <span>
            Found {restaurant.restaurantName} {restaurant.city}
          </span>
        )
      })}
    </span>
  )
}
export default SearchPage
