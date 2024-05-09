const mongoose = require("mongoose");
const Thought = require("../../models/thoughts");
const User = require("../../models/user");
const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const thoughtData = await Thought.find();
    res.status(200).json(thoughtData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const thoughtData = await Thought.findOne({ _id: req.params.id });
    if(!thoughtData) 
      return res.status(404).json("Thought not found");
    res.status(200).json(thoughtData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//post for reactions
router.post("/:thoughtId/reaction", async (req, res) => {
  try {
    const thoughtData = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { new: true }
    );
    if(!thoughtData) 
      return res.status(404).json("Thought not found");
    res.status(200).json(thoughtData);
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const thoughtData = await Thought.create(req.body);
    const userData = User.findOneAndUpdate(
      { _id: req.body.userId },
      { $push: { thoughts: thoughtData._id } }
    );
    if (!userData) {
      res.status(404).json("No User found");
    }
    res.status(200).json(thoughtData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const thoughtData = await Thought.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },{new:true}
    );
    if(!thoughtData) 
      return res.status(404).json("Thought not found");
    res.status(200).json(thoughtData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const thoughtData = await Thought.deleteOne({
      _id: req.params.id,
    });
    if(!thoughtData) 
      return res.status(404).json("Thought not found");
    const userData = User.findOneAndUpdate(
      { _id: req.body.userId },
      { $pull: { thoughts: thoughtData._id } }
    );
    if(!userData) 
      return res.status(200).json("Thought deleted but user not found");
    res.status(200).json("Deleted Successfully");
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete for reaction
router.delete("/:thoughtId/reaction/:reactionId", async (req, res) => {
  try {
   
    const thoughtData = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { new: true }
    );
    res.status(200).json("Deleted Successfully");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
