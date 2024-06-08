import { NextRequest, NextResponse } from 'next/server';
import {PrismaClient} from "@prisma/client"
const client=new PrismaClient();
export async function POST(req: NextRequest) {
    const body = await req.json();
    await client.userser.create({
        data:{
            username:body.username,
            password:body.password
        }
    })
    console.log(body);
    return Response.json({
        msg:"you are Logged in"
    })
}  