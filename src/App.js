import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './web/Login';
import Home from './web/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;
