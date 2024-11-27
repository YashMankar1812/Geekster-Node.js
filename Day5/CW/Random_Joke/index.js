const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 7070;

// Define the endpoint to fetch random jokes
app.get('/v1/random-joke', (req, res) => {
  try {
    // Read jokes.json file
    const jokesPath = path.join(__dirname, 'jokes.json');
    const jokesData = JSON.parse(fs.readFileSync(jokesPath, 'utf8'));

    // Get a random joke
    const randomIndex = Math.floor(Math.random() * jokesData.length);
    const randomJoke = jokesData[randomIndex];

    console.log('Joke fetched:', randomJoke);

    // Send the joke to the client
    res.json({
      success: true,
      message: 'Joke Fectch successfully from jokes.json file ',
      data: randomJoke,
    });
  } catch (error) {
    console.error('Error reading jokes:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch joke',
      error: error.message,
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});






// If we Provide Api Key Then we should provide header inside header we should provide key :  value pair 


// Using Api Key 

// const express = require('express'); 
// const axios = require('axios');    

// const app = express(); 
// const port = process.env.PORT || 7070; 

// // Define the endpoint to fetch random jokes
// app.get('/v1/random-joke', async (req, res) => {
//   try {
//     const response = await axios.get('https://api.api-ninjas.com/v1/jokes', {
//       headers: {
//         'x-api-key': '4cJxAZ1/RlzNjFuX/tUZDA==erxEIRdc6xW06R5a', 
//       },
//     });

//     const data = response.data; 
//     console.log('Joke fetched:', data); 

//     // Send the response to the client
//     res.json({
//       success: true,
//       message: 'Joke Api fetched successfully',
//       data, // Pasees data 
//     });
//   } catch (error) {
//     console.error('Error fetching joke:', error.message); // Log any errors
//     res.status(500).json({
//       success: false,
//       message: 'Failed to fetch joke',
//       error: error.message,
//     });
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });



































