const Type = require("../models/typeModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId");

const createType = asyncHandler(async (req, res) => {
  try {
    const newType = await Type.create(req.body);
    res.json(newType);
  } catch (error) {
    throw new Error(error);
  }
});
const updateType = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updatedType = await Type.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedType);
  } catch (error) {
    throw new Error(error);
  }
});
const deleteType = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedType = await Type.findByIdAndDelete(id);
    res.json(deletedType);
  } catch (error) {
    throw new Error(error);
  }
});
const getType = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getaType = await Type.findById(id);
    res.json(getaType);
  } catch (error) {
    throw new Error(error);
  }
});
const getallType = asyncHandler(async (req, res) => {
  try {
    const getallType = await Type.find();
    res.json(getallType);
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = {
  createType,
  updateType,
  deleteType,
  getType,
  getallType,
};
