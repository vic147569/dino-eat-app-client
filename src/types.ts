export type User = {
  _id: string
  email: string
  name: string
  addressLine1: string
  city: string
  country: string
}

export type MenuItem = {
  _id: string
  name: string
  price: number
}

export type Restaurant = {
  _id: string
  user: string
  restaurantName: string
  city: string
  country: string
  deliveryPrice: number
  estimatedDeliveryTime: number
  cuisines: string[]
  menuItems: MenuItem[]
  imageUrl: string
  lastUpdated: string
}

export type CartItem = {
  _id: string
  name: string
  price: number
  quantity: number
}

export type OrderStatus =
  | 'placed'
  | 'paid'
  | 'inProgress'
  | 'outForDelivery'
  | 'delivered'

export type Order = {
  _id: string
  restaurant: Restaurant
  user: User
  cartItems: {
    menuItemId: string
    name: string
    quantity: string
  }[]
  deliveryDetails: {
    name: string
    addressLine1: string
    city: string
    email: string
  }
  totalAmount: number
  status: OrderStatus
  createdAt: string
  restaurantId: string
}

export type RestaurantSearchResponse = {
  data: Restaurant[]
  pagination: {
    total: number
    page: number
    pages: number
  }
}

export type SearchState = {
  searchQuery: string
  page: number
  selectedCuisines: string[]
  sortOption: string
}

// myUserApi: createUserRequest
export type CreateUserRequest = {
  auth0Id: string
  email: string
}
// updateUserRequest
export type UpdateUserRequest = {
  name: string
  addressLine1: string
  city: string
  country: string
}

// update order status request
export type UpdateOrderStatusRequest = {
  orderId: string
  status: string
}

// order api: checkoutSessionRequest
export type CheckoutSessionRequest = {
  cartItems: {
    menuItemId: string
    name: string
    quantity: string
  }[]
  deliveryDetails: {
    email: string
    name: string
    addressLine1: string
    city: string
  }
  restaurantId: string
}
