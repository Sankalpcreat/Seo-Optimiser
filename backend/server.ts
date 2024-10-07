import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import connectMongo from './database/connectMongo';
import connectRedis from './database/connectRedis';
import { handleSEOAnalysis } from './controllers/seoController'; // Import the function

const app = express();

// Middleware to parse JSON
app.use(express.json());

app.post('/api/seoAnalysis', async (req, res) => {
  const { text } = req.body;

  try {
    const result = await handleSEOAnalysis(text);  // Use the imported function
    res.status(200).json(result);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Connect to MongoDB and Redis, then start the server
(async () => {
  try {
    await connectMongo();  // Connect to MongoDB
    await connectRedis();  // Ensure Redis is connected before using it

    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Error starting the server:', error);
  }
})();
