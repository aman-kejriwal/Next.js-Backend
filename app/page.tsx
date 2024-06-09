import Image from "next/image";
import {PrismaClient} from "@prisma/client"
const client=new PrismaClient();
async function getUserDetails(){
  try{
    const user=await client.user.findFirst();
    return {
     username:user?.username
    }
  }
  catch(e){
    console.error(e);
  }
}
export default async function Home() {
  const userDetails=await getUserDetails();
  return (
    <div>
     {userDetails?.username}
    </div>
  );
}
