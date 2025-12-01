import { useState } from "react";
import "./InvestmentForm.css";

export default function GovernmentSchemeForm() {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    state: "",
    annualIncome: "",
    occupation: "",
    category: "",
    lookingFor: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <div className="page-wrapper">
      <div className="card">
        <h1 className="title">Scheme Finder</h1>
        <p className="subtitle">
          Fill in your details and we’ll suggest the best schemes for you.
        </p>

        <form onSubmit={handleSubmit} className="form">
          <FormField label="Age">
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter your age"
              className="input"
            />
          </FormField>

          <FormField label="Gender">
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="select"
            >
              <option value="">Select gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </FormField>

          <FormField label="State">
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="e.g., Tamil Nadu"
              className="input"
            />
          </FormField>

          <FormField label="Annual Income (₹)">
            <input
              type="number"
              name="annualIncome"
              value={formData.annualIncome}
              onChange={handleChange}
              placeholder="e.g. 300000"
              className="input"
            />
          </FormField>

          <FormField label="Occupation">
            <select
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              className="select"
            >
              <option value="">Select occupation</option>
              <option>Student</option>
              <option>Farmer</option>
              <option>Salaried</option>
              <option>Self-employed</option>
              <option>Unemployed</option>
              <option>Senior Citizen</option>
              <option>Other</option>
            </select>
          </FormField>

          <FormField label="Category">
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="select"
            >
              <option value="">Select category</option>
              <option>General</option>
              <option>OBC</option>
              <option>SC</option>
              <option>ST</option>
              <option>EWS</option>
            </select>
          </FormField>

          <FormField label="Type of Scheme Needed">
            <select
              name="lookingFor"
              value={formData.lookingFor}
              onChange={handleChange}
              className="select"
            >
              <option value="">Select scheme type</option>
              <option>Education</option>
              <option>Healthcare</option>
              <option>Housing</option>
              <option>Business / Startup</option>
              <option>Agriculture</option>
              <option>Women Empowerment</option>
              <option>Financial Assistance</option>
              <option>Employment</option>
              <option>Other</option>
            </select>
          </FormField>

          <button type="submit" className="button">
            Find Schemes
          </button>
        </form>
      </div>
    </div>
  );
}

function FormField({ label, children }: any) {
  return (
    <div className="field">
      <label className="label">{label}</label>
      {children}
    </div>
  );
}
