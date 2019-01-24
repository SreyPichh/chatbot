# Chatbot overall
This project is using express js which is a node js framework. In this project we will use dialogflow api service powered by google machine learning. We can use it to build chatbot or conversational IVR that enable natural and rich interactions between users and business. Dialogflow provides our own custome webhook that can hosted in the cloud or on premises.

# Express JS setting up 
```npm install express-generator -g``` 

Then:

```express --view=ejs chatbot```

Then install dependencies:

```cd chatbot```

```npm install```

To run in local:

1. Create `.env` file inside `root` directory and add:

```
# NODE_ENV : production, dev or test
NODE_ENV = 

# App secret key and generates your own secret key of 48 chars
APP_SECRET = 

# Port for app to run
PORT = 3000

# Replace your dialogflow project
DIALOGFLOW_PROJECTID = 

```
2. Run on local:

on Mac or Lunix use this command:

```DEBUG=chatbot:* npm start```

on Window use this command:

```set DEBUG=chatbot:* & npm start```


# Create a service account
Before we work with dialogflow, we have to set up service account key:
 - from the google cloud service account page, and select the project
 - select the service account from the dropdown, choose JSON and click create, and this will download the JSON key to local computer (Save it securely)
 - set the environment variable GOOGLE_APPLICATION_CREDENTIALS to the file path of the JSON file that contain service account key
 
 Open the terminal and execute the command:
 Linux or macOS:
 
 `export GOOGLE_APPLICATION_CREDENTIALS="[PATH]"`
 

 ** *Note: on `macOS` to set environment variable in `.bash_profile`                        
 - open the `.bash_profile` in any text editor                                          
                                                                                        
 ```touch ~/.bash_profile; open ~/.bash_profile```                                      
 - Paste the path of the environment variable in `.bash_file` in the text editor and save 

 
 For example: 
 
 `export GOOGLE_APPLICATION_CREDENTIALS="/home/user/Downloads/service-account-file.json"`
 
 Windows:
 
 `set GOOGLE_APPLICATION_CREDENTIALS=[PATH]`
 
 # Understanding of Intents and Entities in Dialogflow
 **Intent** represents a mapping between what a user says and also what action should be taken by the software.
 
 Intent Interfaces:
  - Training Phrases
  - Action
  - Response 
  - Contexts 
  
 **Entities** are powerful tools used for extracting paramater values from natural language inputs. Any important data you want to get from a user's request, will have coresponding entity.
 
 # Contruct the Customer Service Agent
 
 
