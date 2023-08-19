import React, { useState } from 'react';
// import PropTypes from "prop-types";

export default function CourtBooking(props) {

  const [selectedCourt, setSelectedCourt] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleCourtSelection = (event) => {
    setSelectedCourt(event.target.value);
  };

  const handleTimeSelection = (event) => {
    setSelectedTime(event.target.value);
  };
  const handleDateSelection = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleBooking = () => {
    // Code to handle booking the selected court and time
    // This could include making an API call to a server to reserve the court
    alert(`Booking confirmed for ${selectedCourt} at ${selectedTime}`);
  };

  return (
    <div>
      <h1 style={{color: props.mode==='light'?'#041227':'white'}}>Court Booking</h1>
      <label className=" my-3"style={{color: props.mode==='light'?'#041227':'white'}
        }>
        Select Court:
        <select onChange={handleCourtSelection}>
          <option  value="">Select a court</option>
          <option value="badminton">Badminton Court</option>
          <option value="tennis">Tennis Court</option>
          <option value="basketball">Basketball Court</option>
          <option value="gym">Gym</option>
        </select>
      </label>
      <br />
      <label style={{color: props.mode==='light'?'#041227':'white'}} >
        Select Time:
        <input type="time" onChange={handleTimeSelection} />
      </label>
      <br />
      <label className='my-3 'style={{color: props.mode==='light'?'#041227':'white'}} >
        Select Date:
        <input type="date" onChange={handleDateSelection} />
      </label>
      <br/>
      <button  onClick={handleBooking} disabled={!selectedCourt || !selectedTime} style={{color: props.mode==='light'?'black':'white'}}>
        Book
      </button>
    </div>
  );

}



