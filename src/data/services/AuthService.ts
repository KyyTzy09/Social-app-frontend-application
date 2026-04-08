import { apiClient } from "@/common/lib/api-client";
import type { LoginData, RegisterData } from "@/common/validations/AuthValidation";
import type { UserModel } from "../models/AuthModel";

class AuthService {
    async register(data: RegisterData) {
        return await apiClient<{ data: UserModel }>({ url: "/auth/register", method: "POST", data });
    }
    async login(data: LoginData) {
        return await apiClient<{ accessToken: string }>({ url: "/auth/login", method: "POST", data });
    }
}

export const authService = new AuthService();