import { NextResponse } from "next/server"
import { connectDB } from "@/helper/db";
import { userModel } from "@/models/user";

connectDB();

export async function GET(request){

    let users = [];

    try{
        users = await userModel.find().select("-password");
    }
    catch(error){
        console.log(error)
        return NextResponse.json({
            message: 'failed to get users',
            status: false,
        });
    }

    return NextResponse.json(users);

}

export async function POST(request){

    //fetch user data from request and desctructute it  
    const {name, email, password, about} = await request.json();
    
   // create a new user object with userModel
    const user = new userModel({
        name: name,
        email: email,
        password: password,
        about: about,
    });

    try{

        const createdUser = await user.save();

        const response = NextResponse.json(createdUser, {
            message: 'user created',
            status: 201,
        });

        return response;

    } catch(error){
        console.log(error);
        return NextResponse.json({
            message: 'failed to create user',
            status: false,
        });

    }

}


