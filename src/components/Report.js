import React, { useState } from 'react';

export function Report(props) {
  const [formData, setFormData] = useState({
    name: '',
    studentID: '',
    phone: '',
    dateTime: '',
    location: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <header>
        <img id='menu' src='img/menu-icon.png' alt='menu' />
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
          <input type='text' id='nameInput' name='name' value={formData.name} onChange={handleChange} /> <br />

          <label htmlFor='idInput'>Student ID:</label> <br />
          <input type='text' id='idInput' name='studentID' value={formData.studentID} onChange={handleChange} /> <br />

          <label htmlFor='phoneInput'>Phone:</label> <br />
          <input type='text' id='phoneInput' name='phone' value={formData.phone} onChange={handleChange} /> <br />

          <label htmlFor='dateTimeInput'>Date and Time:</label> <br />
          <input type='datetime-local' id='dateTimeInput' name='dateTime' value={formData.dateTime} onChange={handleChange} /> <br />

          <label htmlFor='locationInput'>Location:</label> <br />
          <input type='text' id='locationInput' name='location' value={formData.location} onChange={handleChange} /> <br />

          <label htmlFor='descriptionInput'>Description of what you saw:</label> <br />
          <input type='text' id='descriptionInput' name='description' value={formData.description} onChange={handleChange} /> <br />
        </div>

        <button onClick={handleSubmit}>SAVE CHANGES</button>
      </div>
    </>
  );
}