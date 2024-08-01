const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Create Users
  const user1 = await prisma.user.create({
    data: {
      email: 'user1@example.com',
      password: 'password123'
    }
  });

  // Create Employees
  const employee1 = await prisma.employee.create({
    data: {
      first_name: 'John',
      last_name: 'Doe',
      email: 'johndoe@example.com',
      phone_number: '123-456-7890',
      address: '123 Main St',
      position: 'Manager'
    }
  });

  // Create Category Clients
  const categoryClient1 = await prisma.category_Client.create({
    data: {
      name: 'Regular'
    }
  });

  // Create Clients
  const client1 = await prisma.client.create({
    data: {
      fullName: 'Jane Smith',
      phone_number: '987-654-3210',
      address: '456 Elm St',
      email: 'janesmith@example.com',
      registration_date: new Date(),
      id_categorie_client: categoryClient1.id
    }
  });

  // Create Sales Channels
  const salesChannel1 = await prisma.sales_channels.create({
    data: {
      nom: 'Online Store',
      type: 'Online',
      region: 'North America',
    }
  });

  

  // Create Publishing Houses
  const publishingHouse1 = await prisma.publishingHouses.create({
    data: {
      name: 'ABC Publishing',
      address: '789 Maple St',
      phone_number: '555-123-4567',
      email: 'contact@abcpublishing.com'
    }
  });

  // Create Stock
  const stock1 = await prisma.stock.create({
    data: {
      location: 'Warehouse 1',
      capacity: 500
    }
  });


  
  // Add more seed data as needed for other models

  console.log('Seed data created successfully.');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
