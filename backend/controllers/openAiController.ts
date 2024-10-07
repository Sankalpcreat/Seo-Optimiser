import {optimizeContent} from '../services/openAiServices'


export const handleOpenAIOptimization=async(text:string)=>{
    try {
        const result=await optimizeContent(text);
        return result;
    } catch (error) {
        throw new Error('Open ai optimization failed'+error.message)
    }
}