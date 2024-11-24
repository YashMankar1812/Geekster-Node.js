


const axios = require('axios');
const cheerio = require('cheerio'); // Import Cheerio
const fs = require('fs');
const xlsx = require('xlsx'); // Import the xlsx package

const fetchData = async () => {
  try {
    // Fetch the webpage HTML
    const response = await axios.get(
      'https://www.timesjobs.com/candidate/job-search.html?searchType=Home_Search&from=submit&asKey=OFF&txtKeywords=&cboPresFuncArea=35'
    );

    if (response.status !== 200) {
      console.error('Error fetching the page:', response.status);
      return;
    }

    // Load the HTML data into Cheerio
    const $ = cheerio.load(response.data);

    // Extract specific details

    const jobs = [];
    $('.job-bx').each((index, element) => {
      const jobTitle = $(element).find('.heading-trun').text().trim();
      const companyName = $(element).find('.joblist-comp-name').text().trim();
      // const location = $(element).find('.locationwise h4 .srp-zindex').text().trim();
      // in location i am not getting proper location give another all approach 
      // const location = $(element).find('.locationwise h4.srp-zindex').text().trim().split(',')[0];  
      // Improved location extraction
      const location = $(element)
        .find('.srp-zindex.location-tru, .location') // General location classes
        .text()
        .trim()
        .replace(/\s+/g, ', ') || 'N/A';
      
      const jobType = $(element).find('.job-type').text().trim();
      const postedDate = $(element).find('.sim-posted').text().trim();
      const jobDescription = $(element).find('.job-description__').text().trim();

      // Add job details to the jobs array
      jobs.push({
        Job_Title: jobTitle,
        Company_Name: companyName,
        Location: location,
        Job_Type: "Full Time",
        Posted_Date: postedDate,
        Job_Description: jobDescription,
      });
    });

    // Log extracted data to the console
    console.log('Extracted Job Data:', jobs);

    // Save extracted data to a JSON file
    fs.writeFile('jobData.json', JSON.stringify(jobs, null, 2), (err) => {
      if (err) {
        console.error('Error writing data to file:', err);
        return;
      }
      console.log('Data saved to jobData.json');
    });

    // Convert the data to an Excel sheet
    const worksheet = xlsx.utils.json_to_sheet(jobs);
    const workbook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workbook, worksheet, 'Jobs');
    xlsx.writeFile(workbook, 'jobData.xlsx');

    console.log('Data saved to jobData.xlsx');
  } catch (error) {
    console.error('Error:', error);
  }
};

// Run the fetchData function
fetchData();






// const axios = require('axios');
// const cheerio = require('cheerio');  // Import Cheerio
// const fs = require('fs');

// const fetchData = async () => {
//   try {
//     // Fetch the webpage HTML
//     const response = await axios.get('https://www.timesjobs.com/candidate/job-search.html?searchType=Home_Search&from=submit&asKey=OFF&txtKeywords=&cboPresFuncArea=35');

//     if (response.status !== 200) {
//       console.error('Error fetching the page:', response.status);
//       return;
//     }

//     // Load the HTML data into Cheerio
//     const $ = cheerio.load(response.data);
//     // console.log(response.data);

//     // Extracting specific details
//     const jobTitle = $('.heading-trun').text().split(' ').join('');
//     const companyName = $('.joblist-comp-name').text().split(' ').join('');
//     const location = $('heading').text().split(' ').join('');
//     const jobType = $('.job-type').text().split(' ').join('');
//     const postedDate = $('.sim-posted').text().split(' ').join('');
//     const jobDescription = $('.job-description__').text().split(' ').join('');

//     // Log extracted data to console
//     console.log('Job Title:', jobTitle);
//     console.log('Company Name:', companyName);
//     console.log('Location:', location);
//     console.log('Job Type:', jobType);
//     console.log('Posted Date:', postedDate);
//     console.log('Job Description:', jobDescription);

//     // Optional: Save extracted   data  to a      file
//     const Data = {
//       jobTitle :jobTitle != "" ? jobTitle.split(/\n+/).filter(item => item.trim() !== "") : "",
//       companyName :companyName != "" ? companyName.split(/\n+/).filter(item => item.trim() !== "") : "",
//       location  :location != "" ? location.split(/\n+/).filter(item => item.trim() !== "") : "",
//       jobType : jobType != "" ? jobType.split(/\n+/).filter(item => item.trim() !== "") : "",
//       postedDate  :postedDate != "" ? postedDate.split(/\n+/).filter(item => item.trim() !== "") : "",
//       jobDescription  :jobDescription != "" ? jobDescription.split(/\n+/).filter(item => item.trim() !== "") : ""
//     };
//     fs.writeFile('jobData.json', JSON.stringify(Data), (err) =>{
//       if (err) {
//         console.error('Error writing data to file:', err);
//         return;
//       }
//       console.log('Data saved to jobData.json');
//     }); 

//   } catch (error) {
//     console.error('Error:', error);
//   }
// };


// fetchData();




























//   For understanding purpose dummy 


// const axios = require("axios");
// const fs = require("node:fs");

// const fetchData = async () => {
//   try {
//     const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
//     console.log(response.data);

//     // Convert the data to a JSON string
//     const dataString = JSON.stringify(response.data, null, 2);

//     // Write the stringified data to a file
//     fs.writeFile("amazondata.txt", dataString, (err) => {
//       if (err) {
//         console.error('Error writing data to file:', err);
//         return;
//       }
//       console.log('Data saved to file successfully');
//     });
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

// fetchData();



























// let data = [
//   {id : 1 , tille : "asdf"}
// ]


// app.get("/" , (req, res) => {
//   // const randomeNumber = Math.E.toExponential.apply.apply.apply
//   return res.status(200).json(data[randmnumber])
// })