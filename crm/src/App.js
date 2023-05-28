
import './App.css';
import Customerlist from './components/customerList'
import Home from './components/home'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Customerlist />} />
      </Routes>
    </Router>
  );
}

export default App;
