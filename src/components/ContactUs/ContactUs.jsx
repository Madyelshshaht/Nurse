import { Clock, MapPin, Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const contactItems = [
    {
        icon: Clock,
        title: "المواعيد",
        desc: "24 ساعة / 7 أيام",
        link: ""
    },
    {
        icon: MapPin,
        title: "الموقع",
        desc: "القاهرة، مصر",
        link: "https://maps.app.goo.gl/iErLdSDRnSVDev1L6"
    },
    {
        icon: MessageCircle,
        title: "واتساب",
        desc: "راسلنا الآن",
        link: "https://wa.me/201018531875"
    },
    {
        icon: Phone,
        title: "اتصل بنا",
        desc: "01018531875",
        link: "tel:01018531875"
    },
];

// Variants للـ motion
const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2, }, },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ContactUs = () => {
    return (
        <section id="contact" className="py-24 bg-gray-100 text-center">
            <motion.div initial="hidden" whileInView="show" variants={containerVariants}  >
                {/* title */}
                <motion.span variants={itemVariants} className="text-primary font-semibold">
                    تواصل معنا
                </motion.span>

                <motion.h2 variants={itemVariants} className="text-4xl font-extrabold mt-2">
                    جاهز <span className="text-primary">لخدمتك</span>
                </motion.h2>

                <motion.p variants={itemVariants} className="text-gray-600 mt-4 max-w-xl mx-auto" >
                    تواصل معنا الآن لحجز موعد أو للاستفسار عن خدماتنا
                </motion.p>

                {/* cards */}
                <motion.div
                    className="grid md:grid-cols-4 gap-6 mt-16"
                    variants={containerVariants}
                >
                    {contactItems.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.a
                                href={item.link || "#"}
                                target="_blank"
                                key={i}
                                className="card rounded-2xl p-8 border transition hover:shadow-lg border-gray-200 bg-white cursor-pointer"
                                variants={itemVariants}
                                initial="hidden" 
                                whileInView="show"
                                viewport={{ once: false, amount: 0.2 }}
                            >
                                <div className="icon w-14 h-14 flex items-center justify-center rounded-xl mx-auto mb-4 bg-primary/10 text-primary">
                                    <Icon size={26} />
                                </div>
                                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                <p className="text-gray-500">{item.desc}</p>
                            </motion.a>
                        );
                    })}
                </motion.div>

                {/* button */}
                <motion.div variants={itemVariants} className="mt-14">
                    <a
                        href="https://wa.me/201018531875"
                        target="_blank"
                        className="button inline-flex items-center gap-2 px-6 py-3 rounded-xl text-lg font-semibold hover:opacity-90 transition"
                    >
                        <MessageCircle size={20} />
                        احجز موعدك الآن عبر واتساب
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default ContactUs;