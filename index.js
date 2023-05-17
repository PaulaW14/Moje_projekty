import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [attendees, setAttendees] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform additional actions here, such as sending the form data to a server

    // Reset the form fields
    setName('');
    setEmail('');
    setAttendees('');
  };

  return (
    <div className="container">
      <h1>Pizza Event-Registration</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label" htmlFor="name">Name:</label>
          <input
            className="input"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="email">Email:</label>
          <input
            className="input"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="attendees">Number of Attendees:</label>
          <input
            className="input"
            type="number"
            id="attendees"
            value={attendees}
            onChange={(e) => setAttendees(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));