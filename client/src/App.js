
import './App.css';
import Login from './components/Auth/Login/Login';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Register from './components/Auth/Register/Register';
import Home from './components/Home/Home';

function App() {
  return (
    
    <Router >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} /> 
      </Routes>
    </Router>
  );
}

export default App;
