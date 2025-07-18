import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddUserForm from "./components/Adduserform";
import UpdateUserForm from "./components/updatform";
import DeleteUserForm from "./components/Deleteform";
import UserList from "./components/Userslist";
import "./App.css"; // Import the CSS

function App() {
  return (
    <Router>
      <div className="app-container">
        <h1 className="app-title">JAI HIND HIGHSCHOOL</h1>
        <nav className="navbar">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/add" className="nav-link">Add</Link>
          <Link to="/update" className="nav-link">Update</Link>
          <Link to="/delete" className="nav-link">Delete</Link>
          <Link to="/view" className="nav-link">View All</Link>
        </nav>

        <Routes>
          <Route path="/" element={<h2>Welcome to School Database</h2>} />
          <Route path="/add" element={<AddUserForm />} />
          <Route path="/update" element={<UpdateUserForm />} />
          <Route path="/delete" element={<DeleteUserForm />} />
          <Route path="/view" element={<UserList />} />
        </Routes>

        <ToastContainer position="top-center" />
      </div>
    </Router>
  );
}

export default App;
