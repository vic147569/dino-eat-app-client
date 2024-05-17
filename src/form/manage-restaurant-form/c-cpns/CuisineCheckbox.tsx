import { Checkbox } from '@/components/ui/checkbox'
import { FormControl, FormItem, FormLabel } from '@/components/ui/form'
import { CheckedState } from '@radix-ui/react-checkbox'
import { ControllerRenderProps, FieldValues } from 'react-hook-form'

type Props = {
  cuisine: string
  field: ControllerRenderProps<FieldValues, 'cuisines'>
}
const CuisineCheckbox = ({ cuisine, field }: Props) => {
  const handleCheckedChange = (checked: CheckedState) => {
    if (checked) {
      field.onChange([...field.value, cuisine])
    } else {
      field.onChange(field.value.filter((value: string) => value !== cuisine))
    }
  }

  return (
    <FormItem className=" flex flex-row items-center space-x-1 space-y-0 mt-2">
      <FormControl>
        <Checkbox
          className=" bg-white"
          checked={field.value.includes(cuisine)}
          onCheckedChange={handleCheckedChange}
        />
      </FormControl>
      <FormLabel className=" text-sm font-normal">{cuisine}</FormLabel>
    </FormItem>
  )
}
export default CuisineCheckbox
