import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useFormContext } from 'react-hook-form'

type FormProps = {
  name: string
  label: string
  style: string
}
const MyFormField = (props: FormProps) => {
  const { control } = useFormContext()
  const { name, label, style } = props

  let disable = false

  if (name == 'email') {
    disable = true
  }

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={style}>
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
