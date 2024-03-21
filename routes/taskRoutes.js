const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Get All Tasks!" });
});

router.post("/", (req, res) => {
  res.status(200).json({ message: "Created Task" });
});

router.put("/:id", (req, res) => {
  res.status(200).json({ message: `Task ${req.params.id} updated` });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ message: `Task ${req.params.id} deleted` });
});

module.exports = router;
