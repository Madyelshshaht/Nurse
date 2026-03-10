import { Calendar, Phone } from "lucide-react";
import { motion } from "framer-motion";
import StatsCounter from "../common/States";
import { FaFacebookF, FaWhatsapp, FaInstagram, FaPhone } from "react-icons/fa";


const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.5, }, },
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const iconsContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.4
        }
    }
}

const icon = {
    hidden: { opacity: 0, x: 200 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const imageAnim = {
    hidden: { opacity: 0, x: -200 },
    show: { opacity: 1, x: 0, transition: { duration: 1.8 } },
};

const HeroSection = () => {
    return (
        <div className="flex md:flex-row flex-col justify-around overflow-hidden sm:px-4 items-center">

            {/* TEXT */}
            <motion.div variants={container} initial="hidden" animate="show" className="text-start" >

                <motion.div
                    variants={item}
                    className="flex items-center gap-2 bg-[#2fa69c6c] px-3 py-1 rounded-full w-max"
                >
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    <span className="text-sm font-semibold">متاح للخدمة الآن</span>
                </motion.div>

                <motion.h1
                    variants={item}
                    className="text-3xl lg:text-6xl font-bold leading-tight mt-5"
                >
                    رعاية تمريضية
                    <br />
                    <span className="text-[#2FA69C]">احترافية</span> في منزلك
                </motion.h1>

                <motion.p
                    variants={item}
                    className="text-md sm:text-lg mt-5 md:max-w-[80%]"
                >
                    خدمات تمريضية منزلية على أعلى مستوى من الكفاءة والاحترافية.
                    راحتك وصحتك هي أولويتنا الأولى.
                </motion.p>

                <motion.div
                    variants={item}
                    className="flex flex-wrap gap-4 my-6 px-1"
                >
                    <a href="tel:01018531875">
                        <button className="button flex items-center gap-2 text-base px-6 py-3 rounded-xl text-white hover:scale-105 cursor-pointer transition-transform">
                            <Phone className="w-5 h-5" />
                            احجز الآن
                        </button>
                    </a>

                    <a href="#services">
                        <button className="flex items-center gap-2 text-base px-6 py-3 rounded-xl border border-secondary cursor-pointer hover:text-white hover:bg-[#2FA69C] hover:scale-105 transition-transform">
                            <Calendar className="w-5 h-5" />
                            تعرف على الخدمات
                        </button>
                    </a>
                </motion.div>

                <motion.div variants={item}>
                    <motion.div variants={iconsContainer} className="flex items-center sm:justify-start justify-start gap-6 py-1 sm:mx-0 mx-2">
                        <motion.a variants={icon} href="https://wa.me/201018531875" target="_blank" className="text-center text-2xl p-2 bg-[#2fa69c38] hover:bg-[#2fa69c] hover:text-white rounded-full "> <FaWhatsapp /> </motion.a>
                        <motion.a variants={icon} href="https://www.facebook.com/share/1Au6HE5Chu/" target="_blank" className="text-center text-2xl p-2 bg-[#2fa69c38] hover:bg-[#2fa69c] hover:text-white rounded-full "> <FaFacebookF /> </motion.a>
                        <motion.a variants={icon} href="https://www.instagram.com/___mohamed_abdallah___?igsh=MW0zc3Y4Y3AxOTM1dw==" target="_blank" className="text-center text-2xl p-2 bg-[#2fa69c38] hover:bg-[#2fa69c] hover:text-white rounded-full "> <FaInstagram /> </motion.a>
                    </motion.div>
                </motion.div>

                {/* <motion.div variants={item}> <StatsCounter /> </motion.div> */}
            </motion.div>

            {/* IMAGE */}
            <motion.div
                variants={imageAnim}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="sm:mt-0 mt-5"
            >
                <img
                    src="/src/assets/nurse1.png"
                    alt="nurse"
                    className="w-full h-full object-contain"
                />
            </motion.div>
        </div>
    );
};

export default HeroSection;