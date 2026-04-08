import { useQuery } from "@tanstack/react-query";
import { UserService } from "@/data/services/UserService";
import { AuthModal } from "@/features/auth/AuthModal";

interface AuthGuardProps {
    children: React.ReactNode;
}

const userService = new UserService();

export function AuthGuard({ children }: AuthGuardProps) {
    const { data: session, isLoading, isError } = useQuery({
        queryKey: ['session-user'],
        queryFn: () => userService.getSessionUser(),
        retry: false,
        refetchOnWindowFocus: false,
    });

    if (isLoading) {
        return (
            <div className="min-h-screen w-full flex items-center justify-center bg-background">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
        );
    }

    // Jika sudah login, lanjut render komponen aplikasi
    return (
        <>
            {isError && !session && <AuthModal isOpen={true} onClose={() => { }} />}
            {children}
        </>
    )
}
