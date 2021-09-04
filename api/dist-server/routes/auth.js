"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();
/* GET users listing. */


router.get('/', function (req, res, next) {
  res.send('login adam');
});
router.get('/next/:input/:output', function (req, res, next) {
  var _req$params = req.params,
      input = _req$params.input,
      output = _req$params.output;
  res.send("".concat(input, " : ").concat(output));
});
var _default = router;
exports["default"] = _default;