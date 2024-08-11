import TransitionPage from "@/utils/transition-page";
import EducationTimeline from "./education";
import ExperienceTimeLine from "./experience";
import Skills from "./skills";

const About = () => {
    return (
        <>
            <TransitionPage />
            <EducationTimeline />
            <ExperienceTimeLine />
            <Skills />
        </>
    );
};
export default About;
