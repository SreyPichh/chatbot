'use strict';
const { Storage } = require('@google-cloud/storage');
const { OAuth2Client } = require('google-auth-library');
const http = require('url');
var dotenv = require('dotenv');
var fs = require('fs');
const os = require('os');
var cfg = {};


const keys = JSON.parse(fs.readFileSync('client_secret.json'));
console.log(keys);
// const storage = new Storage({
// 	projectId: 'chatbot-228802',
// 	credentials: JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS)
// });
// console.log("-------------------------------------------------------------");
// console.log(storage);

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
// 		console.error('***The Error is:' , err);
// 	});

// async function main() {
// 	console.log("||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||");
// 	const client = new OAuth2Client({
// 		serviceAccountEmail: 'chatbot@chatbot-228802.iam.gserviceaccount.com'
// 	});
// 	// const client = await auth.getClient({
// 	// 	scopes: 'https://www.googleapis.com/auth/cloud-platform'
// 	// });
// 	console.log(client);
// 	const projectId = 'chatbot-228802';
// 	console.log(projectId);
// 	const url = `https://www.googleapis.com/dns/v1/projects/${projectId}`;
// 	console.log(url);
// 	const res = await client.request({ url });
// 	console.log(res.data);
// 	console.log("111111111111111111111");
	
// }
// main().catch(console.error);

async function main() {
	console.log("||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||");
	const oAuth2Client = await getAuthenticatedClient();
	console.log("????????????????????????????????????????????????????????????????????????");
	const url = 'https://people.googleapis.com/v1/people/me?personFields=names';
	const res = await oAuth2Client.request({ url });
	console.log(url);
	console.log(res.data);
	const tokenInfo = await OAuth2Client.getTokenInfo(
		oAuth2Client.credentials.access_token
		);
	console.log(tokenInfo);
}
main().catch(console.err);

function getAuthenticatedClient(argument) {

	return new Promise((resolve, reject) => {
		console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
		const oAuth2Client = new OAuth2Client(
			keys.web.client_id,
			keys.web.client_secret,
			keys.web.redirect_uri[0]
			);
		console.log(oAuth2Client);
		const authorizeUrl = oAuth2Client.generateAuthUrl({
			access_type: 'offline',
			scope: 'https://www.googleapis.com/auth/userinfo.profile',
		});

	});
}


if (process.env.NODE_ENV == 'production' && process.env.NODE_ENV !== 'test') {
  dotenv.config({path: '.env.test'});
} else {
  dotenv.config({path: '.env'});
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


// var dotenv = require('dotenv');
// var cfg = {};

// if (process.env.NODE_ENV == 'production' && process.env.NODE_ENV !== 'test') {
//   dotenv.config({path: '.env'});
// } else {
//   dotenv.config({path: '.env.test', silent: true});
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

