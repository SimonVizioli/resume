import { MotionTransition } from "@/utils/transition-component";
import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
    return (
        <MotionTransition
            position="bottom"
            className="relative isolate px-6 pt-14 lg:px-8"
        >
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <section className="text-center py-16">
                    <h1 className="text-5xl font-bold text-teal-800 mb-6">
                        Welcome to Our Website
                    </h1>
                    <p className="text-xl text-teal-900 mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque vel enim sit amet diam viverra sagittis.
                    </p>
                    <div className="flex item-center justify-center gap-3 ">
                        <Link
                            to={"/about"}
                            className="transition ease-in-out delay-150 border-2 border-white text-white py-2 px-4 rounded shadow-lg hover:bg-white hover:text-black duration-300"
                        >
                            About me
                        </Link>
                        <Link
                            to={"/portfolio"}
                            className="transition ease-in-out delay-150 border-2 border-teal-500 text-white py-2 px-4 rounded shadow-lg hover:bg-teal-500 duration-300"
                        >
                            Portfolio
                        </Link>
                    </div>
                </section>
            </div>
        </MotionTransition>
    );
};

export default Home;
