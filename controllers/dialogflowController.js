var Dialogflow = require('../models/Dialogflow');

var detect_intent = function (req, res, next) {
  console.log('test route');
  if (req.body.query && req.body.query != '') {
    console.log("If is true.....!");
    var dialogflow = new Dialogflow(req.body.query);
    var dialogflowPromise = dialogflow.send();
    dialogflowPromise.then(function (result) {
      res.status(200);
      res.json({result: result});
    }).catch(error => {
      res.status(500);
      res.json({error: error});
    });
  } else {
    console.log("else here in controller");
    res.status(417);
    res.json({error: "request expectation fail, expectation given in the request's expect header could not met."});
  }
}

module.exports = {
  detect_intent : detect_intent,
}
