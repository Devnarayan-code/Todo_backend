const { Router } = require("express");
const {
  getToDO,
  saveToDO,
  updateToDO,
  deleteToDO,
} = require("../Controllers/ToDocontrollers");
const router = Router();

router.get("/", getToDO);
router.post("/save", saveToDO);
router.put("/update", updateToDO);
router.delete("/delete/:_id", deleteToDO);

module.exports = router;
