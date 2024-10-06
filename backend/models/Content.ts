import {Schema ,model,models} from 'mongoose'

const contentSchema=new Schema({
    text:{type:String,required:true},
    analysisResult:{type:Object,required:true},

},{timestamps:true})

const Content=models.Content || model('Content',contentSchema)

export default Content