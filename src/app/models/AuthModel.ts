import { UserResponse } from './UserModel';

export enum RolesEnum {
  admin = 'admin',
  liquidator = 'liquidator',
}

export type RolesType = keyof typeof RolesEnum;

export interface AuthProps {
  token: string | null;
  refresh_token: string | null;
  user: UserResponse | null;
}

export interface AuthUserData {
  token: string;
  refresh_token: string;
  user: UserResponse;
}

export interface RegisterPayload {
  firstname: string;
  email: string;
  password: string;
}

export interface UpdateUserData {
  id: string;
  firstname: string;
  email: string;
  password: string;
}

export interface OkData {
  ok: boolean;
}

export interface UpdateTokenData {
  token: string;
  refresh_token: string;
}
export interface RegisterResponse {
  errors?: unknown;
  data?: {
    signup: {
      token: string;
      refresh_token: string;
      user: UserResponse;
    };
  };
}
export interface UpdateUserResponse {
  errors?: unknown;
  data?: {
    updateUser: UserResponse;
  };
}
export interface ChangePasswordResponse {
  errors?: unknown;
  data?: {
    changePassword: OkData;
  };
}

export interface DeleteAccountResponse {
  errors?: unknown;
  data?: {
    deleteAccount: OkData;
  };
}

export interface RefreshTokenResponse {
  errors?: unknown;
  data?: {
    refreshToken: {
      token: string;
      refresh_token: string;
    };
  };
}
