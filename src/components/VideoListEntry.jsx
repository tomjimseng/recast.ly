import exampleVideoData from '../data/exampleVideoData.js';

var VideoListEntry = (video) => (
  <div className="video-list-entry media">
    <div className="media-left media-middle">
      <img className="media-object" src={video}'https://i.ytimg.com/vi/4ZAEBxGipoA/default.jpg'alt="" />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title"></div>
      <div className="video-list-entry-detail">'My website - https://www.thenewboston.com/videos.php Have questions about the tutorial or React? Ask them here ...'</div>
    </div>
  </div>

);

// class VideoListEntry extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div className="video-list-entry media">
//         <div className="media-left media-middle">
//           <img className="media-object" src='snippet.thumbnail.default.url' alt="" />
//         </div>
//         <div className="media-body">
//           <div className="video-list-entry-title">snippet.title</div>
//           <div className="video-list-entry-detail">snippet.description</div>
//         </div>
//       </div>
//     );
//   }
// }
// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
