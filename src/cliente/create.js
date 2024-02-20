import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


async function main() {
  const result = await prisma.cliente.create({
    data: {
      name: "Leticia",
      fullname: "Leticia Schutz",
      cpf: "123.123.133-54",
      address:"Maria julia da Luz, 1294" ,
    },
  });


  console.log(result);
}


main();
