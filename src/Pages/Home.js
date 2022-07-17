import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
    
    
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
      fetch("/test/welcome")
        .then((res) => res.json())
        .then((data) => setData(data.message));
    }, []);
    
    return <div><Button>test</Button> {data}</div>;
    

}
