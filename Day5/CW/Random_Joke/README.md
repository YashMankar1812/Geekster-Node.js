<!-- # Random Jokes API

This is a simple API that returns a random joke.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/random-jokes-api.git
    ```
2. Navigate into the project folder:
    ```bash
    cd random-jokes-api
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

## Running the Server

1. Start the server:
    ```bash
    node index.js
    ```
2. The API will be available at `http://localhost:3000`.

## API Endpoints

- **GET /api/jokes/random**: Returns a random joke.

## Sample Response

```json
{
  "type": "twopart",
  "category": "Programming",
  "setup": "Why do programmers prefer dark mode?",
  "delivery": "Because the light attracts bugs."
} -->
















# Random Joke API Server

This project is a simple Express.js server that fetches random jokes from the [API Ninjas Jokes API](https://api-ninjas.com/api/jokes) and serves them through an endpoint.

## Features
- Fetches random jokes from the API Ninjas Jokes API.
- Provides a `/v1/random-joke` endpoint to retrieve jokes.
- Includes error handling for failed requests.

## Prerequisites
To set up and run this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) for dependency management

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install Dependencies**
   Run the following command to install required packages:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the project root directory and add the following content:
   ```env
   API_KEY=4cJxAZ1/RlzNjFuX/tUZDA==erxEIRdc6xW06R5a
   ```
   Replace `API_KEY` with your actual API Ninjas key.

4. **Start the Server**
   Use the following command to start the server:
   ```bash
   node server.js
   ```

5. **Access the Endpoint**
   Open your browser or use a tool like Postman to send a GET request to:
   ```
   http://localhost:7070/v1/random-joke
   ```

## Project Structure
```
.
├── server.js        # Main server file
├── package.json     # Project metadata and dependencies
├── .env             # Environment variables
├── node_modules/    # Installed dependencies
└── README.md        # Project documentation
```

## Example Response
Successful response:
```json
{
  "success": true,
  "message": "Joke fetched successfully",
  "data": [
    {
      "joke": "Why don't skeletons fight each other? They don't have the guts."
    }
  ]
}
```

Error response:
```json
{
  "success": false,
  "message": "Failed to fetch joke",
  "error": "Request failed with status code 401"
}
```

## Dependencies
- `express`: Web framework for Node.js
- `axios`: HTTP client for making API requests
- `dotenv`: Loads environment variables from `.env` file

## Notes
- Ensure your API key is valid and has sufficient access.
- If you encounter issues, check the API Ninjas documentation for troubleshooting.

## License
This project is licensed under the MIT License. Feel free to use and modify it as needed.

---

Happy coding!
