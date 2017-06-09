
let IdeaModel = require('./idea.model')();

exports.allIdeas = function (req, res) {
  IdeaModel.findAll().then((ideas) => {
    res.send(ideas);
  });
}

exports.addIdea = (req, res) => {
  IdeaModel.create(req.body).then((idea) => {
    res.send(idea);
  });
}