module.exports = function (app) {

  // Route HTTP calls to /stories to the story router
  app.use('/ideas', require('./idea/idea.routes'))

}
