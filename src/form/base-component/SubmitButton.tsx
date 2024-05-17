import { Button } from '@/components/ui/button'

type Props = {
  buttonText?: string
}

const SubmitButton = ({ buttonText = 'Submit' }: Props) => {
  return (
    <Button type="submit" className=" bg-orange-500">
      {buttonText}
    </Button>
  )
}
export default SubmitButton
