export interface IData {
  firstName: string;
  lastName: string;
  jobTitle: string;
  phoneNumber: string;
  address: IAddress;
}

interface IAddress {
  direction: string;
  city: string;
  country: string;
  zipCode: string;
}
