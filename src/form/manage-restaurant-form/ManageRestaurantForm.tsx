import { useForm } from 'react-hook-form'
import { formSchema, RestaurantFormData } from './formSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '@/components/ui/form'
import DetailsSection from './section/DetailsSection'
import { Separator } from '@/components/ui/separator'
import CuisinesSection from './section/CuisinesSection'
import MenuSection from './section/MenuSection'
import ImageSection from './section/ImageSection'
import LoadingButton from '../base-component/LoadingButton'
import SubmitButton from '../base-component/SubmitButton'

type Props = {
  onSave: (restaurantFormData: FormData) => void
  isLoading: boolean
}

const ManageRestaurantForm = ({ onSave, isLoading }: Props) => {
  console.log(onSave, isLoading)
  const form = useForm<RestaurantFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cuisines: [],
      menuItems: [{}]
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
        <Separator />
        <CuisinesSection />
        <Separator />
        <MenuSection />
        <Separator />
        <ImageSection />
        {isLoading ? <LoadingButton /> : <SubmitButton />}
      </form>
    </Form>
  )
}

export default ManageRestaurantForm
