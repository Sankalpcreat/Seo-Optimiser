import { createClient } from 'redis';

const redisClient = createClient({ url: process.env.REDIS_URL });

redisClient.on('error', (err) => console.error('Redis Error:', err));

export const cacheResult = async (key: string, value: string, expiry = 3600): Promise<void> => {
  try {
    await redisClient.set(key, value, { EX: expiry });  // Expiry in seconds
    console.log(`Cached result for key: ${key}`);
  } catch (error) {
    console.error('Error caching result in Redis:', error);
  }
};

export const getCachedResult = async (key: string): Promise<string | null> => {
  try {
    const cachedValue = await redisClient.get(key);
    if (cachedValue) {
      console.log(`Retrieved cached result for key: ${key}`);
    }
    return cachedValue;  // Return null if no cache found
  } catch (error) {
    console.error('Error retrieving cached result from Redis:', error);
    return null;
  }
};
