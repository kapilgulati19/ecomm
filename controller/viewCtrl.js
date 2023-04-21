const View = require("../models/viewModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId");
const slugify = require("slugify");
const createView = asyncHandler(async (req, res) => {
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const newView = await View.create(req.body);
    res.json(newView);
  } catch (error) {
    throw new Error(error);
  }
});
const updateView = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const updatedView = await View.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedView);
  } catch (error) {
    throw new Error(error);
  }
});
const deleteView = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedView = await View.findByIdAndDelete(id);
    res.json(deletedView);
  } catch (error) {
    throw new Error(error);
  }
});
const getView = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getaView = await View.findById(id);
    res.json(getaView);
  } catch (error) {
    throw new Error(error);
  }
});
const getallView = asyncHandler(async (req, res) => {
  try {
    const getallView = await View.find();
    res.json(getallView);
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = {
  createView,
  updateView,
  deleteView,
  getView,
  getallView,
};
