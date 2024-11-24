const puppeteer = require('puppeteer');
const fs = require('fs');

const scrapeIPLStats = async () => {
  const url = 'https://www.iplt20.com/stats/';
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const categories = [
    { name: 'orange_cap', selector: 'Most Runs' },
    { name: 'most_4s', selector: 'Most Fours' },
    { name: 'most_6s', selector: 'Most Sixes' },
    { name: 'most_centuries', selector: 'Most Centuries' },
    { name: 'most_fifties', selector: 'Most Fifties' },
  ];

  const results = {};

  for (const category of categories) {
    // Navigate to the category
    await page.click(`a:contains('${category.selector}')`);
    await page.waitForSelector('table');
    
    const data = await page.evaluate(() => {
      const rows = Array.from(document.querySelectorAll('table tbody tr'));
      return rows.slice(0, 10).map((row) => {
        const cols = row.querySelectorAll('td');
        return {
          player: cols[1]?.innerText.trim(),
          runs: cols[2]?.innerText.trim(),
        };
      });
    });

    results[category.name] = data;
  }

  fs.writeFileSync('./data/ipl_stats.json', JSON.stringify(results, null, 2));
  await browser.close();
};

scrapeIPLStats().then(() => console.log('Data scraping complete.'));
