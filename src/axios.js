import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-36ea8.cloudfunctions.net/api",
});

export default instance;

// http://localhost:5001/clone-36ea8/us-central1/api
