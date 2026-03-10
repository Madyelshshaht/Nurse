import { ShieldCheck, Award, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        icon: ShieldCheck,
        title: "ممرض رسمياً",
        desc: "ترخيص مزاولة مهنة معتمد",
    },
    {
        icon: Award,
        title: "خبرة واسعة",
        desc: "أكثر من 10 سنوات في المجال الطبي",
    },
    {
        icon: GraduationCap,
        title: "مؤهل علمياً",
        desc: "بكالوريوس تمريض مع تدريب متخصص",
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

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: 50, transition: { duration: 0.5 } },
};

const About = () => {
    return (
        <section id="about" className="py-20 text-center">
            <motion.div
                initial="hidden"
                whileInView="show"
                variants={containerVariants}
                viewport={{ once: false, amount: 0.2 }}
            >
                {/* title */}
                <motion.span variants={itemVariants} className="mb-2 text-1xl md:text-2xl font-bold">
                    عني
                </motion.span>

                <motion.h2 variants={itemVariants} className="text-4xl font-extrabold mt-2">
                    ممرض <span className="text-primary">محترف</span> تحت خدمتك
                </motion.h2>

                <motion.p
                    variants={itemVariants}
                    className="mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed"
                >
                    أنا ممرض مرخص بخبرة تزيد عن 10 سنوات في تقديم الرعاية الصحية المنزلية.
                    أؤمن بأن كل مريض يستحق رعاية عالية الجودة في راحة منزله. أسعى دائماً
                    لتقديم أفضل خدمة ممكنة بأمانة وإخلاص.
                </motion.p>

                {/* cards */}
                <motion.div
                    className="grid md:grid-cols-3 gap-10 mt-16"
                    variants={containerVariants}
                >
                    {features.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center"
                                variants={itemVariants}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: false, amount: 0.2 }}
                            >
                                <div className="bg-[#2fa69c38] p-5 rounded-xl mb-4">
                                    <Icon className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-gray-500">{item.desc}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;