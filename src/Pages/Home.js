import React, { useEffect, useState } from "react";

function Home() {

    const [data, setData] = React.useState(null);

    React.useEffect(() => {
      fetch("/api")
        .then((res) => res.json())
        .then((data) => setData(data.message));
    }, []);
    
    return <div>This is the home page <p> test {data}</p></div>;
    

}

export default Home;