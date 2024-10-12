import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';


const prisma = new PrismaClient();
//3asslema
export async function userSeed (){
  // const user1 = await prisma.user.create({
  //   data: {
  //     email: 'user1@example.com',
  //     password: 'password123',
  //     userName: 'user1',
  //   },
  // });
  const salt = await bcrypt.genSalt();

  const user1 = await prisma.user.create({
    data: {
      userName: 'Khalil',
      email: 'khalil@gmail.com',
      password: await bcrypt.hash('123456', salt),
     
    },
  });
}