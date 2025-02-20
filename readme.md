# Dummy backend

This is a dummy backend for mock up purposes. 

## Steps to create a new mockup endpoint
### Step 1: Create a Controller Function

1. Navigate to the `controllers` directory.
2. Open or create a new file for your controller, for example, `mockController.js`.
3. Define the controller function that will handle the endpoint logic and return mock data.

```js
exports.mockEndpoint = (req, res) => {
  res.json({ message: 'success', data: { key: 'value' } });
};
```

### Step 2: Define the Route
1. Navigate to the routes directory.
2. Open or create a new file for your routes, for example, mockRoutes.js.
3. Define the route that will use the controller function.

```js
const express = require('express');
const router = express.Router();
const mockController = require('../controllers/mockController');

router.get('/mock', mockController.mockEndpoint);

module.exports = router;
```

### Step 3: Register the Route in the Server
1. Open the server.js file.
2. Import the new route and register it with the Express application.

```js
...
const dummyRoutes = require('./routes/dummyRoutes');
const mockRoutes = require('./routes/mockRoutes'); // Import the new route
...
```
### Step 4: Test the Endpoint
1. Start the server by running the following command:
```
node server.js
```
2. Open your browser or use a tool like Postman to test the new endpoint:
```
GET http://localhost:5001/api/mock
```
3. You should receive a response with the mock data:
```
{
  "message": "success",
  "data": {
    "key": "value"
  }
}
```

# CORS Configuration
To allow requests from your frontend, add the frontend URL to the .env file:

1. Open or create the .env file in the root directory of your project.
2. Add the following line, replacing http://localhost:3000 with your frontend URL:

```
FRONTEND_URL=http://localhost:3000
```

# Docker cmds
## Build image
docker build --network=host --no-cache -t dummy_backend .
## Run service
docker run -d -p 5001:5001 dummy_backend
