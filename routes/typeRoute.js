const express = require("express");
const {
  createType,
  updateType,
  deleteType,
  getType,
  getallType,
} = require("../controller/typeCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createType);
router.put("/:id", authMiddleware, isAdmin, updateType);
router.delete("/:id", authMiddleware, isAdmin, deleteType);
router.get("/:id", getType);
router.get("/", getallType);

module.exports = router;
