import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost/wordpress/wp-json/wp/v2", // your CMS endpoint
  headers: {
    "Content-Type": "application/json"
  }
});

export default api;