let chai = require('chai');
let chaiHttp = require('chai-http');
chai.should();
chai.use(chaiHttp);
let server = require(`${process.cwd()}/src/server`);

let request = function () {
  return chai.request(server);
}
var IdeaModel = require(`${process.cwd()}/src/idea/idea.model`)();

describe('(Router) Idea', () => {
  describe('when there are 2 ideas', () => {
    beforeEach(() => {
      IdeaModel.create({});
      IdeaModel.create({});
    });

    afterEach(() => {
      IdeaModel.destroy({ truncate: true });
    });

    describe('when trying to retrieve them', () => {
      it('should return 200 OK', (done) => {
        request()
          .get('/ideas/')
          .end((err, res) => {
            let OK = 200;
            res.should.have.status(OK);
            done();
          });
      });

      it('should return an array with 2 ideas', (done) => {
        request()
          .get('/ideas/')
          .end((err, res) => {
            let numberOfIdeas = 2;
            res.body.should.be.a('array');
            res.body.length.should.be.eql(numberOfIdeas);
            done();
          });
      });
    });

    describe('when a new idea is added', () => {
      let currentRequest = null;
      let currentDate = new Date();
      beforeEach(() => {
        currentRequest = request()
          .post('/ideas')
          .send({ name: 'idea 1', description: 'my idea description', creationDate: currentDate })

      });

      it('should return 200 OK', () => {
        currentRequest.end((err, res) => {
          let OK = 200;
          res.should.have.status(OK);
        });
      });

      it('should return the idea', () => {
        currentRequest.end((err, res) => {
          res.body.should.be.a('object');
          res.body.name.should.be.equal('idea 1');
          res.body.description.should.be.equal('my idea description');
        });
      });

      describe('when trying to retrieve them', () => {
        it('should return an array with 3 ideas', (done) => {
          request()
            .get('/ideas/')
            .end((err, res) => {
              let numberOfIdeas = 3;
              res.body.should.be.a('array');
              res.body.length.should.be.eql(numberOfIdeas);
              done();
            });
        });
      });
    });
  });
});
