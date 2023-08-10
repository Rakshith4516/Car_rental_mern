import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'; 
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BookingCar from './pages/BookingCar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes> {/* Use 'Routes' instead of 'BrowserRouter' */}
          <Route path="/" element={<Home />} /> {/* Use 'element' instead of 'component' */}
          <Route path="/login" element={<Login />} /> {/* Use 'element' instead of 'component' */}
          <Route path="/register" element={<Register />} /> {/* Use 'element' instead of 'component' */}
          <Route path="/bookingcar" element={<BookingCar />} /> {/* Use 'element' instead of 'component' */}
        </Routes> {/* Close 'Routes' */}
      </BrowserRouter>
    </div>
  );
}

export default App;
