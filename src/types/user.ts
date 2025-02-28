import { Dispatch, SetStateAction } from "react";

export interface IUser {
  id: number;
  username: string;
  email: string;
}

export interface IAuthContext {
  user: IUser | null;
  setUser: Dispatch<SetStateAction<IUser | null>>;
}
