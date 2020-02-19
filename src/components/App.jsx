import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoListEntry from './VideoListEntry.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import searchYouTube from '../lib/searchYouTube.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      currentVideo: exampleVideoData[0],
      videoList: exampleVideoData,
    };
  }
  handleChange(video) {
    this.setState({ currentVideo: video });
    searchYouTube({
      key: YOUTUBE_API_KEY,
      max: 5,
      query: 'react tutorial'
    }, data => {
      //console.log(data);
    });
  }

  // componentDidMount() {
  //   searchYoutube({
  //     key: YOUTUBE_API_KEY,
  //     max: 5,
  //     query: 'react tutorial'
  //   }, data => {
  //     console.log(data);
  //   });
  // }

  render() {
    return (<div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div>
            <h5><em>sear ch</em></h5>

          </div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div>
            <h5><em>Video Player</em><VideoPlayer video={this.state.currentVideo} /></h5>
          </div>
        </div>
        <div className="col-md-5">
          <div>
            <h5><em>Video List</em><VideoList videos={this.state.videoList} handleChange={this.handleChange} /></h5>
          </div>
        </div>
      </div>
    </div>
    );
  }

}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
