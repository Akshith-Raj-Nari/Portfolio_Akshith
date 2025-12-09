import React, { useState } from "react";
import "./assets/css/contact.css";
import axios from "axios";

function Contact() {
  const [status, setStatus] = useState("");
  // Use import.meta.env for Vite, process.env for CRA
  const host_key = import.meta.env.VITE_host_key;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: "5",
    message: "",
  });

  const { name, email, rating, message } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await axios.post(
        `https://portfolioserver-production-1952.up.railway.app/api/contact`,
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      const data = res.data;
      setStatus(data.message || data.error);
      if (data.message) {
        setFormData({ name: "", email: "", rating: "5", message: "" });
      }
    } catch (err) {
      console.error(err);
      setStatus("Something went wrong.");
    }
  };

  return (
    <div className="card contact-card">
      <h1 className="contact-title">Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="rating">Rating</label>
          <select
            id="rating"
            name="rating"
            value={rating}
            onChange={handleChange}
          >
            {[1, 2, 3, 4, 5].map((val) => (
              <option key={val} value={val}>
                {val}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">Suggestions/Feedback</label>
          <textarea
            id="message"
            name="message"
            rows="3"
            value={message}
            onChange={handleChange}
            placeholder="Let us know what you think..."
          ></textarea>
        </div>

        <div className="form-submit">
          <button type="submit">Submit</button>
          {status && <p className="status-message">{status}</p>}
        </div>
      </form>
    </div>
  );
}

export default Contact;
