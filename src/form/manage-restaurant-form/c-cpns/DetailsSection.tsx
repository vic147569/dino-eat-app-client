import MyFormTitle from '@/form/base-component/MyFormTitle'
import MyFormField from '@/form/base-component/MyFormField'

const DetailsSection = () => {
  const title = 'Details'
  const desc = 'Enter the details about your restaurant'
  return (
    <div className="space-y-2">
      <MyFormTitle title={title} desc={desc} />
      <MyFormField name="restaurantName" label="Name" style="" />
      <div className=" flex gap-4">
        <MyFormField name="city" label="City" style="flex-1" />
        <MyFormField name="country" label="Country" style="flex-1" />
      </div>
      <MyFormField
        name="deliveryPrice"
        label="Delivery Price"
        style="max-w-[25%]"
      />
      <MyFormField
        name="estimatedDeliveryTime"
        label="Estimated Delivery time"
        style="max-w-[25%]"
      />
    </div>
  )
}
export default DetailsSection
