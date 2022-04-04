const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient

async function main() {
  const p = {
    title: 'Iphone X',
    description: 'A11',
    price: 1000,
    categoryId: 1,
  }
  const product = await prisma.product.update({
    data: p,
    where: {
      id: 4
    }
  });
  console.log(product);

}

main().catch(e => { console.error(e); process.exit(1); })