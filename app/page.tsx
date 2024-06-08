import axios from "axios";
import Image from "next/image";

async function getUSerData(){
  const res=await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details");

  return res;
} 
export default async function Home(){
  const userDetails=await getUSerData();
  return (
    <div>
      Hi There!
    </div>
  )
}