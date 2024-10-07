import { createClient } from 'redis';

const redisClient = createClient({ url: process.env.REDIS_URL });

redisClient.on('error', (err) => console.error('Redis Error:', err));

// Function to cache a result in Redis with an expiration time
export const cacheResult = async (key: string, value: string, expiry = 3600) => {
  try {
    // Set the key-value pair with an expiration time (in seconds)
    await redisClient.set(key, value, {
      EX: expiry, // Expiration in seconds
    });
    console.log(`Cached result for key: ${key}`);
  } catch (error) {
    console.error('Error caching result in Redis:', error);
  }
};

// Function to retrieve a cached result from Redis
export const getCachedResult = async (key: string) => {
  try {
    const cachedValue = await redisClient.get(key);
    if (cachedValue) {
      console.log(`Retrieved cached result for key: ${key}`);
    }
    return cachedValue; // Return the cached value, or null if not found
  } catch (error) {
    console.error('Error retrieving cached result from Redis:', error);
    return null;
  }
};
