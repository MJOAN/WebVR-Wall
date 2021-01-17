const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        console.log("findAll req.query ", req.query);  // .find(req.query)
        db.Profile 
            .find({})
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));

    },
    findById: function(req, res) {
        console.log("findById req.query ", req.query); 
        db.Profile
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        console.log("create req.body: ", req.body);  
        db.Profile
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }, 
    remove: function(req, res) {
        db.Profile
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
  }
}


