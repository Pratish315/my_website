import axios from "axios";

const FirebaseInstance = axios.create({
  baseURL: "https://mywebsite-313419.firebaseio.com/",
});

export default FirebaseInstance;