import React, { useState, useContext } from 'react';
import { ReportContext } from './ReportContext';
import { MobileNav } from './Nav';

export function Report() {
  const { addReport } = useContext(ReportContext);
  const [formData, setFormData] = useState({
    name: '',
    studentID: '',
    title:'',
    phone: '',
    dateTime: '',
    location: '',
    description: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');

  const [submittedReports, setSubmittedReports] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addReport(formData);
    setFormData({
      name: '',
      studentID: '',
      title:'',
      phone: '',
      dateTime: '',
      location: '',
      description: ''
    });
    let hasError = false;
    const requiredFields = ['name', 'studentID', 'title', 'dateTime', 'location', 'description'];

    for (const field of requiredFields) {
      if (formData[field] === '') {
        hasError = true;
        setErrorMessage('Form not submitted. Please fill in all fields.');
        break;
      }
    }

    if (!hasError) {
      setSubmitted(true);
      setErrorMessage('');
      setSubmittedReports([...submittedReports, { ...formData }]);
      console.log('Form submitted:', formData);
    }
  };

  return (
    <>
      <header>
        <MobileNav />
        <h1>MAKE A REPORT</h1>
        <p>
          Empower your community to stay vigilant and informed by making safety reports.<br />
          Report and share incidents promptly to keep everyone aware and safe, ensuring<br />
          a proactive approach to community security.
        </p>
      </header>

      <div id='report'>
        <div>
          <label htmlFor='nameInput'>Name:</label> <br />
          <input type='text' id='nameInput' name='name' value={formData.name} onChange={handleChange} required /> <br />

          <label htmlFor='idInput'>Student ID:</label> <br />
          <input type='text' id='idInput' name='studentID' value={formData.studentID} onChange={handleChange} required/> <br />

          <label htmlFor='phoneInput'>Phone:</label> <br />
          <input type='text' id='phoneInput' name='phone' value={formData.phone} onChange={handleChange} required/> <br />

          <label htmlFor='titleInput'>Title:</label> <br />
          <input type='text' id='titleInput' name='title' value={formData.title} onChange={handleChange} required/> <br />

          <label htmlFor='dateTimeInput'>Date and Time:</label> <br />
          <input type='datetime-local' id='dateTimeInput' name='dateTime' value={formData.dateTime} onChange={handleChange} required/> <br />

          <label htmlFor='locationInput'>Location:</label> <br />
          <input type='text' id='locationInput' name='location' value={formData.location} onChange={handleChange} required/> <br />

          <label htmlFor='descriptionInput'>Description of what you saw:</label> <br />
          <input type='text' id='descriptionInput' name='description' value={formData.description} onChange={handleChange} required/> <br />
        </div>

        <button onClick={handleSubmit}>SUBMIT REPORT</button>
        {errorMessage && <p className='changes'>{errorMessage}</p>}
        {submitted && <p className='changes'>Report submitted</p>}
      </div>
    </>
  );
}