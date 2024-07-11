export interface IUser {
  _id?: string;
  fullName?: string;
  username: string;
  password: string;
  confirmPassword?: string;
  profilePic?: string;
}
