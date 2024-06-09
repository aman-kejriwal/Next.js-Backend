import { PrismaClient } from '@prisma/client'
console.log("Inside the db");
const prismaClientSingleton = () => {
    console.log("Inside the Singleton");
  return new PrismaClient();
}

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}
const prisma = globalThis.prisma ?? prismaClientSingleton()
 
export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma