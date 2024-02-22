import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


async function main() {
  const result = await prisma.cliente.delete({
    where: {
      id: '48058f26-cbee-416d-a6e9-b5d86f106612',
    },
  });


  console.log(result);
}


main();