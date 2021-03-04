import React, {useState, useEffect} from 'react'



import Header from './components/header';
import Videos from './components/videos';
import VideoDetail from './components/video_detail/video_detail'
import './app.css';




function App(props) {
  // console.log(props.url);
  const [url, setUrl] = useState(props.youtube.defaultUrl);
  const [selectedVideo, setSelectedVideo] = useState(null);     
  function handleSearch(keyword){    
    const newUrl = `${props.youtube.beforeKey}${keyword}${props.youtube.afterKey}`;
    setUrl(newUrl);
  }
  function selectVideo(video){
    console.log(video);
    setSelectedVideo(video);
  }
  useEffect(()=>{    
    console.log(url);
  },[url])
  
  return (
    <>
    <Header handleSearch={handleSearch} className="header"/>
    <section className="contents">
      <div className="videoDetail">{selectedVideo&&<VideoDetail video={selectedVideo}/>}</div>
      <div className="videos"><Videos youtube={props.youtube} url={url} onVideoClick={selectVideo}/></div>      
    </section>
    </>
  );
}

export default App;

