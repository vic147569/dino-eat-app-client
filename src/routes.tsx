import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './layout/layout'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout>Home Page</Layout>}></Route>
      <Route
        path="/user-profile"
        element={<span>user profile page</span>}
      ></Route>
      <Route path="*" element={<Navigate to="/" />}></Route>
    </Routes>
  )
}

export default AppRoutes
