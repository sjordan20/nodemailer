import React, { useState } from 'react';
import './App.css';

import axios from 'axios'

function App() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')


  const handleChange = (e) => {
    e.preventDefault()

    if (e.target.id === 'name') {
      setName(e.target.value)
    } else {
      setEmail(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const dataToSubmit = {
      name,
      email
    }
    axios.post('/api/sendMail', dataToSubmit)
  }



  return (
    <div className="App">

      <form onSubmit={handleSubmit}>
        <input id='name' placeholder='name' value={name} onChange={handleChange} />
        <input id='email' placeholder='email' value={email} onChange={handleChange} />

        <button onClick={handleSubmit}>Send Email</button>

      </form>
    </div>
  );
}

export default App;
