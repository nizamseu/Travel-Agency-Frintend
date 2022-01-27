import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Pages/Shared/Navbar/Navbar";
import Home from "./Components/Pages/Home/Home/Home";
import Login from "./Components/Login/Login/Login";
import Register from "./Components/Login/Registration/Registration";
import Reviews from "./Components/Pages/Home/Reviews/Reviews";
import Details from "./Components/Pages/Destinations/Details";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/Registration" element={<Register />} />
          <Route path="/detail/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
