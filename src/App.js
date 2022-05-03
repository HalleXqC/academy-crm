import React from 'react'
import PrivateRoutes from './components/PrivateRoutes'
import { 
  Routes, 
  Route, 
  Navigate,
} from 'react-router-dom'
import * as AuthPages from './apps/Auth/pages'

const TempComponent = () => {
  return (
    <div>Hello, World</div>
  )
}


const App = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<TempComponent/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
      <Route path='/auth/login' element={<AuthPages.Login />} />
    </Routes>
  )
}

export default App