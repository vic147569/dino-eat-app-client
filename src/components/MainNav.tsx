import { useAuth0 } from '@auth0/auth0-react'
import { Button } from './ui/button'
import UsernameMenu from './UsernameMenu'
import { Link } from 'react-router-dom'

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0()

  const LoginButton = () => {
    return (
      <Button
        variant="ghost"
        className=" font-bold hover:text-orange-500 hover:bg-white"
        onClick={async () => await loginWithRedirect()}
      >
        Login
      </Button>
    )
  }

  return (
    <span className=" flex space-x-2 items-center">
      {isAuthenticated ? (
        <>
          <Link to="/order-status" className=" font-bold hover:text-orange-500">
            Order Status
          </Link>
          <UsernameMenu />
        </>
      ) : (
        <LoginButton />
      )}
    </span>
  )
}

export default MainNav
