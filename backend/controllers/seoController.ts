import Content from '../models/Content';
import {optimizeContent} from '../services/openAiServices'
import {cacheResult,getCachedResult} from '../services/cacheServices'


export const handleSEOAnalysis=async(text:string)=>{
try {
  const cachedResult=  await getCachedResult(text);
  if(cacheResult){
    return JSON.parse(cacheResult);
  }

 const result= await optimizeContent(text);

 await Content.create({text,analysisResult:result})

 await cacheResult(text,JSON.stringify(result));
 return result;

} catch (error) {
    throw new Error('SEO ANALYSIS FAILED'+ error.message)
}

}