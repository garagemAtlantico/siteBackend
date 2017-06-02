
let IdeaModel = require('./idea.model');

exports.allIdeas = function (req, res) {
  res.send(IdeaModel.findAll());
}

exports.addIdea = (req, res) => {
  IdeaModel.add(req.body);
  res.send({result: 'Idea added'});  
}