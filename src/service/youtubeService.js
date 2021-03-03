class Youtube{
    constructor(key){
        this.key = key;
        // this.getRequestOptions ={
        //     method: "GET",
        //     redirect: 'follow'
        // }
        this.url= 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=%EB%85%B8%EB%8F%99%EB%A6%BC&key=AIzaSyBcVKV3kPP7p9AZrORuYWV69BJSk3DT9WE';
        // this.url= "https://jsonplaceholder.typicode.com/albums"
        this.beforeKey = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q='
        this.afterKey = '&key=AIzaSyBcVKV3kPP7p9AZrORuYWV69BJSk3DT9WE'
        
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