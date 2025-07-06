import React, { useState } from "react";
import "./assets/css/contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: "5",
    feedback: "",
  });
  const { name, email, rating, feedback } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your feedback! ");
  };

  return (
    <div
      className="card contact-card"
      style={{
        padding: "20px",
        maxWidth: "500px",
        margin: "auto",
        marginTop: "50px",
      }}
    >
      <h1 className="display-4 text-center">Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
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
            className="form-control"
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
            className="form-control"
            id="rating"
            name="rating"
            value={rating}
            onChange={handleChange}
          >
            {[1, 2, 3, 4, 5].map((val) => (
              <option key={val}>{val}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="feedback">Suggestions/Feedback</label>
          <textarea
            className="form-control"
            id="feedback"
            name="feedback"
            rows="3"
            value={feedback}
            onChange={handleChange}
            placeholder="Enter your feedback"
          ></textarea>
        </div>
        <div className="d-flex justify-content-end gap-2">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
