export type UserModel = {
  email: string,
  password: string,
  profile: {
    name: string,
    gender: string,
    location: string,
    website: string,
    picture: string
  }
};