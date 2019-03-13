"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CommentSchema = new _mongoose.default.Schema({
  text: {
    type: String,
    required: 'Text is required'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});