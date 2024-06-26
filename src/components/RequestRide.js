import React, { useState } from 'react';
import { MobileNav } from './Nav';

export function RequestRide() {
  const [formData, setFormData] = useState({
    name: '',
    id: '',
    phone: '',
    pickup: '',
    dropoff: '',
    time: '',
    startDate: '',
    endDate: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');

  const [submittedForm, setSubmittedForm] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: '',
      id: '',
      phone: '',
      pickup: '',
      dropoff: '',
      time: '',
      startDate: '',
      endDate: '',
    });
    let hasError = false;
    const requiredFields = ['name', 'id', 'phone', 'pickup', 'dropoff', 'time', 'startDate', 'endDate'];

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
      setSubmittedForm([...submittedForm, { ...formData }]);
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div>
      <>
        <header>
          <MobileNav />
          <h1>REQUEST A RIDE</h1>
          <p>
            Submit ride requests by phone or through the link to the request form below.<br />
            Please allow at least one hour advance notice when requesting same-day rides.<br />
            Ride requests are not guaranteed until the program coordinator confirms availability via phone or email.<br />
            Ride times are subject to availability.<br />
          </p>
        </header>

        <form id="formInput" onSubmit={handleSubmit}>
          <h2>DIAL-A-REQUEST FORM</h2>
          <div className="flex-container">
            <div id="riderInfo" className="flex-item">
              <h3>RIDER INFORMATION</h3>

              <label htmlFor="nameInput">Name:</label>
              <input type="text" id="nameInput" name="name" value={formData.name} onChange={handleChange} />

              <label htmlFor="idInput">Student ID:</label>
              <input type="text" id="idInput" name="id" value={formData.id} onChange={handleChange} />

              <label htmlFor="phoneInput">Phone:</label>
              <input type="tel" id="phoneInput" name="phone" value={formData.phone} onChange={handleChange} />
            </div>

            <div id="stopList" className="flex-item">
              <h3>DIAL-A-RIDE STOP LIST</h3>
              <p>
                If you have any questions about pickup or dropoff locations,<br />
                please contact us at shuttles@uw.edu or 206-685-3146 before filling out the form.
              </p>

              <label htmlFor="pickupInput">Pick Up Location:</label>
              <input type="text" id="pickupInput" name="pickup" value={formData.pickup} onChange={handleChange} />

              <label htmlFor="dropoffInput">Drop Off Location:</label>
              <input type="text" id="dropoffInput" name="dropoff" value={formData.dropoff} onChange={handleChange} />

              <label htmlFor="timeInput">Desired Pick Up Time (ex. 3:15PM or 12:35AM):</label>
              <input type="text" id="timeInput" name="time" value={formData.time} onChange={handleChange} />

              <label htmlFor="startDateInput">Start Date:</label>
              <input type="date" id="startDateInput" name="startDate" value={formData.startDate} onChange={handleChange} />

              <label htmlFor="endDateInput">End Date:</label>
              <input type="date" id="endDateInput" name="endDate" value={formData.endDate} onChange={handleChange} />
            </div>
          </div>
          <div id="submit-discription" className="flex-item">
            <p>
              Want to find pick up or drop off stops?{' '}
              <a href="https://depts.washington.edu/ceogis/Public/DialARide/" className="map-link">Click Here</a>
            </p>
            <button onClick={handleSubmit}>SUBMIT A REQUEST</button>
            {errorMessage && <p className='changes'>{errorMessage}</p>}
            {submitted && <p className='changes'>Report submitted</p>}
          </div>
        </form>
      </>
    </div>
  );
}
