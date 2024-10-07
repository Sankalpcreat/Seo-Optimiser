import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import connectMongo from './database/connectMongo';
import connectRedis from './database/connectRedis';
import { handleSEOAnalysis } from './controllers/seoController'; 

const app = express();


app.use(express.json());

app.post('/api/seoAnalysis', async (req, res) => {
  const { text } = req.body;

  try {
    const result = await handleSEOAnalysis(text);  
    res.status(200).json(result);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});


(async () => {
  try {
    await connectMongo(); 
    await connectRedis();  

    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Error starting the server:', error);
  }
})();
