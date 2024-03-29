import { connectDB } from "@/helper/db";
import { userModel } from "@/models/user";
import { NextResponse } from "next/server";
import { useMemo } from "react";

connectDB();

export async function GET(request, {params}){

    const {userId} = params;

    try{
        const user = await userModel.findById(userId).select("-password");

        return NextResponse.json(user)
    }
    catch(error){
        console.log(error);
        return NextResponse.json({
            message: 'user not fetched',
            status: false,
        })
    }

}

export async function DELETE(request, {params}){

    const {userId} = params;
    
    try{
        await userModel.deleteOne({
            _id: userId,
        });
        return NextResponse.json({
            message: 'user deleted',
            status: true,
        });
    }
    catch(error){
        console.log(error);
        return NextResponse.json({
            message: 'user not deleted',
            status: false,
        });
    }
    
}


export async function PUT(request, {params}){

    const {userId} = params;

    const {name, password, about} = await request.json();
    
    const user = await userModel.findById(userId);

    user.name = name;
    user.password = password;
    user.about = about;

    try {
        const updatedUser = await user.save();

        return NextResponse.json(updatedUser);
    }
    catch(error){
        return NextResponse.json({
            message: 'user not updated',
            status: false,
            error: error,
        })
    }
    
}