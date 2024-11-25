const axios = require('axios');
const cheerio = require('cheerio'); // Import Cheerio
const fs = require('fs');
const xlsx = require('xlsx'); // Import the xlsx package

const fetchData = async () => {
  try {
    // Fetch the webpage HTML
    const response = await axios.get(
      'https://www.ebay.com/sch/i.html?_from=R40&_trksid=p4432023.m570.l1313&_nkw=phone&_sacat=0'
    );

    if (response.status !== 200) {
      console.error('Error fetching the page:', response.status);
      return;
    }

    // Load the HTML data into Cheerio
    const $ = cheerio.load(response.data);

    // Extract specific details
    const products = [];
    $('.s-item').each((index, element) => {
      const productName = $(element).find('.s-item__title').text().trim() || 'N/A';
      const price = $(element).find('.s-item__price').text().trim() || 'N/A';
      const availability =
        $(element).find('.SECONDARY_INFO').text().includes('Out of Stock')
          ? 'Out of Stock'
          : 'In Stock';
      const rating = $(element).find('.x-star-rating').text().trim() || 'N/A';

      // Add product details to the products array
      products.push({
        Product_Name: productName,
        Price: price,
        Availability: availability,
        Rating: rating,
      });
    });

    // Log extracted data to the console
    console.log('Extracted Product Data:', products);

    // Save extracted data to a JSON file
    fs.writeFile('ecom-products.json', JSON.stringify(products, null, 2), (err) => {
      if (err) {
        console.error('Error writing data to file:', err);
        return;
      }
      console.log('Data saved to ecom-products.json');
    });

    // Convert the data to an Excel sheet
    const worksheet = xlsx.utils.json_to_sheet(products);
    const workbook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workbook, worksheet, 'Products');
    xlsx.writeFile(workbook, 'ecom-products.xlsx');

    console.log('Data saved to ecom-products.xlsx');
  } catch (error) {
    console.error('Error:', error.message);
  }
};

// Run the fetchData function
fetchData();
