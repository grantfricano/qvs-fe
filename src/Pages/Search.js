import React, { useState, useEffect }  from 'react';

export default function Search() {
    
  const [userData, setUserData] = useState([])

  const fetchData = () => {
    fetch("http://localhost:3001/test/data")
      .then(data => {
        data.json().then(body=>setUserData(body))
      })
  }
  
  useEffect(() => {
    fetchData()
  }, [])
  
  return (
    <div>
      {userData.length > 0 && (
        <ul>
          {userData.map(user => (
            <li key={user._id}>{user.username} </li>
      ))}
        </ul>
      )}
    </div>
  )
}

