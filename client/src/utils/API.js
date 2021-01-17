import axios from "axios";

// const baseUrl = process.env.baseURL || "http://localhost:3001"

export default {
  // gets all profiles
  getProfiles: function() {
    //return axios.get("https://motivational-vr-wall.herokuapp.com/api");
    return(axios.get("http://localhost:3000/api/"))
  },
  // gets profile with given id
  getProfile: function(id) {
return axios.get("http://localhost:3000/api/" + id);
  }
};


