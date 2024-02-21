import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import  Navbar  from "./Pages/Navbar";
import  Login  from "./Pages/Login";
import  Signup  from "./Pages/Signup";
function App() {
  return (
    <div >
      
      <Router>
      <Navbar />
        <Routes>
          <Route path="/signin" element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
