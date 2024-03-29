import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import './App.css';
import  Navbar  from "./Pages/Navbar";
import  Login  from "./Pages/Login";
import  Signup  from "./Pages/Signup";
import Supplement from "./Pages/Supplement";
import Details from "./Components/Details";
import { CartProvider } from "./Components/ContextReducer";
import Cart from "./Components/Cart";
import Orderhistory from "./Components/Orderhistory";
import Payment from "./Pages/Payment";






function App() {
  return (
    <CartProvider>
       <ChakraProvider>
    <div >
      
      <Router>
      <Navbar />
        <Routes>
          <Route path="/signin" element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path="/viewCart"  element={<Cart />}/>
          <Route path='/' element={<Supplement />} />
          <Route path='/details' element={<Details />} />
          <Route path="/orderHistory" exact element={<Orderhistory />}/>
          <Route path="/payment" exact element={<Payment />}/>
        </Routes>
      </Router>
    </div>
    </ChakraProvider>
    </CartProvider>
  );
}

export default App;
