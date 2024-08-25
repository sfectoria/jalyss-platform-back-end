import { PrismaClient } from '@prisma/client';
import { userSeed } from './seeds/userSeed';
import { articleSeed } from './seeds/articleSeed';
import { stockSeed } from './seeds/stockSeed';
import { salesChannelSeed } from './seeds/salesChannelSeed';
import { employeeSeed } from './seeds/employeeSeed';

const prisma = new PrismaClient();

async function main() {
  // if we have user in data base stop seeding
  const users = await prisma.user.findMany();

  if (users.length) {
    console.log('seed has been stoped because you have users in your database');
    return;
  } else {
    await userSeed();
    await articleSeed();
    await employeeSeed();
    const stock1 = await stockSeed();
    salesChannelSeed(stock1);
    console.log('Seed data created successfully.');
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
