import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


async function main() {
  const result = await prisma.cliente.delete({
    where: {
      id: "453b0949-0cba-4530-8ade-e78cd97ae5a9",
    },
  });


  console.log(result);
}


main();