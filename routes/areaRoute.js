const express = require("express");
const {
  createArea,
  updateArea,
  deleteArea,
  getArea,
  getallArea,
} = require("../controller/areaCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createArea);
router.put("/:id", authMiddleware, isAdmin, updateArea);
router.delete("/:id", authMiddleware, isAdmin, deleteArea);
router.get("/:id", getArea);
router.get("/", getallArea);

module.exports = router;
