const express = require("express");
const router = express.Router();
const User = require("../model/userSchema");

/* POST a new user */

router.post("/newUser", (req, res) => {
  let newUser = new User(req.body);
  newUser.save((err, msg) => {
    if (err) throw err;
    else res.json({ msg: "new user added" });
  });
});

/* GET all the users */
router.get("/", (req, res) => {
  User.find({}, (err, data) => {
    if (err) throw err;
    else res.send(data);
  });
});

/* GET user by id */
router.get("/:id", (req, res) => {
  User.find({ _id: req.params.id }, (err, data) => {
    if (err) throw err;
    else res.send(data);
  });
});

/*DELETE user by id */
router.delete("/deleteUser/:id", (req, res) => {
  User.findByIdAndDelete({ _id: req.params.id }, (err, msg) => {
    if (err) throw err;
    else res.json({ msg: "user was deleted" });
  });
});

/* UPDATE user by id */
router.put("/updateUser/:id", (req, res) => {
  let updateUser = req.body;
  let userId = req.params.id;
  User.findByIdAndUpdate({ _id: userId }, updateUser, (err, data) => {
    if (err) throw err;
    else res.send(data);
  });
});

module.exports = router;
