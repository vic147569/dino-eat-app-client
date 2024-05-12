import LoadingButton from '@/components/LoadingButton'
import { Form } from '@/components/ui/form'
import { User } from '@/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import SubmitButton from './c-cpns/SubmitButton'
import { formSchema, UserFormData } from './formSchema'
import MyFormTitle from '@/form/base-component/MyFormTitle'
import MyFormField from '@/form/base-component/MyFormField'

type Props = {
  currentUser: User
  onSave: (userProfileData: UserFormData) => void
  isLoading: boolean
}
const UserProfileForm = ({ currentUser, onSave, isLoading }: Props) => {
  const form = useForm<UserFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: currentUser
  })

  useEffect(() => {
    form.reset(currentUser)
  }, [currentUser, form])

  const title = 'User Profile Form'
  const desc = 'View and change your profile information here'

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSave)}
        className=" space-y-4 bg-gray-50 rounded-lg md:p-10"
      >
        <MyFormTitle title={title} desc={desc} />
        <MyFormField name="email" label="Email" style={'100'} />
        <MyFormField name="name" label="Name" style={'100'} />
        <div className=" flex flex-col md:flex-row gap-4">
          {/* flex flex-col md:flex-row gap-4 */}
          <MyFormField
            name="addressLine1"
            label="Address Line 1"
            style="flex-1"
          />
          <MyFormField name="city" label="City" style="flex-1" />
          <MyFormField name="country" label="Country" style="flex-1" />
        </div>
        {isLoading ? <LoadingButton /> : <SubmitButton />}
      </form>
    </Form>
  )
}
export default UserProfileForm
