import { MotionTransition } from "@/utils/transition-component";
import React from "react";
import { Link } from "react-router-dom";
import perfilGit from "/src/assets/perfil-git-2.jpg";

const Home: React.FC = () => {
    return (
        <div className="relative isolate px-6 pt-14 lg:px-8">
            <div className="mx-auto py-32 sm:py-48 lg:py-56 flex justify-center">
                <MotionTransition
                    position="bottom"
                    className="flex justify-center md:gap-10"
                >
                    <section className="text-start py-20 md:w-1/2">
                        <h1 className="md:text-5xl text-4xl font-bold mb-6 flex gap-2">
                            Software <p className="text-teal-400">Developer </p>
                        </h1>
                        <p className="md:text-xl md:text-lg text-teal-600 mb-6">
                            He implementado exitosamente soluciones de software
                            en diversos proyectos como Frontend developer.
                            Además, lidero y gestiono proyectos como Project
                            Owner y Scrum Master.
                        </p>
                        <div className="flex item-center justify-start gap-3 ">
                            <Link
                                to={"/resume/about"}
                                className="transition ease-in-out delay-150 border-2 border-black text-black py-2 px-4 rounded shadow-lg hover:dark:bg-white hover:bg-black  hover:text-white hover:dark:text-black duration-300 dark:text-white dark:border-white "
                            >
                                About me
                            </Link>
                            <Link
                                to={"/resume/portfolio"}
                                className="transition ease-in-out delay-150 border-2 border-teal-500 text-black py-2 px-4 rounded shadow-lg hover:bg-teal-500 duration-300 dark:text-white"
                            >
                                Portfolio
                            </Link>
                        </div>
                    </section>
                    <section>
                        <img
                            src={perfilGit}
                            alt="Simón Vizioli"
                            className="w-80 h-80 md:w-80 md:h-80 rounded-lg shadow-[5px_5px_0px_0px_rgba(0,_98,_90,_0.9)] hidden md:flex"
                        />
                    </section>
                </MotionTransition>
            </div>
        </div>
    );
};

export default Home;
