import './VideoItem.css'
import React from 'react'

class VideoItem extends React.Component{
  
    render(){
        const video = this.props.video;
        return(
         <div onClick={(e)=>this.props.onVideoSelect(video)} className="video-item item">
             <img className="ui image" alt={video.snippet.title} src={video.snippet.thumbnails.medium.url} />
             <div className="content">
                 <div className="header">
                 {video.snippet.title}
                 </div>
             </div>
             
         </div>
        
        )
    }
}

export default VideoItem;