import {
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import MyFormTitle from '@/form/base-component/MyFormTitle'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import { useFormContext } from 'react-hook-form'

const ImageSection = () => {
  const { control, watch } = useFormContext()

  const existingImageUrl = watch('imageUrl')

  return (
    <div className=" space-y-2">
      <MyFormTitle title="Image" desc="Add an image for your restaurant" />
      <div className=" flex flex-col gap-8 md:w-[50%]">
        {existingImageUrl && (
          <AspectRatio ratio={16 / 9}>
            <img
              src={existingImageUrl}
              className=" rounded-md object-cover h-full w-full"
            />
          </AspectRatio>
        )}
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
