import Client from "@/models/Client";
import { NextResponse } from "next/server";

export async function POST(req){
    try{
   const data = await req.json();
    const clientData=new Client(data)
    await clientData.save()
    return NextResponse.json(clientData)
    }catch(err){
        return NextResponse.json({message:err.message})
    }
   
}