import mongoose from 'mongoose'
const dbConnect = async()=>{
    try{
        const connected = mongoose.connect('mongodb+srv://rswaref:RAbiObcxTB8YNGpm@porto-api.2yrwn42.mongodb.net/?retryWrites=true&w=majority&appName=porto-api');
         console.log(`Mongo Db connected ${(await connected ).connection.host}`);
 
    }
    catch(error){
       console.log(`Error : ${error.message}`)
        process.exit(1);
    }
}
export default dbConnect;

