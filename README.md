# Healthbot with Watson Assistant and Discovery - OpenWhisk



This application shows the capabilities of Watson Assistant and Discovery services to work together to find answers on a given query. In this sample app, the user is chatting with a virtual helper, giving it commands in German such as "Wie geht es dir?" or "Mir geht es nicht gut". If the user makes a request and Watson Assistant is not confident in its answer (e.g. "Ich habe Fieber"), Discovery will search the medicine manual and return the most relevant results, if relevant materials exist.

This demo have an OpenWhisk back-end and React front-end with Bootstrap. OpenWhisk is IBM's "serverless" offering, allowing users to upload functions to the cloud, call them via REST API, and pay only by the millisecond of usage.


## How it Works

![Flow diagram](README_pictures/Flow_diagram.png?raw=true)

Under the hood, there are two components to this app:
* One is the front-end, which is simply static assets (HTML, CSS, and React), it uses CSS with Sass for cleaner, more maintainable source code.
* The other is the OpenWhisk actions:
  * When the user inputs text, the UI sends the current context and input to the OpenWhisk sequence. These are processed by the Watson Assistant service and returned, with an output and new context. The results are sent to the next action.
  * The Discovery action checks for a flag from the Watson Assistant output, and if it is present takes the original input and queries the manual with it. If there is no flag, the Watson Assistant results pass through the function unchanged. The Sequence returns the output and updated context back to the UI.


## Run Locally

### Getting Started
 If you don't already have an IBM Cloud account, you can sign up [here](https://console.bluemix.net/registration/?cm_mmc=GitHubReadMe)
> Make sure you have at least 2 services available in your IBM Cloud account.

2. Clone (or fork) this repository, and go to the new directory

3. Install [Node.js](https://nodejs.org) (Versions >= 6).

4. In the root directory of your repository, install the dependencies.
```bash
npm install
```

### Setting up Watson Services


There is a credentials.json file in which the accesses for the Watson services are noted. For security reasons, you will receive the file separately. The file is stored in .gitignore.

### Train Watson Services
Run following commands to train Watson Assistant and Discovery services:
``` bash
  npm run train

### Setting up the OpenWhisk Back-end
1. Install the Openwhisk [Command Line Interface](https://console.bluemix.net/openwhisk/learn/cli).

2. Download and install the [IBM Cloud CLI](https://console.bluemix.net/docs/cli/index.html#overview).

3. Login by running the following:


ibmcloud login
ibmcloud target --cf
```

4. Install [jq](https://stedolan.github.io/jq/download/) as a dependency.

5. Run the provided shell script `create-openwhisk-actions.sh` to create your OpenWhisk actions & sequence. The syntax to do so may vary by system, but for example:


### IMPORTANT

There is already a .env file stored with the important keys. You will also receive this separately. 

Additionally the accesses for the `Firebase console` are stored there. The Firebase is important for the login.

1. Insert the .env file 

2. Run `create-openwhisk-actions.sh`


```bash
   sh create-openwhisk-actions.sh
```


### Setting up the React Front-end
Create an optimized build of your app. During this stage, your environment variable will be inserted into App.js for use by your components.
```bash
npm run build
```

### Running the App
All that's left is to serve your static files locally. You should see the app running in a new tab!
```bash
npm start
```

Example commands that can be executed by the Watson Assistant service are:
```
Wie geht es dir?
Mir geht es nicht gut 
```
In addition to conversational commands, you can also ask questions that you would expect to have answered in your manual. For example:
```
Ich habe Bauchschschmerzen 
Ich habe Fieber
```

### Deploy the App 


Login in `Ibmcloud`

```bash
   ibmcloud api https://api.eu-gb.bluemix.net
   
   Ibmcloud login (Ibmcloud logout)
   
   ibmcloud target -o "adesso-mobile" -s "UX"
```

App push on IBM Server

```bash
   ibmcloud app push ams-chatbot
```

