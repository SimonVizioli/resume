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
import { useTranslation } from "react-i18next";

interface NavLinksProps {
    className: string | undefined;
}

const NavLinks = (props: NavLinksProps) => {
    const { t } = useTranslation();
    const location = useLocation();
    const { className } = props;

    return (
        <div className={className}>
            <NavLink
                to={"/"}
                className={`transition ease-in-out delay-150 text-white-200 hover:text-teal-400 ${
                    location.pathname === "/"
                        ? "border-b-2 border-teal-400 w-fit"
                        : ""
                }`}
            >
                {t(`Nav.${0}`)}
            </NavLink>
            <NavLink
                to={"/about"}
                className={`transition ease-in-out delay-150 text-white-200 hover:text-teal-400 ${
                    location.pathname === "/about"
                        ? "border-b-2 border-teal-400 w-fit"
                        : ""
                }`}
            >
                {t(`Nav.${1}`)}
            </NavLink>
            <NavLink
                to={"/portfolio"}
                className={`transition ease-in-out delay-150 text-white-200 hover:text-teal-400 ${
                    location.pathname === "/portfolio"
                        ? "border-b-2 border-teal-400 w-fit"
                        : ""
                }`}
            >
                {t(`Nav.${2}`)}
            </NavLink>
            <NavLink
                to={"/contact"}
                className={`transition ease-in-out delay-150 text-white-200 hover:text-teal-400 ${
                    location.pathname === "/contact"
                        ? "border-b-2 border-teal-400 w-fit"
                        : ""
                }`}
            >
                {t(`Nav.${3}`)}
            </NavLink>
        </div>
    );
};

const Logo = () => {
    return (
        <NavLink to={""}>
            <h1 className="text-3xl font-bold flex items-center space-x-4">
                Simón <p className="text-teal-400"> Vizioli</p>
            </h1>
        </NavLink>
    );
};

const Nav = () => {
    const {
        i18n: { changeLanguage, language },
    } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(language);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    const handleChangeLanguage = () => {
        const newLanguage = currentLanguage === "en" ? "es" : "en";
        setCurrentLanguage(newLanguage);
        changeLanguage(newLanguage);
    };

    return (
        <>
            <nav className="flex items-center justify-end overflow-hidden">
                <div className="hidden justify-end md:flex">
                    <NavLinks className="flex gap-3" />
                </div>
                <div className="flex justify-end md:hidden">
                    <button onClick={toggleNavbar}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
                <div className="justify-end flex">
                    <div className="ml-3 flex justify-center">
                        <button
                            onClick={handleChangeLanguage}
                            className="bg-teal-700 rounded-lg px-2"
                        >
                            {currentLanguage.toLocaleUpperCase()}
                        </button>
                    </div>
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
            className="fixed inset-x-0 top-0 z-50 mx-auto flex w-full flex-wrap items-center justify-between p-3 md:px-20 shadow-lg bg-white dark:bg-slate-950"
        >
            <Logo />
            <Nav />
        </MotionTransition>
    );
};

export default Header;
