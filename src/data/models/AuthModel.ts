import type { Profile } from "./ProfileModel";

export interface UserModel {
    userId: string;
    fullName: string;
    email: string;
    password?: string;
    isFirstLogin: boolean;
    profile?: Profile;
    createdAt: Date;
    updatedAt: Date;
    // userInterests: UserInterest[];
}
