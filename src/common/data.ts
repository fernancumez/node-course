import faker from "faker";

export const data = {
  personal: {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    jobTitle: faker.name.jobTitle(),
    phoneNumber: faker.phone.phoneNumber(),
  },
  address: {
    direction: faker.address.cardinalDirection(),
    city: faker.address.city(),
    country: faker.address.country(),
    zipCode: faker.address.zipCode(),
  },
};
