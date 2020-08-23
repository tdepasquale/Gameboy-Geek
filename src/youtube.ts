import axios from "axios";
const KEY = "AIzaSyD-qL9lwShxt0t3VMp8nHb_TQ_AL1TefBU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
