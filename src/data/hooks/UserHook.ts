import { useQuery } from "@tanstack/react-query";
import { userService } from "../services/UserService";

export function useSession() {
    return useQuery({
        queryKey: ['session-user'],
        queryFn: () => userService.getSessionUser(),
        retry: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    })
}