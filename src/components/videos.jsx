import React,{useState, useEffect} from 'react';
import VideoList from './video_list/video_list';
import './videos.css'
import axios from 'axios';
function Videos(props) {
    // async function getData(){
    //     const datas = await axios.get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=%EB%85%B8%EB%8F%99%EB%A6%BC&key=AIzaSyDhLRQLN-_jxsQM1AVCFg1CWxkUUtcQsRw");
    //     console.log(datas);
    //     return datas;
    // }
    // const axiosData = getData();

    // console.log(axiosData.data.items);
    // const datas = axios.get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=%EB%85%B8%EB%8F%99%EB%A6%BC&key=AIzaSyDhLRQLN-_jxsQM1AVCFg1CWxkUUtcQsRw");
    // console.dir(datas);
    // 이게 왜 콘솔에 안 나와?
    // console.log(datas.data.items);
    
    //     const defaultVideos = props.youtube.defaultVideos().then(result=>{
        //         return result;
        //     });
        //    console.log("defaultVideos: ",defaultVideos);
        const [videos, setVideos] = useState([]);
        useEffect(()=>{       
        props.youtube.showVideos(props.url).then((result)=>{
            console.log(result);
            setVideos(result.items);
        })
    },[props.url])

    useEffect(()=>{
        console.log(videos);
    },[videos])
    
    return (                
        <VideoList videos={videos} onVideoClick={props.onVideoClick}/>   
        // <div>example</div>      
    )
}

export default Videos
