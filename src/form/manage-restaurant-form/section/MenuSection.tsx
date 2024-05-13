import { Button } from '@/components/ui/button'
import { FormField, FormItem } from '@/components/ui/form'
import MyFormTitle from '@/form/base-component/MyFormTitle'
import { useFieldArray, useFormContext } from 'react-hook-form'
import MenuItemInput from '../c-cpns/MenuItemInput'

const MenuSection = () => {
  const { control } = useFormContext()
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'menuItems'
  })

  return (
    <div className=" space-y-2">
      <MyFormTitle
        title="Menu"
        desc="Create your menu and give each item a name and a price"
      />
      <FormField
        control={control}
        name="menuItems"
        render={() => (
          <FormItem className=" flex flex-col gap-2">
            {fields.map((_, index) => (
              <MenuItemInput
                index={index}
                removeMenuItem={() => remove(index)}
              />
            ))}
          </FormItem>
        )}
      />
      <Button
        type="button"
        onClick={() => {
          append({ name: '', price: '' })
        }}
      >
        Add Menu Item
      </Button>
    </div>
  )
}
export default MenuSection
