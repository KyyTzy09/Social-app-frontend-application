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
    <div className="bg-[#0b1326] text-[#dae2fd] font-['Inter'] min-h-screen overflow-hidden">
      {/* TopNavBar */}
      <header className="fixed top-0 w-full flex justify-between items-center px-6 py-3 bg-[#0b1326]/80 backdrop-blur-xl z-50">
        <div className="flex items-center gap-8">
          <span className="text-2xl font-bold tracking-tighter text-[#46eedd] font-['Manrope']">Curator</span>
          <div className="hidden md:flex items-center bg-[#222a3d] px-4 py-2 rounded-full w-80 group transition-all duration-300 focus-within:bg-[#31394d] focus-within:ring-1 focus-within:ring-[#46eedd]/30">
            <span className="material-symbols-outlined text-[#bacac6] text-sm mr-2">search</span>
            <input
              className="bg-transparent border-none focus:ring-0 text-sm w-full text-[#dae2fd] placeholder:text-[#859491]"
              placeholder="Search creators and aesthetics..."
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6 text-[#bacac6] font-['Manrope'] tracking-tight">
            <a className="hover:text-[#46eedd] transition-colors duration-200" href="#">Upload</a>
            <a className="hover:text-[#46eedd] transition-colors duration-200" href="#">Messages</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-[#bacac6] hover:bg-[#171f33] rounded-full transition-colors duration-200">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="h-9 w-9 rounded-full overflow-hidden border border-[#3b4a47]/20 cursor-pointer transition-transform hover:scale-105 duration-200">
              <img alt="User profile" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDDlqqR5ST_vTLf3_FsdK0BS-nk5U6XD_xWqrv-TR20TDgZqwlhXA8KvspV6pkEcYr_nscn7OqlmErscX3rKEWszqp7Xv4IOmQ8L_jTYaO_iOakD3-IT7AnjiqZcsUsRYWTqJ5CJMjdhMOjtXtFV3UPudjlnGU_U4W9hYEsaQdGMiSuEAi4V2H6m5eGOLB50wvRHH9SPM_OsaB1s3ochZu9nXfTOQ3K90tXfJ7MeaV3r-eIPvwc3eFmE0BXaF7sbnVkGnxA0tBvBI" />
            </div>
          </div>
        </div>
      </header>

      <div className="flex h-screen pt-16">
        {/* Left SideNavBar */}
        <aside className="h-screen w-64 fixed left-0 top-0 pt-20 bg-[#0b1326] flex flex-col gap-2 px-4 z-40">
          <div className="mb-6 px-4">
            <h2 className="text-[#46eedd] font-black font-['Manrope'] text-sm uppercase tracking-wide">For You</h2>
            <p className="text-[#bacac6] text-xs opacity-70">Discover new content</p>
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
