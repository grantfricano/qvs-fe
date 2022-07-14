import React, { useState }  from 'react';
import Axios from 'axios';


export default function Login() {
    
  Axios({
      method: 'post',
      url: 'http://localhost:3000/login',
      data: {
        email: 'test@gmail.com',
        password: 'password'
      }
    })
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });;
    
  return(
    <form >
      <label>
        <p>Username</p>
        <input type="text" name= "email"/>
      </label>
      <label>
        <p>Password</p>
        <input type="password" name= "password"/>
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
    
    
}

