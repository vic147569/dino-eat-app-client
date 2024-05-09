import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger
} from './ui/sheet'
import { CircleUserRound, Menu } from 'lucide-react'
import { Separator } from './ui/separator'
import { Button } from './ui/button'
import { useAuth0 } from '@auth0/auth0-react'
import MobileNavLink from './MobileNavLink'

const MobileNav = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0()

  const WelcomeTitle = () => {
    return <span>Welcome to DinoEat.com</span>
  }

  const UserTitle = () => {
    return (
      <span className=" flex items-center font-bold gap-2">
        <CircleUserRound className=" text-orange-500" />
        {user?.email}
      </span>
    )
  }

  const LoginButton = () => {
    return (
      <Button
        onClick={() => loginWithRedirect()}
        className=" flex-1 font-bold bg-orange-500"
      >
        Login
      </Button>
    )
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Menu className=" text-orange-500" />
      </SheetTrigger>
      <SheetContent className=" space-y-3">
        <SheetTitle>
          {isAuthenticated ? <UserTitle /> : <WelcomeTitle />}
        </SheetTitle>

        <Separator />

        <SheetDescription className=" flex flex-col gap-4">
          {isAuthenticated ? <MobileNavLink /> : <LoginButton />}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
