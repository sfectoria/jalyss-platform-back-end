import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function employeeSeed (){
  const employee1 = await prisma.employee.create({
    data: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@example.com',
      phoneNumber: '123-456-7890',
      address: '123 Main St',
      position: 'Manager',
    },
  });
}