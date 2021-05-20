import React from 'react'
import VideoItem from './VideoItem';

class VideoList extends React.Component{
  

    render(){

        const updates = this.props.videos.map((video)=>{
            return (
            < VideoItem key={video.id.videoId} onVideoSelect={this.props.onVideoSelect} video={video} />
            )
        })
        
        return(
         <div className="ui relaxed divided list">
                {updates}
         </div>
        )
    }
}

export default VideoList;