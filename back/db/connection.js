import mongoose from "mongoose"

const connectiontomongo = async ()=>{
    try{
        await mongoose.connect("mongodb+srv://niketankumar12345:ecXw6CP6gDNhirFp@chattingcluster.sn4qqgf.mongodb.net/")
        console.log("Connected to mongoose")
    }catch(err){
        console.log("Naah bhai na huya")
    }
}

export default connectiontomongo;