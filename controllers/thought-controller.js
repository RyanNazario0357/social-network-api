const { Thought, User } = require("../models");

const thoughtController = {
  addThought({ params, body }, res) {
    console.log(body);
    Thought.create(body).then(({ _id }) => {
      return User.findOneAndUpdate(
        { _id: params.userId },
        { $push: { thoughts: _id } },
        { new: true, runValidators: true }
      )
        .then((userData) => {
          if (!userData) {
            res.status(404).json({ message: "No User Found" });
            return;
          }
          res.json(userData);
        })
        .catch((err) => {
          res.status(400).json(err);
          console.log(err);
        });
    });
  },