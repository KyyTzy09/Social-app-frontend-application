import { AuthModal } from "@/features/auth/AuthModal";
import { useSession } from "@/data/hooks/UserHook";

interface AuthGuardProps {
    children: React.ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
    const { data: session, isLoading } = useSession()
    const showModal = !isLoading && !session?.data
    if (showModal) {
        return <AuthModal />
    }

    console.log(session?.data)
    // Jika sudah login, lanjut render komponen aplikasi
    return (
        <>
            {children}
        </>
    )
}
