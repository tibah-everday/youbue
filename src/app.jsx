import React, {useState, useEffect} from 'react'



import Header from './components/header';
import Videos from './components/videos';
import './app.css';




function App() {

  const [url, setUrl] = useState('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=%EB%85%B8%EB%8F%99%EB%A6%BC&key=AIzaSyDhLRQLN-_jxsQM1AVCFg1CWxkUUtcQsRw');    
  function handleSearch(newUrl){
    console.log("it works");
    setUrl(newUrl);
  }
  useEffect(()=>{
    console.log(url);
  },[url])
  
  return (
    <>
    <Header url={url} handleSearch={handleSearch}/>
    <Videos url={url}/>
    </>
  );
}

export default App;

