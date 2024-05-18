import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
  useGetMyRestaurantOrders,
  useUpdateMyRestaurant
} from '@/api/MyRestaurantApi'
import OrderItemCard from '@/components/ManageRestaurantPage/OrderItemCard'
import { Tabs, TabsTrigger, TabsContent, TabsList } from '@/components/ui/tabs'
import ManageRestaurantForm from '@/form/manage-restaurant-form/ManageRestaurantForm'

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading: isCreateLoading } =
    useCreateMyRestaurant()
  const { restaurant } = useGetMyRestaurant()
  const { updateRestaurant, isLoading: isUpdateLoading } =
    useUpdateMyRestaurant()
  const { orders } = useGetMyRestaurantOrders()

  const onSave = restaurant ? updateRestaurant : createRestaurant

  return (
    <Tabs defaultValue="orders">
      <TabsList>
        <TabsTrigger value="orders">Orders</TabsTrigger>
        <TabsTrigger value="manage-restaurant">Manage Restaurant</TabsTrigger>
      </TabsList>
      <TabsContent
        value="orders"
        className=" space-y-5 bg-gray-50 p-10 rounded-lg"
      >
        <h2 className=" text-2xl font-bold">{orders?.length} active orders</h2>
        {orders?.map((order, index) => (
          <OrderItemCard order={order} key={index} />
        ))}
      </TabsContent>
      <TabsContent
        value="manage-restaurant"
        className=" space-y-5 bg-gray-50 p-10 rounded-lg"
      >
        <ManageRestaurantForm
          restaurant={restaurant}
          onSave={onSave}
          isLoading={isCreateLoading || isUpdateLoading}
        />
      </TabsContent>
    </Tabs>
  )
}
export default ManageRestaurantPage
