import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { UseFormReturn } from 'react-hook-form'
import { UserFormData } from '../formSchema'

type FormProps = {
  form: UseFormReturn<UserFormData>
  name: 'email' | 'name' | 'addressLine1' | 'city' | 'country'
  label: string
}
const MyFormField = (props: FormProps) => {
  const { form, name, label } = props
  let style = ''
  let disable = false
  if (name !== 'name' && name !== 'email') {
    style = 'flex-1'
  } else if (name == 'email') {
    disable = true
  }

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={`${style}`}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input {...field} disabled={disable} className=" bg-white" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default MyFormField
