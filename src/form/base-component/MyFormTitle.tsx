import { FormDescription } from '@/components/ui/form'

type Props = {
  title: string
  desc: string
}

const MyFormTitle = ({ title, desc }: Props) => {
  return (
    <div>
      <h2 className=" text-2xl font-bold">
        {title}
        {/* User Profile Form */}
      </h2>
      <FormDescription>
        {desc}
        {/* View and change your profile information here */}
      </FormDescription>
    </div>
  )
}
export default MyFormTitle
