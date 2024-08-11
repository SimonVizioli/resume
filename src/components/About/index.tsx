import TransitionPage from "@/utils/transition-page";
import { MotionTransition } from "@/utils/transition-component";
import EducationTimeline from "./education";
import ExperienceTimeLine from "./experience";

const About = () => {
    return (
        <>
            <TransitionPage />
            <MotionTransition position="right">
                {/* <div className="flex justify-center gap-4"> */}
                <ExperienceTimeLine />
                <EducationTimeline />
                {/* </div> */}
            </MotionTransition>
        </>
    );
};
export default About;
