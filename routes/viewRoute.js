const express = require("express");
const {
  createView,
  updateView,
  deleteView,
  getView,
  getallView,
} = require("../controller/viewCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createView);
router.put("/:id", authMiddleware, isAdmin, updateView);
router.delete("/:id", authMiddleware, isAdmin, deleteView);
router.get("/:id", getView);
router.get("/", getallView);

module.exports = router;
