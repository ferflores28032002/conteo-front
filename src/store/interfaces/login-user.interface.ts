export interface UserLoginModel {
  id: number;
  name: string;
  email: string;
}

export interface UserSlice {
  token: string | null;
  user: UserLoginModel | null;
  setUser: (token: string, user: UserLoginModel) => void;
  logout: () => void;
}
