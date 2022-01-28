import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Pages/Shared/Navbar/Navbar";
import Home from "./Components/Pages/Home/Home/Home";
import Login from "./Components/Login/Login/Login";
import Register from "./Components/Login/Registration/Registration";
import Reviews from "./Components/Pages/Home/Reviews/Reviews";
import Details from "./Components/Pages/Destinations/Details";
import ReviewDetails from "./Components/Pages/Home/Reviews/ReviewDetails";
import AddBlogArticle from "./Components/Pages/AddBlogArticle/AddBlogArticle";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import AddReview from "./Components/Pages/Dashboard/AddReview";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
import ManageReviews from "./Components/Pages/Dashboard/ManageReviews";
import ManageBlog from "./Components/Pages/Dashboard/ManageBlog";

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
          <Route path="/reviewDetails" element={<ReviewDetails />} />
          <Route path="/blog" element={<AddBlogArticle />} />

          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route path="/dashboard" element={<Reviews />} />
            <Route path="/dashboard/addBlog" element={<AddBlogArticle />} />
            <Route path="/dashboard/addReview" element={<AddReview />} />
            <Route path="/dashboard/reviews" element={<ManageReviews />} />
            <Route path="/dashboard/blogs" element={<ManageBlog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
