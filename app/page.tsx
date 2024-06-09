import Image from "next/image";
import {PrismaClient} from "@prisma/client"
const client=new PrismaClient();
async function getUserDetails(){
  try{
    const users=await client.user.findMany();
    return users;
  }
  catch(e){
    console.error(e);
  }
}
export default async function Home() {
  const users=await getUserDetails();
  return (
    <>
      {users?.map(user => (
        <div key={user.id}>
          Username: {user.username}
          <br />
          Password: {user.password}
        </div>
      ))}
    </>
  );
}
