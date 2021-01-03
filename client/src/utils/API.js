import axios from "axios";

export default {
  // gets all profiles
  getProfiles: function() {
    return axios.get("https://motivational-vr-wall.herokuapp.com/api");
  },
  // gets profile with given id
  getProfile: function(id) {
return axios.get("https://motivational-vr-wall.herokuapp.com/api/" + id);
  }
};
