import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const DeleteUserForm = () => {
  const [userId, setUserId] = useState("");

  const handleDelete = (e) => {
    e.preventDefault();
    axios
      .delete(`http://127.0.0.1:5000/delete/user/${userId}`)
      .then(() => toast.success("student deletd"))
      .catch(() => toast.error("student not deleted"));
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5"
      }}
    >
      <form
        onSubmit={handleDelete}
        style={{
          maxWidth: "400px",
          padding: "30px",
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)"
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Delete User</h2>

        <label htmlFor="userId" style={{ fontWeight: "bold" }}>User ID</label>
        <input
          type="text"
          id="userId"
          name="userId"
          placeholder="Enter User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            border: "1px solid #ccc",
            borderRadius: "5px"
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#dc3545",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          Delete User
        </button>
      </form>
    </div>
  );
};

export default DeleteUserForm;
