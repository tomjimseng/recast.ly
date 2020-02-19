import VideoListEntry from './VideoListEntry.js';
import exampleVideoData from '../data/exampleVideoData.js';

var VideoList = (videos) => (
  <div className="video-list">
    <div>
      <h5><em>videoListEntry</em>

        {exampleVideoData.map((videos, index) =>
          <VideoListEntry video={videos[index]} />
          console.log(videos);
        )};

      </h5>
    </div>
    {/*
    <div><h5><em>videoListEntry</em> {props.exampleVideoData[1]}</h5></div> */}

  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// ReactDOM.render(<VideoList />, document.getElementById('app'));
// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;

// snippet.title, snippet.description, snippet.thumbnails.default.url