import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();
//3asslema
export async function userSeed() {
  // const user1 = await prisma.user.create({
  //   data: {
  //     email: 'user1@example.com',
  //     password: 'password123',
  //     userName: 'user1',
  //   },
  // });
  const salt = await bcrypt.genSalt();
  const password = await bcrypt.hash('123456', salt);
  const users = await prisma.user.createMany({
    data: [
      {
        userName: 'Khalil',
        email: 'khalil@gmail.com',
        password: password,
        employeeId: 1,
      },
      {
        userName: 'Rania',
        email: 'rania@gmail.com',
        password: password,
        employeeId: 10,
      },
      {
        userName: 'Ahmed',
        email: 'Ahmed@gmail.com',
        password: password,
        employeeId: 2,
      },
      {
        userName: 'Layla',
        email: 'Layla@gmail.com',
        password: password,
        employeeId: 4,
      },
      {
        userName: 'Farouk',
        email: 'farouk@gmail.com',
        password:password,
        employeeId: 5,
      },
    ],
  });
}
