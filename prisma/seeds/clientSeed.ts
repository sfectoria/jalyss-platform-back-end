import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function userSeed (){
  const categoryClient1 = await prisma.categoryClient.create({
    data: {
      name: 'Regular',
    },
  });

  // Create Clients
  const client1 = await prisma.client.create({
    data: {
      fullName: 'Jane Smith',
      phoneNumber: '987-654-3210',
      address: '456 Elm St',
      email: 'janesmith@example.com',
      registrationDate: new Date(),
      idCategoryClient: categoryClient1.id,
    },
  });
  
}