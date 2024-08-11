import { MotionTransition } from "@/utils/transition-component";
import React from "react";
import { Link } from "react-router-dom";

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    {/* Text and Buttons */}
    <div>
        <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
            Desarrollador de Software con experiencia en React. He implementado
            exitosamente soluciones de software en diversos proyectos como
            Frontend developer. Además, lidero y gestiono proyectos como Project
            Owner y Scrum Master.
        </h1>
        <div className="mt-6 space-x-4">
            <Link
                to={"/about"}
                className="transition ease-in-out delay-150 border-2 border-black text-black py-2 px-4 rounded shadow-lg hover:dark:bg-white hover:bg-black  hover:text-white hover:dark:text-black duration-300 dark:text-white dark:border-white "
            >
                About me
            </Link>
            <Link
                to={"/portfolio"}
                className="transition ease-in-out delay-150 border-2 border-teal-500 text-black py-2 px-4 rounded shadow-lg hover:bg-teal-500 duration-300 dark:text-white"
            >
                Portfolio
            </Link>
        </div>
    </div>

    {/* Image */}
    <div className="flex justify-center md:justify-end">
        <img
            src="src/assets/perfil-git-2.jpg"
            alt="Your Name"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-lg"
            style={{ boxShadow: "0 0 30px 5px rgba(45, 212, 191, 0.5)" }}
        />
    </div>
</div>;

const Home: React.FC = () => {
    return (
        <div className="relative isolate px-6 pt-14 lg:px-8">
            <div className="mx-auto py-32 sm:py-48 lg:py-56">
                <MotionTransition
                    position="bottom"
                    className="flex justify-center gap-10"
                >
                    <section className="text-start py-16 w-1/2">
                        <h1 className="text-5xl font-bold text-teal-800 mb-6">
                            Software Developer
                        </h1>
                        <p className="text-xl text-teal-900 mb-6">
                            He implementado exitosamente soluciones de software
                            en diversos proyectos como Frontend developer.
                            Además, lidero y gestiono proyectos como Project
                            Owner y Scrum Master.
                        </p>
                        <div className="flex item-center justify-start gap-3 ">
                            <Link
                                to={"/about"}
                                className="transition ease-in-out delay-150 border-2 border-black text-black py-2 px-4 rounded shadow-lg hover:dark:bg-white hover:bg-black  hover:text-white hover:dark:text-black duration-300 dark:text-white dark:border-white "
                            >
                                About me
                            </Link>
                            <Link
                                to={"/portfolio"}
                                className="transition ease-in-out delay-150 border-2 border-teal-500 text-black py-2 px-4 rounded shadow-lg hover:bg-teal-500 duration-300 dark:text-white"
                            >
                                Portfolio
                            </Link>
                        </div>
                    </section>
                    <section>
                        <img
                            src="src/assets/perfil-git-2.jpg"
                            alt="Your Name"
                            className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-lg"
                        />
                    </section>
                </MotionTransition>
            </div>
        </div>
    );
};

export default Home;
