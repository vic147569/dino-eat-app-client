import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
  useUpdateMyRestaurant
} from '@/api/MyRestaurantApi'
import ManageRestaurantForm from '@/form/manage-restaurant-form/ManageRestaurantForm'

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading: isCreateLoading } =
    useCreateMyRestaurant()
  const { restaurant } = useGetMyRestaurant()
  const { updateRestaurant, isLoading: isUpdateLoading } =
    useUpdateMyRestaurant()

  const onSave = restaurant ? updateRestaurant : createRestaurant

  return (
    <ManageRestaurantForm
      restaurant={restaurant}
      onSave={onSave}
      isLoading={isCreateLoading || isUpdateLoading}
    />
  )
}
export default ManageRestaurantPage
