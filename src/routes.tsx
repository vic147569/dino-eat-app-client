import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './layout/layout'
import HomePage from './pages/HomePage'

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      ></Route>
      <Route
        path="/user-profile"
        element={<span>user profile page</span>}
      ></Route>
      <Route path="*" element={<Navigate to="/" />}></Route>
    </Routes>
  )
}

export default AppRoutes
