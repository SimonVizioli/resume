import { MotionTransition } from "@/utils/transition-component";
import TransitionPage from "@/utils/transition-page";
import ContactCard from "./card";
import dataCV from "@/utils/data";

const Contact = () => {
    return (
        <div className="relative isolate px-6 pt-14 lg:px-8">
            <div className="py-32 sm:py-48 lg:py-56 max-w-5xl mx-auto flex justify-center">
                <TransitionPage />
                <div className="flex flex-col justify-center h-full items-center">
                    <MotionTransition position="right">
                        <h1 className="text-2xl leading-tight text-center md:text-5xl md:mb-10 mb-5">
                            Contacto
                        </h1>
                    </MotionTransition>
                    <MotionTransition position="bottom">
                        <div className="relative z-10 grid md:gap-6 lg:gap-10 md:grid-cols-3">
                            {dataCV.contacto.map((contact) => (
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
