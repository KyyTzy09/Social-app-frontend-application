import { X } from "lucide-react";
import { Activity, useState } from "react";
import LoginFormSection from "./sections/LoginFormSection";
import RegisterFormSection from "./sections/RegisterFormSection";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export function AuthModal({ isOpen, onClose }: Props) {
    const [tab, setTab] = useState<'login' | 'register'>('login');
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-surface-container-lowest/60 backdrop-blur-sm">
            {/* Modal Container */}
            <div className="w-full max-h-[95vh] max-w-sm bg-[#171f33] backdrop-blur-2xl rounded-2xl shadow-2xl overflow-y-auto overflow-x-hidden relative border border-outline-variant/20 scrollbar-hide">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-surface-container-highest transition-colors group"
                >
                    <X />
                </button>
                {/* Modal Content */}

                <Activity mode={tab === "login" ? "visible" : "hidden"} >
                    <LoginFormSection setTab={setTab} />
                </Activity>
                <Activity mode={tab === "register" ? "visible" : "hidden"} >
                    <RegisterFormSection setTab={setTab} />
                </Activity>
            </div>
        </div>
    );
};