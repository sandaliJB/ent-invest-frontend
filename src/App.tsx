import './App.css'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/web/Home";
import Login from './component/auth/Login';
import SignUp from './component/auth/SignUp';
import Entp from './component/web/Entp';
import EntpProfile from './component/web/EntpProfile';
import Invester from './component/web/Invester';
import InvestProfile from './component/web/InvestProfile';
import Funds from './component/web/Funds';
import AddInvester from './component/web/actions/AddInvester';

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/entrepreneur" element={<Entp />} />
          <Route path="/profile" element={<EntpProfile />} />
          <Route path="/invester" element={<Invester />} />
          <Route path="/investProfile/:userId" element={<InvestProfile />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/addInvester/:userId" element={<AddInvester />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
