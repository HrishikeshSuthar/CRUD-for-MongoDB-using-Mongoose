const User = require("../models/user");

const add = async (req, res) => {
  try {
    let data = {
      name: req.body.name,
    };
    const user = await User.create(data);
    return res.status(200).send(user);
  } catch (error) {
    console.log(error);
  }
};

const getAll = async (req, res) => {
  try {
    const user = await User.find({});
    return res.status(200).send(user);
  } catch (error) {
    console.log(error);
  }
};

const getOne = async (req, res) => {
  try {
    let id = req.params.id;
    const user = await User.findById({ _id: id });
    return res.status(200).send(user);
  } catch (error) {
    console.log(error);
  }
};

const update = async (req, res) => {
  try {
    let id = req.params.id;
    const user = await User.findByIdAndUpdate({ _id: id }, { $set: req.body });
    return res.status(200).json({ Message: "Updated" });
  } catch (error) {
    console.log(error);
  }
};

const deleteOne = async (req, res) => {
  try {
    let id = req.params.id;
    const user = await User.findByIdAndDelete({ _id: id });
    return res.status(200).json({ Message: "Deleted" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { add, getAll, getOne, update, deleteOne };
