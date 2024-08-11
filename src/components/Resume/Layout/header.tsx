import {
    mobileNavContainerVariant,
    mobileNavExitProps,
    mobileNavListVariant,
} from "@/utils/motion-tramsition";
import { MotionTransition } from "@/utils/transition-component";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ThemeSwitcher } from "./themeSwitch";

interface NavLinksProps {
    className: string | undefined;
}

const NavLinks = (props: NavLinksProps) => {
    const location = useLocation();
    const { className } = props;

    return (
        <div className={className}>
            <NavLink
                to={"/resume/about"}
                className={`transition ease-in-out delay-150 text-white-200 hover:text-teal-400 ${
                    location.pathname === "/resume/about"
                        ? "border-b-2 border-teal-400 w-fit"
                        : ""
                }`}
            >
                About
            </NavLink>
            <NavLink
                to={"/resume/portfolio"}
                className={`transition ease-in-out delay-150 text-white-200 hover:text-teal-400 ${
                    location.pathname === "/resume/portfolio"
                        ? "border-b-2 border-teal-400 w-fit"
                        : ""
                }`}
            >
                Portfolio
            </NavLink>
            <NavLink
                to={"/resume/contact"}
                className={`transition ease-in-out delay-150 text-white-200 hover:text-teal-400 ${
                    location.pathname === "/resume/contact"
                        ? "border-b-2 border-teal-400 w-fit"
                        : ""
                }`}
            >
                Contact
            </NavLink>
        </div>
    );
};

const Logo = () => {
    return (
        <NavLink to={"resume"}>
            <h1 className="text-3xl font-bold flex items-center space-x-4">
                Simón <p className="text-teal-400"> Vizioli</p>
            </h1>
        </NavLink>
    );
};

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    return (
        <>
            <nav className="flex  items-center justify-end overflow-hidden">
                <div className="hidden justify-end md:flex">
                    <NavLinks className="flex gap-3" />
                </div>
                <div className="flex justify-end md:hidden">
                    <button onClick={toggleNavbar}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
                <div className=" justify-end">
                    <ThemeSwitcher />
                </div>
            </nav>
            <AnimatePresence mode="wait">
                {isOpen && (
                    <motion.div
                        layout="position"
                        key="nav-links"
                        variants={mobileNavContainerVariant}
                        initial="hidden"
                        animate="show"
                        className="mt-4 basis-full md:hidden"
                    >
                        <motion.div
                            variants={mobileNavListVariant}
                            {...mobileNavExitProps}
                        >
                            <NavLinks className="flex flex-col" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

const Header = () => {
    return (
        <MotionTransition
            position="right"
            className="sticky top-0 z-[1] mx-auto  flex w-full max-w-7xl flex-wrap items-center justify-between  p-[2em]   dark:border-gray-800 dark:bg-d-background dark:text-d-text-primary"
        >
            <Logo />
            <Nav />
        </MotionTransition>
    );
};

export default Header;
