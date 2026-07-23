import { Routes, Route, Navigate } from 'react-router-dom'
import ProtectedRoute from './hooks/ProtectedRoute';
import Login from './pages/Login';
import Home from './pages/Home';

export default function App() {
return (
  <Routes>
    <Route path="/login" element={<Login />} />

    <Route element={<ProtectedRoute />}>
      <Route path="/home" element={<Home />} />
    </Route>

    <Route path="/home" element={<Navigate to="/home" replace />} />
    <Route path="*" element={<Navigate to="/login" replace />} />
  </Routes>
);
}
