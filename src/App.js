import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import  Navbar  from "./Pages/Navbar";
import  Login  from "./Pages/Login";
import  Signup  from "./Pages/Signup";
import Supplement from "./Pages/Supplement";
import Details from "./Components/Details";
import { CartProvider } from "./Components/ContextReducer";
function App() {
  return (
    <CartProvider>
    <div >
      
      <Router>
      <Navbar />
        <Routes>
          <Route path="/signin" element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/' element={<Supplement />} />
          <Route path='/details' element={<Details />} />
        </Routes>
      </Router>
    </div>
    </CartProvider>
  );
}

export default App;
