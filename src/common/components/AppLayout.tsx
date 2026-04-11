import React from 'react';
import { HeartIcon, Home, Icon, Search, Tv2, User, Users, type IconNode, type LucideIcon } from "lucide-react"

const NavItem = ({ Icon, label, active = false }: { Icon: LucideIcon; label: string; active?: boolean }) => (
  <a className={`flex items-center gap-4 px-4 py-3 rounded-lg font-['Manrope'] text-sm font-semibold tracking-wide uppercase transition-all duration-300 ${active ? 'text-[#46eedd] bg-[#171f33]' : 'text-[#bacac6] hover:text-[#46eedd] hover:bg-[#131b2e]'
    }`} href="#">
    <Icon className="h-5 w-5" />
    <span>{label}</span>
  </a>
);


export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#09090b] text-[#dae2fd] font-['Inter'] min-h-screen overflow-hidden">
      <div className="flex h-screen">
        {/* Left SideNavBar */}
        <aside className="h-screen w-64 fixed left-0 top-0 pt-5 bg-[#0b1326] flex flex-col gap-2 px-4 z-40">
          <div className="mb-6 px-4">
            <h1 className="text-[#46eedd] font-black font-['Manrope'] text-sm uppercase tracking-wide">Social app</h1>
            <p className="text-[#bacac6] text-xs opacity-70">Jelajahi konten yang menarik</p>
          </div>
          <nav className="flex flex-col gap-1">
            <NavItem Icon={Home} label="Home" active />
            <NavItem Icon={Search} label="Explore" />
            <NavItem Icon={Users} label="Following" />
            <NavItem Icon={Tv2} label="LIVE" />
            <NavItem Icon={User} label="Profile" />
          </nav>
          <div className="mt-8 px-4">
            <button className="w-full py-3 bg-gradient-to-br from-[#46eedd] to-[#00d1c1] text-[#003732] font-bold rounded-full shadow-lg shadow-[#46eedd]/10 hover:scale-[1.02] transition-transform duration-200">
              Create Post
            </button>
          </div>
          <div className="mt-auto pb-10 px-4 border-t border-[#3b4a47]/10 pt-6">
            <div className="bg-[#131b2e] p-4 rounded-xl">
              <p className="text-xs text-[#bacac6] leading-relaxed">Log in to follow creators, like videos, and view comments.</p>
              <button className="mt-3 text-[#46eedd] text-xs font-bold uppercase tracking-widest hover:underline">Log In</button>
            </div>
          </div>
        </aside>

        {children}
      </div>
    </div>
  );
};
