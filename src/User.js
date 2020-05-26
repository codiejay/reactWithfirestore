import React, { useState, useRef } from 'react';
import firebase from 'firebase';

const User = (props) => { 

  let [userName, setuserName] = useState('');
  let [useremail, setuseremail] = useState('');

  const handleUserNameChange = (e) => { 
    setuserName(userName = e.target.value);
  }

  const handleUserEmailChange = (e) => { 
    setuseremail(useremail = e.target.value);
  }
  
  const handleFormSubmit = (e) => { 
    e.preventDefault();

    const db = firebase.firestore();
    if(Boolean(userName) && Boolean(useremail)) { 
      const userRef = db.collection('users')
      .add({ 
        fullName: userName,
        email: useremail

      })
      console.log(userRef);

      setuserName(useremail = '');
      setuseremail(useremail = '');
    }
  }

  return ( 
    <div>
      <form onSubmit={handleFormSubmit}>
        <input 
          placeholder='your name' 
          name='username'
          type='text'
          onChange={handleUserNameChange}
          value={userName}
        />
        <input
          onChange={handleUserEmailChange} 
          placeholder='your email' 
          name='email'
          type='email'
          value={useremail}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default User;