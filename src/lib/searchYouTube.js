import YOUTUBE_API_KEY from '../config/youtube.js';



var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search?',
    type: 'GET',
    data: {
      key: options.key,
      maxResults: options.max,
      q: options.query,
      type: 'video',
      videoEmbeddable: true,
      part: 'snippet'
    },

    success: function (data) {
      const { items } = data;
     // console.log(items);
      callback(items);
    },
    error: function (response) {
      console.log('Request Failed');
    }
  });
};

export default searchYouTube;
//'AIzaSyD_rso1iBPlBYYt3iiGxteBLus5syeQi2c',

