import { AuthModal } from "@/features/auth/AuthModal";
import { useSession } from "@/data/hooks/UserHook";

interface AuthGuardProps {
    children: React.ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
    const { data: session, isError } = useSession()
    // Jika sudah login, lanjut render komponen aplikasi
    return (
        <>
            {isError && !session && <AuthModal />}
            {children}
        </>
    )
}
