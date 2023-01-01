import axios from 'axios';

const KEY = 'AIzaSyAq4_jD5q2cfYUR0bi8O8ORQ9KWTSlIkeI';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 20,
    key: KEY,
  },
});
