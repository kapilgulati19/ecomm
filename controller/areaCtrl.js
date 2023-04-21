const Area = require("../models/areaModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId");
const slugify = require("slugify");
const createArea = asyncHandler(async (req, res) => {
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const newArea = await Area.create(req.body);
    res.json(newArea);
  } catch (error) {
    throw new Error(error);
  }
});
const updateArea = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const updatedArea = await Area.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedArea);
  } catch (error) {
    throw new Error(error);
  }
});
const deleteArea = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedArea = await Area.findByIdAndDelete(id);
    res.json(deletedArea);
  } catch (error) {
    throw new Error(error);
  }
});
const getArea = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getaArea = await Area.findById(id);
    res.json(getaArea);
  } catch (error) {
    throw new Error(error);
  }
});
const getallArea = asyncHandler(async (req, res) => {
  try {
    const getallArea = await Area.find();
    res.json(getallArea);
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = {
  createArea,
  updateArea,
  deleteArea,
  getArea,
  getallArea,
};
