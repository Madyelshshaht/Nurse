import { Heart, Activity, Syringe, Clock, Pill, Stethoscope } from "lucide-react";
import { motion } from "framer-motion";
import "./style.css";

const services = [
    {
        icon: Heart,
        title: "رعاية ما بعد العمليات",
        desc: "متابعة الجروح وتغيير الضمدات والعناية الكاملة بعد العمليات الجراحية.",
    },
    {
        icon: Activity,
        title: "قياس العلامات الحيوية",
        desc: "قياس ضغط الدم والسكر والحرارة ومتابعة الحالة الصحية بشكل دوري.",
    },
    {
        icon: Syringe,
        title: "حقن وتركيب محاليل",
        desc: "حقن عضلية ووردية وتركيب محاليل بأعلى معايير التعقيم والأمان.",
    },
    {
        icon: Clock,
        title: "رعاية منزلية مستمرة",
        desc: "خدمة تمريضية منزلية على مدار الساعة بتواجد مستمر ومتابعة دقيقة.",
    },
    {
        icon: Pill,
        title: "إدارة الأدوية",
        desc: "تنظيم مواعيد الأدوية والتأكد من الجرعات الصحيحة والمتابعة.",
    },
    {
        icon: Stethoscope,
        title: "رعاية كبار السن",
        desc: "رعاية شاملة لكبار السن تشمل المتابعة اليومية والدعم الصحي المستمر.",
    },
];

// Variants للـ motion
const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.5, }, },
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: 50, transition: { duration: 0.5 } },
};

const ServicesSection = () => {
    return (
        <section className="py-16 px-4 md:px-16" id="services">
            <motion.div initial="hidden" whileInView="show" variants={container} className="text-center mb-12 mt-4">
                <motion.p variants={item} className="mb-2 text-1xl md:text-2xl font-bold">خدماتنا</motion.p>
                <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold">
                    خدمات تمريضية <span className="text-primary">متكاملة</span>
                </motion.h2>
                <motion.p variants={item} className="text-gray-500 mt-2 max-w-2xl mx-auto">
                    نقدم مجموعة شاملة من الخدمات التمريضية المنزلية بأيدي متخصصين ذوي خبرة.
                </motion.p>
            </motion.div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
            >
                {services.map((service) => {
                    const Icon = service.icon;
                    return (
                        <motion.div
                            key={service.title}
                            className="card border border-gray-200 rounded-xl p-6 flex flex-col items-start hover:shadow-lg cursor-pointer transition-shadow bg-white"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <div className="icon text-primary p-3 rounded-lg mb-4">
                                <Icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-500 text-sm">{service.desc}</p>
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
};

export default ServicesSection;