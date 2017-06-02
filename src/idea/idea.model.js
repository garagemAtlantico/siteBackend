let allIdeas = [];

class IdeaModel {
  static findAll() {
    return allIdeas;
  }
  static add(idea) {
    allIdeas.push(idea);
  }
  static removeAll() {
    allIdeas = [];
  }
} 

module.exports = IdeaModel;