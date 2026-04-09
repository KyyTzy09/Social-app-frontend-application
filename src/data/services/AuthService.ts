import { apiClient } from "@/common/lib/api-client";
import type { LoginData, RegisterData } from "@/common/validations/AuthValidation";
import type { UserModel } from "../models/AuthModel";
import { BASE_URL } from "@/common/lib/env";

class AuthService {
    async register(data: RegisterData) {
        return await apiClient<{ data: UserModel }>({ url: "/auth/register", method: "POST", data });
    }
    async login(data: LoginData) {
        return await apiClient<{ accessToken: string }>({ url: "/auth/login", method: "POST", data });
    }
    async loginWithGoogle() {
        window.location.href = `${BASE_URL}/auth/google/redirect`;
    }
}

export const authService = new AuthService();