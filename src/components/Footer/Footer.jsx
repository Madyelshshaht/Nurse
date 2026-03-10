import { FaHeart } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-white pb-8 pt-4 shadow-[0_-4px_10px_rgba(0,0,0,0.08)]">
            <div className="max-w-6xl mx-auto px-6 text-center flex flex-col items-center gap-2">

                {/* Logo */}
                <a
                    href="#"
                    className="flex items-center gap-2 font-black md:text-3xl text-2xl text-[#2FA69C]"
                >
                    <FaHeart className="w-6 h-6 text-[#2FA69C]" />
                    ممرضك
                </a>

                {/* copyright */}
                <p className="text-gray-600 text-sm md:text-base">
                    جميع الحقوق محفوظة © {new Date().getFullYear()} | صحتك أولاً
                </p>

            </div>
        </footer>
    );
};

export default Footer;