import type { LoginData, RegisterData } from "@/common/validations/AuthValidation";
import { useMutation } from "@tanstack/react-query";
import { authService } from "../services/AuthService";

export function useRegister() {
    return useMutation({
        mutationKey: ['register'],
        mutationFn: (data: RegisterData) => authService.register(data),
    })
}

export function useLogin() {
    return useMutation({
        mutationKey: ['login'],
        mutationFn: (data: LoginData) => authService.login(data),
    })
}