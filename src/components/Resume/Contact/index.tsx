import { MotionTransition } from "@/utils/transition-component";
import TransitionPage from "@/utils/transition-page";
import ContactCard from "./card";
import { Github, Linkedin, Mails } from "lucide-react";

const contactInfo = [
    {
        id: 1,
        icon: <Linkedin />,
        title: "LinkedIn",
        link: "https://linkedin.com/in/simón-vizioli/",
    },
    {
        id: 2,
        icon: <Mails />,
        title: "Email",
        link: "mailto:simonvizioi@gmail.com",
    },
    {
        id: 3,
        icon: <Github />,
        title: "GitHub",
        link: "https://github.com/SimonVizioli",
    },
];

const Contact = () => {
    return (
        <div className="relative isolate px-6 pt-14 lg:px-8">
            <div className="py-32 sm:py-48 lg:py-56 max-w-5xl mx-auto flex justify-center">
                <TransitionPage />
                <div className="flex flex-col justify-center h-full items-center">
                    <MotionTransition position="right">
                        <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-10">
                            Contactame
                        </h1>
                    </MotionTransition>
                    <MotionTransition position="bottom">
                        <div className="relative z-10 grid gap-6 md:grid-cols-3">
                            {contactInfo.map((contact) => (
                                <ContactCard key={contact.id} data={contact} />
                            ))}
                        </div>
                    </MotionTransition>
                </div>
            </div>
        </div>
    );
};
export default Contact;
