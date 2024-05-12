import { FormDescription } from '@/components/ui/form'

type Props = {
  title: string
  desc: string
}

const MyFormTitle = ({ title, desc }: Props) => {
  return (
    <div>
      <h2 className=" text-2xl font-bold">{title}</h2>
      <FormDescription>{desc}</FormDescription>
    </div>
  )
}
export default MyFormTitle
