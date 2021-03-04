class Youtube{
    constructor(beforeKey, afterKey, defaultUrl){
        
        this.defaultUrl= defaultUrl;
        // this.url= "https://jsonplaceholder.typicode.com/albums"
        this.beforeKey = beforeKey;
        this.afterKey = afterKey;
        
    }
        
         showVideos(url) {
        // const url =this.url;
        const requestOptions = {
            method: "GET",
            redirect: 'follow'
        }
        const videos= fetch(
            url, requestOptions
        )
        .then(response=> response.json())
        .then(result =>  {
           return result;
        })
        // 원래 setVideos에 result.items집어 넣는 거였는데 result.items를 return하는 걸로 끝냄
        .catch(error => console.log('errormessage::', error))
        return videos;
    }
        // search(keyword){
        //     const requestOptions = {
        //         method: "GET",
        //         redirect: 'follow'
        //     }

        //     const searchedVideos= fetch(
        //         `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&key=AIzaSyDhLRQLN-_jxsQM1AVCFg1CWxkUUtcQsRw`, requestOptions
        //     )
        //     .then(response=> response.json())
        //     .then(result=>{
        //         return result;
        //     })
        //     .catch(error => console.log('errormessage::',error));
        //     return searchedVideos
        // }
        
}

export default Youtube;