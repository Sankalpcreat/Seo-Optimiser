import { createClient } from 'redis';

const redisClient = createClient({ url: process.env.REDIS_URL });

redisClient.on('error', (err) => console.error('Redis Error', err));

export const cacheResult = async (key: string, value: string, expiry = 3600) => {
  await redisClient.set(key, value, 'EX', expiry); 
};

export const getCachedResult = async (key: string) => {
  return await redisClient.get(key);
};
