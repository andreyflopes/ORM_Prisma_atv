import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


async function main() {
  const result = await prisma.cliente.update({
    where: {
      cpf: "123.123.123-54",
    },
    data: {
      address:"Rua Celio Veiga, 1234"
    },
  });


  console.log(result);
}
main();