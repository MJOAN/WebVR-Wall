const Profile = require("../models/profile")

const createProfile = async (req,res) => {
    try{
        const loadProfile = await Profile.create(req.body);
        res.json({msg: "profiles posted:", data: loadProfile})

    }
    catch(err){
        console.log(err) 
    }
}

const getProfile = async  (req, res) => {
    try{
        const loadProfile = await Profile.find({})
        if( loadProfile ){
            res.json({msg: "loading profiles: ", data: loadProfile})
        }
    } catch(err){
         console.log(err) 
    }
}

module.exports = {createProfile, getProfile}
