import { Route, Routes } from 'react-router-dom'

export default function RoutesWithNotFound({ children }) {
  return (
    <Routes>
      {children}
      <Route path="*" element={<h2>404 Not Found</h2>} />
    </Routes>
  )
}
