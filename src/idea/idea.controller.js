
let IdeaModel = require('./idea.model');

exports.allIdeas = function (req, res) {
  res.send(IdeaModel.findAll());
}

exports.addIdea = (req, res) => {
  res.send(IdeaModel.add(req.body));
}