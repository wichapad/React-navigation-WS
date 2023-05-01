import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from './components/Navigation';
import Home from "./components/page/Home"
import Member from "./components/page/Member"
import Cart from "./components/page/Cart"
import './App.css'

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/member" element={<Member />}  />
          <Route path="/cart" element={<Cart />}  />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
