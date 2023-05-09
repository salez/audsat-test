export interface AuthUser{
  id: number;
  email: string;
  name: string;
  accessToken: string;
  role: 'admin' | 'user';
  permissions: ('read' | 'write')[]; 
}