// 'use strict';
// const { Storage } = require('@google-cloud/storage');
// const { Compute } = require('google-auth-library');
// var dotenv = require('dotenv');

// var cfg = {};

// const storage = new Storage({
// 	projectId: 'chatbot-228802',
// 	keyFilename: 'chatbot-69605487ad06.json',
	
// });

// storage
// 	.getBuckets()
// 	.then((results) => {
// 		console.log("****************************");
// 		console.log(results);
// 		const buckets = results[0];
// 		console.log('Buckets: ');
// 		buckets.forEach((bucket) => {
// 			console.log(bucket.name);
// 		});
// 	})
// 	.catch((err) => {
// 		console.error('Error:' , err);
// 	});

// async function main() {
// 	const client = new Compute({
// 		serviceAccountEmail: 'chatbot-228802@appspot.gserviceaccount.com'
// 	});
// 	const projectId = 'chatbot-228802';
// 	const url = `https://www.googleapis.com/dns/v1/projects/${projectId}`;
// 	const res = await client.request({url});
// }
// main().catch(console.error);

// if (process.env.NODE_ENV == 'production' && process.env.NODE_ENV !== 'test') {
//   dotenv.config({path: '.env.test'});
// } else {
//   dotenv.config({path: '.env'});
// }

// // HTTP Port to run our web application
// cfg.port = process.env.PORT || 3000;
// cfg.secret = process.env.APP_SECRET || 'secret';
// cfg.dialogflow_projectId = process.env.DIALOGFLOW_PROJECTID;

// var requiredConfig = [cfg.dialogflow_projectId];
// var isConfigured = requiredConfig.every(function(configValue) {
//   return configValue || false;
// });

// if (!isConfigured) {
//   var errorMessage =
//     'Config environment variable error. Please make sure required env variable is set properly.';

//   throw new Error(errorMessage);
// }

// // Export configuration object
// module.exports = cfg;


var dotenv = require('dotenv');
var cfg = {};

if (process.env.NODE_ENV == 'production' && process.env.NODE_ENV !== 'test') {
  dotenv.config({path: '.env'});
} else {
  dotenv.config({path: '.env.test', silent: true});
}

// HTTP Port to run our web application
cfg.port = process.env.PORT || 3000;
cfg.secret = process.env.APP_SECRET || 'secret';
cfg.dialogflow_projectId = process.env.DIALOGFLOW_PROJECTID;

var requiredConfig = [cfg.dialogflow_projectId];
var isConfigured = requiredConfig.every(function(configValue) {
  return configValue || false;
});

if (!isConfigured) {
  var errorMessage =
    'Config environment variable error. Please make sure required env variable is set properly.';

  throw new Error(errorMessage);
}

// Export configuration object
module.exports = cfg;

