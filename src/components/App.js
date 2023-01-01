import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import useVideos from '../hooks/useVideos';
const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('Stay');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className='ui container'>
      <SearchBar onFormSubmit={search} />
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
            <VideoDetail video={selectedVideo} />
          </div>
          <div className='five wide column'>
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
          <h2 class='ui center aligned icon header'>
            <i class='caret square right icon'></i>
            Search on Youtube
          </h2>
        </div>
      </div>
    </div>
  );
};

export default App;
