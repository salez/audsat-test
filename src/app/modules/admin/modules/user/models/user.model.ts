export interface User{
  id: string;
  name: string;
  email: string;
  accessToken: string;
  role: string;
  permissions: string[];
}