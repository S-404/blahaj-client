export interface AuthResponseTypes {
    accessToken: string;
    refreshToken: string;
    user: IUser;
}

export interface IUser {
    username: string;
    email: string;
    id: number;
}