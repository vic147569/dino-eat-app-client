import { Button } from '@/components/ui/button'
import MyFormField from '@/form/base-component/MyFormField'

type Props = {
  index: number
  removeMenuItem: () => void
}
const MenuItemInput = ({ index, removeMenuItem }: Props) => {
  return (
    <div className=" flex flex-row items-end gap-2">
      <MyFormField
        name={`menuItems.${index}.name`}
        label="Name"
        style="flex items-center gap-1"
      />
      <MyFormField
        name={`menuItems.${index}.price`}
        label="Price ($)"
        style="flex items-center gap-1"
      />
      <Button
        type="button"
        onClick={removeMenuItem}
        className=" bg-red-500 max-h-fit "
      >
        Remove
      </Button>
    </div>
  )
}
export default MenuItemInput
