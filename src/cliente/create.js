import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


async function main() {
  const result = await prisma.cliente.create({
    data: {
      name: "Andrey",
      fullname: "Andrey Freitas Lopes",
      cpf: "123.123.123-54",
      address:"Maria julia da Luz, 1294",
    },
  });


  console.log(result);
}


main();
