var path = require('path');
var dialogflowController = require('../controllers/dialogflowController');

module.exports = function (router, csrfProtection) {
  router.get('/', csrfProtection, function (req, res, next) {
    res.status(200);
    res.render("index",
      {
        title: 'Chatbot',
        csrfToken: req.csrfToken(),
      }
    );
  });
  router.post('/ask', csrfProtection, dialogflowController.detect_intent);
  router.post('/test', function(req, res){
    res.send("hello world");
  })
}
