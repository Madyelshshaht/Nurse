import { useEffect, useState } from "react";

const statsData = [
    { num: 500, label: "مريض سعيد", prefix: "+" },
    { num: 10, label: "سنوات خبرة", prefix: "+" },
    { num: 24, label: "متاح دائماً", prefix: "" },
];

const StatsCounter = () => {
    const [counters, setCounters] = useState(statsData.map(() => 0));

    useEffect(() => {
        const duration = 3000; 
        const intervalTime = 20; 

        statsData.forEach((stat, index) => {
            const step = stat.num / (duration / intervalTime);
            const interval = setInterval(() => {
                setCounters((prev) => {
                    const newCounters = [...prev];
                    if (newCounters[index] < stat.num) {
                        newCounters[index] = Math.min(newCounters[index] + step, stat.num);
                    }
                    return newCounters;
                });
            }, intervalTime);

            return () => clearInterval(interval);
        });
    }, []);

    return (
        <div className="flex gap-8 pt-4  sm:justify-start justify-center">
            {statsData.map((stat, index) => (
                <div key={stat.label} className="text-center">
                    <div className="text-2xl font-black text-primary"> {stat.prefix} {Math.floor(counters[index])} </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
            ))}
        </div>
    );
};

export default StatsCounter;