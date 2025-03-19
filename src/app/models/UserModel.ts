export interface UserModel {
  name: string;
  username: string;
  email: string;
  img: string;
  company?: Company;
  roles?: string[];
}

export interface UserResponse {
  id: number;
  name: string;
  username: string;
  email: string;
  img: string;
  company?: Company;
  roles: string[];
}

interface Company {
  id: number;
  name: string;
}
