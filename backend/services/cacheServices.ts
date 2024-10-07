import { createClient } from 'redis';


const redisClient = createClient({ url: process.env.REDIS_URL });

redisClient.on('error', (err) => console.error('Redis Error:', err));

export const cacheResult = async (key: string, value: string, expiry = 3600) => {
  try {
    await redisClient.set(key, value, 'EX', expiry);  
  } catch (error) {
    console.error('Error caching result in Redis:', error);
  }
};

export const getCachedResult = async (key: string) => {
  try {
    return await redisClient.get(key);  // Retrieve the cached value
  } catch (error) {
    console.error('Error retrieving cached result from Redis:', error);
    return null;  
  }
};
