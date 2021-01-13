import faker from "faker";
import { IData } from "./types";

export const data: IData = {
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  jobTitle: faker.name.jobTitle(),
  phoneNumber: faker.phone.phoneNumber(),

  address: {
    direction: faker.address.cardinalDirection(),
    city: faker.address.city(),
    country: faker.address.country(),
    zipCode: faker.address.zipCode(),
  },
};
