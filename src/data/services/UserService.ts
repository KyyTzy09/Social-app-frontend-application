import { apiClient } from "@/common/lib/api-client";
import type { UserModel } from "../models/AuthModel";

export class UserService {
    async getSessionUser() {
        return await apiClient<{ data: UserModel }>({ url: "/users/session", method: "GET" });
    }
}