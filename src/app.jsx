import React, {useState, useEffect} from 'react'



import Header from './components/header';
import Videos from './components/videos';
import './app.css';




function App(props) {
  // console.log(props.url);
  const [url, setUrl] = useState(props.youtube.url);    
  function handleSearch(keyword){    
    const newUrl = `${props.youtube.beforeKey}${keyword}${props.youtube.afterKey}`;
    setUrl(newUrl);
  }
  useEffect(()=>{    
  },[url])
  
  return (
    <>
    <Header handleSearch={handleSearch}/>
    <Videos youtube={props.youtube} url={url}/>
    </>
  );
}

export default App;

