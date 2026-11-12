
import React, { useState } from 'react';
import './App.css';

function App() {
  const [form, setForm] = useState({
    email: '',
    name: '',
    address: '',
    address2: '',
    city: '',
    province: '',
    postalCode: '',
    agree: false
  });

  const [submitted, setSubmitted] = useState(null);

  const provinces = [
    'Alberta', 'British Columbia', 'Manitoba',
    'New Brunswick', 'Newfoundland and Labrador',
    'Nova Scotia', 'Ontario', 'Prince Edward Island',
    'Quebec', 'Saskatchewan',
    'Northwest Territories', 'Nunavut', 'Yukon'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted({ ...form });
  };

  return (
    <div className="container">
      <h1>Data Entry Form</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email"
              placeholder="Enter email"
              value={form.email}
              onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange} required />
          </div>
        </div>

        <div className="form-group">
          <label>Address</label>
          <input type="text" name="address"
            placeholder="1234 Main St"
            value={form.address}
            onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Address 2</label>
          <input type="text" name="address2"
            placeholder="Apartment, studio, or floor"
            value={form.address2}
            onChange={handleChange} />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>City</label>
            <input type="text" name="city"
              value={form.city}
              onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Province</label>
            <select name="province"
              value={form.province}
              onChange={handleChange} required>
              <option value="">Choose...</option>
              {provinces.map((province) => (
                <option key={province} value={province}>
                  {province}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Postal Code</label>
            <input type="text" name="postalCode"
              value={form.postalCode}
              onChange={handleChange} required />
          </div>
        </div>

        <div className="checkbox-group">
          <label>
            <input type="checkbox" name="agree"
              checked={form.agree}
              onChange={handleChange} required />
            Agree Terms &amp; Condition?
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div className="result">
          <p><strong>Email:</strong> {submitted.email}</p>
          <p><strong>Full Name:</strong> {submitted.name}</p>
          <p><strong>Address:</strong> {submitted.address}</p>
          {submitted.address2 && (
            <p><strong>Address 2:</strong> {submitted.address2}</p>
          )}
          <p><strong>City:</strong> {submitted.city}</p>
          <p><strong>Province:</strong> {submitted.province}</p>
          <p><strong>Postal Code:</strong> {submitted.postalCode}</p>
        </div>
      )}
    </div>
  );
}

export default App;
