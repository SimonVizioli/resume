import { Link, useLocation } from "react-router-dom";
import { ThemeSwitcher } from "./themeSwitch";
import { MotionTransition } from "@/utils/transition-component";

const Header = () => {
    const location = useLocation();

    return (
        <MotionTransition
            position="right"
            className="p-3 bg-transparent shadow-lg w-full fixed inset-x-0 top-0 z-50"
        >
            <nav className="container flex items-center justify-between lg:px-8">
                <Link to={""}>
                    <h1 className="text-3xl font-bold flex items-center space-x-4">
                        Simón <p className="text-teal-400"> Vizioli</p>
                    </h1>
                </Link>
                <div className=" space-x-4 shrink-0 flex items-center">
                    <Link
                        to={"/about"}
                        className={`transition ease-in-out delay-150 text-white-200 hover:text-teal-400 ${
                            location.pathname === "/about"
                                ? "text-teal-400"
                                : ""
                        }`}
                    >
                        About
                    </Link>
                    <Link
                        to={"/portfolio"}
                        className={`transition ease-in-out delay-150 text-white-200 hover:text-teal-400 ${
                            location.pathname === "/portfolio"
                                ? "text-teal-400"
                                : ""
                        }`}
                    >
                        Portfolio
                    </Link>

                    <Link
                        to={"/contact"}
                        className={`transition ease-in-out delay-150 text-white-200 hover:text-teal-400 ${
                            location.pathname === "/contact"
                                ? "text-teal-400"
                                : ""
                        }`}
                    >
                        Contact
                    </Link>
                    <ThemeSwitcher />
                </div>
            </nav>
        </MotionTransition>
    );
};

export default Header;
