
import Dashboard from '../src/component/dashboard';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { PrivetRoute } from './component/privetRoute';
import Register from './component/register';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <PrivetRoute>
            <Dashboard />
          </PrivetRoute>
        } />
        <Route path='register' element={
          <Register />
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
