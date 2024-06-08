import axios from "axios";
import Image from "next/image";

async function getUSerData(){
  await new Promise((r)=>setTimeout(r,5000));
  const res=await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details");

  return res.data;
} 
export default async function UserDetails(){
  
  const userDetails=await getUSerData();
  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {userDetails?.name}
                </div>
                
                Email: {userDetails?.email}
            </div>
        </div>
    </div>
  )
}