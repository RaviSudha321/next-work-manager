import { connectDB } from "@/helper/db";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";


//get task by ID API
export async function GET(request, {params}){
    
    const {taskId} = params;

    try {

        const tasks = await Task.findById(taskId);
        return NextResponse.json({
            tasks: tasks,
            message: 'tasks showing',
            status: true,
        });

    } catch (error) {
        return NextResponse.json({
            message: 'tasks not fetch',
            status: false,
        });
    }
}


//delete task by ID API
export async function DELETE(request, {params}){

}


//update task by ID API
export async function PUT(request, {parms}){

}