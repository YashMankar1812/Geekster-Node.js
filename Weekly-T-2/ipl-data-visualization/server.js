const path = require('path');
const dataPath = path.join(__dirname, 'data', 'ipl_stats.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));


const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static('public'));

// API endpoint to fetch IPL stats
app.get('/api/stats', (req, res) => {
    const data = JSON.parse(fs.readFileSync('./data/ipl_stats.json', 'utf8'));
  res.json(JSON.parse(data));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
