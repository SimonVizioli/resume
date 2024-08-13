import TransitionPage from "@/utils/transition-page";
import { motion } from "framer-motion";
import { MoveDown } from "lucide-react";
import EducationTimeline from "./education";
import ExperienceTimeLine from "./experience";
import Skills from "./skills";

const AnimatedDownArrow = () => {
    return (
        <div className="flex justify-center">
            <motion.div
                animate={{
                    rotate: [0, 0, 360, 360, 0],
                    borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 1,
                }}
                className="flex justify-center border-2 border-teal-400 p-6"
            >
                <MoveDown />
            </motion.div>
        </div>
    );
};

const About = () => {
    return (
        <>
            <TransitionPage />
            <ExperienceTimeLine />
            <AnimatedDownArrow />
            <EducationTimeline />
            <AnimatedDownArrow />
            <Skills />
        </>
    );
};
export default About;
