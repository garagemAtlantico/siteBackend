var express = require('express');
var router = express.Router();

var controller = require('./idea.controller');

router.route('/')
  .get(controller.allIdeas)
  .post(controller.addIdea)

module.exports = router;
