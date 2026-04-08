import { AuthModal } from "@/features/auth/AuthModal";
import { useSession } from "@/data/hooks/UserHook";

interface AuthGuardProps {
    children: React.ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
    const { data: session, isLoading, isError } = useSession()

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
            {isError && !session && <AuthModal isOpen={!session} onClose={() => { }} />}
            {children}
        </>
    )
}
