export type User = {
    _id: string;
    fullname: string;
    email: string;
    password: string;
  };

export type LoginFormResponse = User & {
    token: string;
  };