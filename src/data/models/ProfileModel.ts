export interface Profile {
    userId: string;
    username?: string;
    avatar?: string;
    info?: string;
    gender?: UserGender;
    dateOfBirth?: Date;
    createdAt: Date;
    updatedAt: Date;
}

export enum UserGender {
    MAN = "MAN",
    WOMAN = "WOMAN",
    OTHER = "OTHER",
}