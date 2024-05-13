import { FormField, FormItem, FormMessage } from '@/components/ui/form'
import { cuisineList } from '@/config/restaurant-options-config'
import MyFormTitle from '@/form/base-component/MyFormTitle'
import { useFormContext } from 'react-hook-form'
import CuisineCheckbox from '../c-cpns/CuisineCheckbox'

const CuisinesSection = () => {
  const { control } = useFormContext()

  return (
    <div className=" space-y-2">
      <MyFormTitle
        title="Cuisines"
        desc="Select the cuisines that your restaurant serves"
      />
      <FormField
        control={control}
        name="cuisines"
        render={({ field }) => (
          <FormItem>
            <div className=" grid md:grid-cols-5 gap-1">
              {cuisineList.map((cuisineItem) => (
                <CuisineCheckbox
                  cuisine={cuisineItem}
                  field={field}
                  key={cuisineItem}
                />
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}
export default CuisinesSection
