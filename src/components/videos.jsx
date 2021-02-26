import React,{useState, useEffect} from 'react';
import VideoList from './video_list/video_list';
import axios from 'axios';
function Videos() {
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
    const [videos, setVideos] = useState([]);
    
    useEffect(()=>{        
        var requestOptions = {
            method: "GET",
            redirect: 'follow'
        }
        fetch(
            'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=%EB%85%B8%EB%8F%99%EB%A6%BC&key=AIzaSyDhLRQLN-_jxsQM1AVCFg1CWxkUUtcQsRw', requestOptions
        )
        .then(response=> response.json())
        .then(result => {
            setVideos(result.items)
            console.log(videos);
        }
        )
        .catch(error => console.log('errormessage::', error))
    //    axios({
    //         method:"get",
    //         url: "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=%EB%85%B8%EB%8F%99%EB%A6%BC&key=AIzaSyDhLRQLN-_jxsQM1AVCFg1CWxkUUtcQsRw",
    //     }).then(result=>setVideos(result.items))
    //     .catch(error => console.log('error:', error));        
        console.log(videos);
    },[])

    return (        
        <VideoList videos={videos}/>   
        // <div>example</div>      
    )
}

export default Videos
