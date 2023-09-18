# Project: FEND Capstone - Travel App

The FEND Capstone project is all about building a travel app that allows users to plan and obtain information about their vacation.

## Setting up the API

### Step 1: Signup for an API key

- Create an account with [Geonames](https://www.geonames.org/export/web-services.html)
- Create an account with [Weatherbit](https://www.weatherbit.io/account/create)
- Create an account with [Pixabay](https://pixabay.com/api/docs/)


### Step 2: Environment Variables
- Fill the .env file with your API keys like this:
```
GEO_NAMES_KEY==**************************
PIXABAY_KEY==**************************
WEATHERBIT_KEY==**************************

```



## Building and start the project

### Step 1: Install dependencies

```bash
npm install
```

### Step 2: Build the project
```bash
// To build the project with production config
npm run build-prod	

// To build the project with dev config
npm run build-dev
```


### Step 3: Start the project
```bash
// To start the project, using the below command
npm start

// Or using node-mon for dev environment with below command
npm run dev

// Run the below command to run test
npm run test
```

Open browser at http://localhost:8080/

API end-point: http://localhost:8080/
