import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const firstNames = ['Ahmed', 'Samir', 'Layla', 'Karim', 'Nadia', 'Fares', 'Hana', 'Omar', 'Rania', 'Zied', 'Khaled', 'Fatma', 'Anis', 'Yasmine', 'Amine', 'Sahar', 'Tarek', 'Amina', 'Habib', 'Sami'];
const lastNames = ['Ben Ali', 'Hammami', 'Bouazizi', 'Khelil', 'Trabelsi', 'Bousnina', 'Ayari', 'Mansour', 'Belhaj', 'Jaziri', 'Mejri', 'Kefi', 'Dridi', 'Saidi', 'Chouchane', 'Gharsalli', 'Mrad', 'Kacem', 'Chelbi', 'Baccouche'];
const emails = ['ahmed1@example.com', 'samir2@example.com', 'layla3@example.com', 'karim4@example.com', 'nadia5@example.com', 'fares6@example.com',
                'hana7@example.com', 'omar8@example.com', 'rania9@example.com', 'zied10@example.com', 'khaled11@example.com', 'fatma12@example.com',
                'anis13@example.com', 'yasmine14@example.com', 'amine15@example.com', 'sahar16@example.com', 'tarek17@example.com', 'amina18@example.com',
                'habib19@example.com', 'sami20@example.com'];
const phoneNumbers = ['91234567', '22345678', '53456789', '94561234', '25678901', '56789012', '92345671', '23456782', '53456793', '94561235', 
                      '25678904', '56789025', '92345676', '23456787', '53456798', '94561239', '25678906', '56789027', '92345678', '23456789'];
const addresses = ['1 Rue de l\'Union, Tunis, Tunisie', '2 Avenue Habib Bourguiba, Sfax, Tunisie', '3 Rue des Jasmins, Sousse, Tunisie',
                   '4 Rue de la Liberté, Monastir, Tunisie', '5 Rue Ibn Sina, Bizerte, Tunisie', '6 Avenue de la Paix, Gabès, Tunisie',
                   '7 Rue des Orangers, Nabeul, Tunisie', '8 Rue des Martyrs, Kairouan, Tunisie', '9 Rue de la Mosquée, Mahdia, Tunisie',
                   '10 Rue de la Mer, Ariana, Tunisie', '11 Rue de la Colline, Tunis, Tunisie', '12 Avenue des Palmiers, Sfax, Tunisie',
                   '13 Rue de l\'Artisanat, Sousse, Tunisie', '14 Rue des Fleurs, Monastir, Tunisie', '15 Rue de la Culture, Bizerte, Tunisie',
                   '16 Avenue de la République, Gabès, Tunisie', '17 Rue des Oliviers, Nabeul, Tunisie', '18 Rue des Roses, Kairouan, Tunisie',
                   '19 Rue du Port, Mahdia, Tunisie', '20 Rue des Jardins, Ariana, Tunisie'];
const positions = ['Manager', 'Developer', 'Designer', 'Analyst', 'Support', 'HR', 'Marketing', 'Sales', 'Accountant', 'Technician', 'Engineer', 'Consultant', 'Specialist', 'Coordinator', 'Executive', 'Assistant', 'Supervisor', 'Trainer', 'Director', 'Administrator'];

async function createEmployees() {
  for (let i = 0; i < firstNames.length; i++) {
    const firstName = firstNames[i];
    const lastName = lastNames[i];
    const email = emails[i];
    const phoneNumber = phoneNumbers[i];
    const address = addresses[i];
    const position = positions[i];

    await prisma.employee.create({
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        address: address,
        position: position,
      },
    });

  }
}

export async function employeeSeed() {
  await createEmployees();
}

// Run the seeding
employeeSeed()
  .then(() => {
    console.log('Employee seeding complete.');
  })
  .catch(e => {
    console.error('Employee seeding failed:', e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
