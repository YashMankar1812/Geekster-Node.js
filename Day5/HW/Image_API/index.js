// If we Provide Api Key Then we should provide header inside header we should provide key :  value pair 






// Using Api Key 
const express = require('express');
const axios = require('axios');

const app = express();
const port = 10000;

const accessKey = '9Xs8n83UdnkGM6oupPoWMfpKYZqpAS6vJAuOfwCfGOo'; 
let count = Number(Math.floor(Math.random() * 10) + 1);

// Define the endpoint to fetch random jokes
app.get('/v1/random-images', async (req, res) => {
  try {
    const response = await axios.get(`https://api.unsplash.com/photos/random/?client_id=${accessKey}&count=${count}`);

    const data = response.data;
    // console.log(data);
    // console.log('Unsplash Image Api  fetched:', data);

    // Send the response to the client
   return res.json({
      success: true,
      message: 'Unsplash Image Api fetched successfully',
      url : data[0].urls.regular
    });
  } catch (error) {
    console.error('Error fetching Image:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch image',
      error: error.message,
    });
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


