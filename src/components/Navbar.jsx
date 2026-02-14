import React from 'react';
import { User, Briefcase, Mail } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="w-full border-b-2 border-[var(--color-primary)] bg-[var(--color-background)] py-4 px-6 md:px-12 flex justify-center items-center sticky top-0 z-50 text-black">
            {/* <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-black rounded-full animate-pulse"></div>
                <span className="font-space font-bold uppercase text-sm tracking-wider">Status: Available</span>
            </div> */}

            <div className="flex items-center gap-6 md:gap-8">
                <a href="#profile" className="font-inter font-medium text-[var(--color-black)] hover:text-[var(--color-primary)] hover:underline decoration-[var(--color-primary)] decoration-2 underline-offset-4 flex items-center gap-2 transition-colors">
                    <User className="w-4 h-4" />
                    <span className="hidden md:inline">Profile</span>
                </a>
                <a href="#experience" className="font-inter font-medium text-[var(--color-black)] hover:text-[var(--color-primary)] hover:underline decoration-[var(--color-primary)] decoration-2 underline-offset-4 flex items-center gap-2 transition-colors">
                    <Briefcase className="w-4 h-4" />
                    <span className="hidden md:inline">Experience</span>
                </a>
                <a href="#contact" className="font-inter font-medium text-[var(--color-black)] hover:text-[var(--color-primary)] hover:underline decoration-[var(--color-primary)] decoration-2 underline-offset-4 flex items-center gap-2 transition-colors">
                    <Mail className="w-4 h-4" />
                    <span className="hidden md:inline">Contact</span>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
