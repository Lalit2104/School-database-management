import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AddUserForm = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    roll: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:5000/add", formData)
      .then(() => toast.success("student added"))
      .catch(() => toast.error("student not added"));
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "400px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9"
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Add New User
      </h2>

      {["id", "name", "email", "phone", "roll"].map((field) => (
        <div key={field} style={{ marginBottom: "15px" }}>
          <label
            htmlFor={field}
            style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}
          >
            {field.charAt(0).toUpperCase() + field.slice(1)}
          </label>
          <input
            type="text"
            id={field}
            name={field}
            placeholder={`Enter ${field}`}
            value={formData[field]}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px"
            }}
          />
        </div>
      ))}

      <button
        type="submit"
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}
      >
        Add User
      </button>
    </form>
  );
};

export default AddUserForm;
