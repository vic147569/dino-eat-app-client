import LoadingButton from '@/components/LoadingButton'
import { Form } from '@/components/ui/form'
import { User } from '@/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import MyFormField from './c-cpns/MyFormField'
import MyFormTitle from './c-cpns/MyFormTitle'
import SubmitButton from './c-cpns/SubmitButton'
import { formSchema, UserFormData } from './formSchema'

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

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSave)}
        className=" space-y-4 bg-gray-50 rounded-lg md:p-10"
      >
        <MyFormTitle />
        <MyFormField form={form} name="email" label="Email" />
        <MyFormField form={form} name="name" label="Name" />
        <div className=" flex flex-col md:flex-row gap-4">
          <MyFormField form={form} name="addressLine1" label="Address Line 1" />
          <MyFormField form={form} name="city" label="City" />
          <MyFormField form={form} name="country" label="Country" />
        </div>
        {isLoading ? <LoadingButton /> : <SubmitButton />}
      </form>
    </Form>
  )
}
export default UserProfileForm
