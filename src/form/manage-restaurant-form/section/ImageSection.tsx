import {
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import MyFormTitle from '@/form/base-component/MyFormTitle'
import { useFormContext } from 'react-hook-form'

const ImageSection = () => {
  const { control } = useFormContext()

  return (
    <div className=" space-y-2">
      <MyFormTitle title="Image" desc="Add an image for your restaurant" />
      <div className=" flex flex-col gap-8 w-[50%]">
        <FormField
          control={control}
          name="imageFile"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className=" bg-white "
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  onChange={(e) =>
                    field.onChange(e.target.files ? e.target.files[0] : null)
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  )
}
export default ImageSection
