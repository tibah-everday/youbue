import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import Youtube from './service/youtubeService'
const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_BEFOREKEY, process.env.REACT_APP_YOUTUBE_API_AFTERKEY, process.env.REACT_APP_YOUTUBE_API_DEFAULTURL);
// env파일 만들고 여기서 세 번째 인자 집어넣는 것만 잘 안됨!! 아마 할당량 문제 -> 해결^^
ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube}/>
  </React.StrictMode>,
  document.getElementById('root')
);

