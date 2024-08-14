import { MotionTransition } from "@/utils/transition-component";
import React from "react";
import { Link } from "react-router-dom";
import perfilGit from "/src/assets/perfil-git-2.jpg";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="relative isolate px-3 md:px-6 lg:px-8 pt-14 ">
            <div className="mx-auto py-16 md:32 sm:py-48 lg:py-56 flex justify-center">
                <MotionTransition
                    position="bottom"
                    className="md:flex md:justify-center md:gap-10"
                >
                    <section>
                        <img
                            src={perfilGit}
                            alt="Simón Vizioli"
                            className="w-64 h-64 border-2 border-teal-400 shadow-lg md:w-80 md:h-80 rounded-full md:rounded-lg md:shadow-[5px_5px_0px_0px_rgba(0,_98,_90,_0.9)]  md:flex mx-auto"
                        />
                    </section>
                    <section className="text-start md:py-20 py-10 w-fit md:w-1/2">
                        <h1 className="md:text-5xl text-3xl font-bold mb-6 flex gap-2">
                            Software <p className="text-teal-400">Developer </p>
                        </h1>
                        <p className="md:text-xl text-base text-teal-600 mb-6">
                            {t(`Home`)}
                        </p>
                        <div className="flex item-center justify-start gap-3 ">
                            <Link
                                to={"/about"}
                                className="transition ease-in-out delay-50 border-2 border-black text-black py-2 px-4 rounded shadow-lg hover:dark:bg-white hover:bg-black  hover:text-white hover:dark:text-black duration-300 dark:text-white dark:border-white "
                            >
                                {t(`Nav.${1}`)}
                            </Link>
                            <Link
                                to={"/portfolio"}
                                className="transition ease-in-out delay-50 border-2 border-teal-500 text-black py-2 px-4 rounded shadow-lg hover:bg-teal-500 duration-300 dark:text-white"
                            >
                                Portfolio
                            </Link>
                        </div>
                    </section>
                </MotionTransition>
            </div>
        </div>
    );
};

export default Home;
