import { useForm } from 'react-hook-form'
import { formSchema, RestaurantFormData } from './formSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '@/components/ui/form'
import DetailsSection from './c-cpns/DetailsSection'

type Props = {
  onSave: (restaurantFormData: FormData) => void
  isLoading: boolean
}

const ManageRestaurantForm = ({ onSave, isLoading }: Props) => {
  console.log(onSave, isLoading)
  const form = useForm<RestaurantFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cusines: [],
      menuItems: [{ name: '', price: 0 }]
    }
  })

  const onSubmit = (formDataJson: RestaurantFormData) => {
    console.log(formDataJson)
    // TODO: convert formDataJson to a new formData object
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" space-y-8 bg-gray-50 p-10 rounded-lg"
      >
        <DetailsSection />
      </form>
    </Form>
  )
}

export default ManageRestaurantForm
