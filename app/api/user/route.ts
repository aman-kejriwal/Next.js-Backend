import { NextRequest, NextResponse } from 'next/server';
import prisma from "@/db"
const client=prisma;
export async function POST(req: NextRequest){
    const body = await req.json();
    await client.user.create({
        data:{
            username:body.username,
            password:body.password
        }
    })
    console.log(body);
    return Response.json({
        msg:"you are Logged In"
    })
}  