export interface Auth {
  username?: string;
  refreshToken?: string;
  accessToken?: string;
  status: string;
}

export interface Login {
  username: string;
  password: string;
}
