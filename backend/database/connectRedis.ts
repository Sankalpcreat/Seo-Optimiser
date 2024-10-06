import {createClient} from 'redis'

const connectRedis=async()=>{
    const client=createClient({url:process.env.REDIS_URL});

    client.on('error',(err)=>console.log('Redis Client Error',err));

    await client.connect();
    console.log('Connected to Redis')

    return client
}
export default connectRedis;
