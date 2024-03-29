import { connectDB } from "@/helper/db";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

connectDB();
//get tasks API
export async function GET(){

    let tasks = [];

    try {

        tasks = await Task.find();

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


// create task API
export async function POST(request){

    const {title, content, userId} = await request.json();

    try {
        
        const task = new Task({
            title,
            content,
            userId,
        });

        const addedTask = await task.save();
        return NextResponse.json(addedTask, {
            status: 201,
            message: 'task created',
        })

    } catch (error) {
        return NextResponse.json({
            message: 'failed to create task',
            status: false,
        });
    }

}
