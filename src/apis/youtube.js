import axios from 'axios'

const KEY = 'AIzaSyAon1h0cDaub2FnMeIW8UeQzhRfZHbl5Ys';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
       
        maxResults: 5,
        key:KEY
    }
});
