import axios from "axios";

export default axios.create({
  baseURL: "http://134.122.120.244:5000/api/",

  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
},
});
