import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
//3asslema
export async function userSeed (){
  const user1 = await prisma.user.create({
    data: {
      email: 'user1@example.com',
      password: 'password123',
      userName: 'user1',
    },
  });
}