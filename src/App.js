import Navbar from "./Components/Nav";
import Products from "./Components/Products";
import Home from "./Components/Home";
import About from "./Components/About";
import Login from "./Components/Login";
import Admin from "./Components/Admin";
import { Route, Routes } from "react-router-dom"
import { Report } from "@mui/icons-material";
import BlogComponent from "../src/Components/Admin/BlogComponent"
import ReportAdmin from "./Components/Admin/ReportAdmin"
import Notification from "../src/Components/Admin/Notification"
import UserBlog from "../src/Components/User/UserBLog"
import UserManagement from "../src/Components/User/UserManagement"
import UserNotifications from "../src/Components/User/UserNotifications";
import UserManage from "../src/Components/Admin/UserManage"
import SignUp from "./Components/SignUp";



function App() {
  const name = "Piratheep";
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home name={name} />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Admin" element={<Admin />} />
          <Route exact path='/blog' element={ <BlogComponent />} />
          <Route exact path='/ReportAdmin' element={  <ReportAdmin />} />
          <Route exact path='/notification' element={  <Notification />} />
          <Route exact path='/UserManage' element={  <UserManage />} />
          <Route exact path='/UserBlog' element={  <UserBlog />} />
          <Route exact path='/UserManagement' element={  <UserManagement />} />
          <Route exact path='/UserNotifications' element={  <UserNotifications />} />
          <Route exact path='/SignUp' element={  <SignUp />} />
        </Routes>
      </div>
      
    </>
  )
}

export default App