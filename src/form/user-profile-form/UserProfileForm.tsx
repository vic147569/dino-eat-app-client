import { Form } from '@/components/ui/form'
import { User } from '@/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { formSchema, UserFormData } from './formSchema'
import LoadingButton from '@/form/base-component/LoadingButton'
import SubmitButton from '@/form/base-component/SubmitButton'
import MyFormTitle from '@/form/base-component/MyFormTitle'
import MyFormField from '@/form/base-component/MyFormField'

type Props = {
  currentUser: User
  onSave: (userProfileData: UserFormData) => void
  isLoading: boolean
  titleText?: string
  buttonText?: string
}
const UserProfileForm = ({
  currentUser,
  onSave,
  isLoading,
  titleText = 'User Profile',
  buttonText = 'Submit'
}: Props) => {
  const form = useForm<UserFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: currentUser
  })

  useEffect(() => {
    form.reset(currentUser)
  }, [currentUser, form])

  const desc = 'View and change your profile information here'

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSave)}
        className=" space-y-4 bg-gray-50 rounded-lg md:p-10 min-h-[550px]"
      >
        <MyFormTitle title={titleText} desc={desc} />
        <MyFormField name="email" label="Email" style={'100'} />
        <MyFormField name="name" label="Name" style={'100'} />
        <div className=" flex flex-col md:flex-row gap-4">
          <MyFormField
            name="addressLine1"
            label="Address Line 1"
            style="flex-1"
          />
          <MyFormField name="city" label="City" style="flex-1" />
          <MyFormField name="country" label="Country" style="flex-1" />
        </div>
        {isLoading ? (
          <LoadingButton />
        ) : (
          <SubmitButton buttonText={buttonText} />
        )}
      </form>
    </Form>
  )
}
export default UserProfileForm
