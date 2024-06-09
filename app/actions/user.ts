 
    import { NextRequest, NextResponse } from 'next/server';
    import prisma from "@/db"
export function SignUpServerAction(password:string,username:string){
    const client=prisma;
    async function POST(req: NextRequest){
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
}