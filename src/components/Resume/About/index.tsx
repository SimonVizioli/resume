import TransitionPage from "@/utils/transition-page";
import EducationTimeline from "./education";
import ExperienceTimeLine from "./experience";
import Skills from "./skills";

const About = () => {
    return (
        <>
            <TransitionPage />
            <ExperienceTimeLine />
            <EducationTimeline />
            <Skills />
        </>
    );
};
export default About;
