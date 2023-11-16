import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import axios from 'axios';
const HealthDataForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    userId: '',
    gender: '',
    age: '',
    isSmoker: false,
    isDrinker: false,
    hasTerminalDisease: false,
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Update form data based on input type
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  let userId=3;

  // Handle form submissionf
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:8090/user-dashboard/buyPolicy/${userId}`, formData);
      if (response.ok) {
        // Handle success (e.g., show a success message)
        console.log('Form submitted successfully!');
      } else {
        // Handle errors (e.g., show an error message)
        console.error('Form submission failed:', response.statusText);
      }
      console.log('Server response:', response.data);
      // You can handle the response from the server here
    } catch (error) {
      console.error('Error submitting form:', error);
      // You can handle errors here
    }

  
  } 
  return (
    <div>
      <h2>User Health Data Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          User ID:
          <input
            type="number"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
          />
        </label>

        <label>
          Gender:
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>

        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </label>

        <label>
          Smoker:
          <input
            type="checkbox"
            name="isSmoker"
            checked={formData.isSmoker}
            onChange={handleChange}
          />
        </label>

        <label>
          Drinker:
          <input
            type="checkbox"
            name="isDrinker"
            checked={formData.isDrinker}
            onChange={handleChange}
          />
        </label>

        <label>
          Terminal Disease:
          <input
            type="checkbox"
            name="hasTerminalDisease"
            checked={formData.hasTerminalDisease}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};


 


export default HealthDataForm;