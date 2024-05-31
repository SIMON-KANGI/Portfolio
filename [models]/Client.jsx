import mongoose, {Schema} from "mongoose"

mongoose.connect(process.env.MONGODB_URI)
mongoose.Promise=global.Promise

const clientSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

const Client=mongoose.model("Client",clientSchema)

export default Client