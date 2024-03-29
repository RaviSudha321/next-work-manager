import mongoose from "mongoose"
//import { userModel } from "@/models/user";

export const connectDB = async () => {

    try{
        const connection = await mongoose.connect(process.env.MONGO_DB_URL, {
            dbName: 'work_manager',
        });
        // console.log('db connected');
        // console.log('connection', connection);

        // const user = new userModel({
        //     name: 'ravi',
        //     email: 'ravi@gmail.com',
        //     password: 'ravi1234',
        //     about: 'first user',
        // })

        // await user.save();
        // console.log('user is created');

    }
    catch(error){
        // console.log('failed to connect database');
        console.log(error);
    }

}