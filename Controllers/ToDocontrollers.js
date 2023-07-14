const mongoose = require("mongoose");
const ToDoModel = require("../Models/ToDomodels");

module.exports.getToDO = async (req, res) => {
  const todo = await ToDoModel.find();
  res.send(todo);
};

module.exports.saveToDO = async (req, res) => {
  const { text } = req.body;

  ToDoModel.create({text})
  .then((data) => {
    res.send("Data added successfully.....");
    console.log(data);
  });

  // res.send(text);
};

module.exports.updateToDO = async (req, res) => {
  const { _id, text } = req.body;
  ToDoModel.findByIdAndUpdate(_id, { text })
    .then(() => {
      res.send(`Data updated successfully`);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.deleteToDO = async (req, res) => {
  const { _id } = req.params;
  ToDoModel.findByIdAndDelete(_id)
    .then(() => {
      res.send(`Data deleted successfully`);
    })
    .catch((err) => {
      console.log(err);
    });
};
