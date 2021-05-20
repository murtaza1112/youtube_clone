import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios'
import VideoList from './VideoLIst'
import VideoDetail from './VideoDetail';

const KEY = 'AIzaSyAon1h0cDaub2FnMeIW8UeQzhRfZHbl5Ys';


class App extends React.Component{
 state = { videos:[] ,selectedVideo:null };
 componentDidMount(){
     this.onSearchSubmit('dominoes');
   
 }
  onSearchSubmit = async (search) =>{
    console.log(search);
   const response = await axios.get('/search',{
       baseURL:'https://www.googleapis.com/youtube/v3',
      params:{
        part:'snippet',
       q:search,
       maxResults: 15,
       key:KEY
       }
   })

   this.setState({
     videos:response.data.items,
    selectedVideo:response.data.items[0]
  })
   console.log(this.state.videos)
  }

  onVideoSelect = video => {
    console.log(video)
    this.setState({selectedVideo:video})
  }

  render(){
    return(
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onSearchSubmit}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
            <VideoDetail selectedVideo={this.state.selectedVideo}/>
            </div>
              <div className="five wide column">
              <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
              </div>
          </div>
        </div>   
      </div>
    )
  }
}
export default App;
