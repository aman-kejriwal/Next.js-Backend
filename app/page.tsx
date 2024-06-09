import Image from "next/image";

import prisma from "@/db"

const client=prisma;
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
  await new Promise((r)=> setTimeout(r,5000));
  return (
    <>
      {users?.map(user => (
        <div key={user.id}>
          username: {user.username}
          <br />
          Password: {user.password}
        </div>
      ))
      }
    </>
  );
}
