import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useFormContext } from 'react-hook-form'

type Props = {
  name: string
  label: string
  style: string
}
const MyFormField = ({ name, label, style }: Props) => {
  const { control } = useFormContext()

  const disable = name == 'email'

  const flag = name.startsWith('menuItems') ? true : false
  const style1 = flag ? '' : style
  const style2 = flag ? style : ''

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={style1}>
          <FormLabel className={style2}>
            {label}
            {flag && <FormMessage />}
          </FormLabel>
          <FormControl>
            <Input {...field} disabled={disable} className=" bg-white" />
          </FormControl>
          {!flag && <FormMessage />}
        </FormItem>
      )}
    />
  )
}

export default MyFormField
