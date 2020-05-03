export interface IUser {
    id: string;
    email: string;
    username?: string;
}

export default class User implements IUser {
    public id: string;
    public email: string;
    public username?: string;
}
