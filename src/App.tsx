import './App.css'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/web/Home";
import Login from './component/auth/Login';
import SignUp from './component/auth/SignUp';
import Entp from './component/web/Entp';

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/entrepreneur" element={<Entp />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
