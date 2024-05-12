import { z } from 'zod'

export const formSchema = z.object({
  restaurantName: z.string({
    required_error: 'restaurant name is required'
  }),
  city: z.string({
    required_error: 'city is required'
  }),
  country: z.string({
    required_error: 'country is required'
  }),
  deliveryPrice: z.coerce.number({
    required_error: 'delivery price is required',
    invalid_type_error: 'must be a valid number'
  }),
  estimatedDeliveryTime: z.coerce.number({
    required_error: 'estimated delivery time is required',
    invalid_type_error: 'must be a valid number'
  }),
  cusines: z.array(z.string()).nonempty({
    message: 'please select at least one element'
  }),
  menuItems: z.array(
    z.object({
      name: z.string().min(1, 'name is required'),
      price: z.coerce.number().min(1, 'price is required')
    })
  ),
  imagefile: z.instanceof(File, { message: 'image is required' })
})

export type RestaurantFormData = z.infer<typeof formSchema>
