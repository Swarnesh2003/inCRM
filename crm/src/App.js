
import Customerlist from './components/customerList'
import Dashboard from './components/dashboard'
import Dashaddcustomer from './components/dashaddcustomer';
import Home from './components/home'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/old' element={<Customerlist />} />
          <Route path="/dashboard" element={<Dashboard />} >
              <Route path="/dashboard/addCustomer" element={<Dashaddcustomer />} />
              <Route path="/dashboard/Campaign" element={<Dashaddcustomer />} />
              <Route path="/dashboard/Settings" element={<Dashaddcustomer />} />
              <Route path="/dashboard/addServices" element={<Dashaddcustomer />} />  
          </Route>
      </Routes>
    </Router>
  );
}

export default App;
