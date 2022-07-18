import React, { useState }  from 'react';
import Axios from 'axios';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function UserData() {
    

    var [username,setName]=useState()
    
    const nameUpdate=(event)=>{ // Dealing with name field changes to update our state
        setName(event.target.value)
    }
    
    
  const handleSubmit=()=> { // Once the form has been submitted, this function will post to the backend
        const postURL = "http://localhost:3001/test/saveData/" //Our previously set up route in the backend
        fetch(postURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ // We should keep the fields consistent for managing this data later
                username: username
            })
        })
        .then(()=>{
            // Once posted, the user will be notified 
            alert('You have been added to the system!');
        })
    }
  
  return(
    <form onSubmit={handleSubmit}>
      <label>
        <h1 className="contact">Contact Me</h1>
        <input onChange={nameUpdate} type="text" name= "username"/>
      </label>
      <div>
        <Button type="submit" className='contact'>Submit</Button>
      </div>
    </form>
  )
    
    
}

