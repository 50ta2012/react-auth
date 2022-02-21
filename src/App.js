import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './web/Login';
import Home from './web/Home';
import { RequireAuth, AuthProvider } from './security/Auth';
import Info from './web/Info';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          } />
          <Route path="/info" element={
            <RequireAuth>
              <Info />
            </RequireAuth>
          }></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
