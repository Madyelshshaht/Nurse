import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";


const links = [
    { href: "#services", label: "خدماتنا" },
    { href: "#about", label: "عنّي" },
    { href: "#contact", label: "تواصل معنا" },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 right-0 left-0 z-50 bg-white shadow ">
            <div className="px-10 flex items-center justify-between h-16">

                {/* Logo */}
                <a href="#" className="flex items-center gap-2 font-black md:text-3xl text-2xl text-[#2FA69C]" >
                    <FaHeart className="w-6 h-6 text-[#2FA69C]" />
                    ممرضك
                </a>

                {/* Desktop menu */}
                <div className="hidden md:flex items-center gap-8 md:text-xl text-lg">
                    {links.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            className="font-bold text-[#2FA69C] hover:text-blue-500 "
                        >
                            {l.label}
                        </a>
                    ))}
                </div>

                {/* Mobile toggle */}
                <button
                    className="md:hidden"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden bg-white px-6 py-4 space-y-4 shadow">
                    {links.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            onClick={() => setOpen(false)}
                            className="block font-semibold hover:text-primary transition-colors"
                        >
                            {l.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;