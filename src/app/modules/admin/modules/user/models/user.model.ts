export interface User{
  id: number;
  email: string;
  name: string;
  username: string;
  address: {
    street: string;
    suite: string;
    zipcode: string;
    city: string;
  };
  company: {
    bs: string;
    catchPhrase: string;
    name: string;
  };
  phone: string;
  accessToken: string;
  role: string;
  permissions: string[];
}