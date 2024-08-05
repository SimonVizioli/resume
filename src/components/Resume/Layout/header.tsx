import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="p-3  bg-teal-700 shadow-lg fixed w-full top-0 z-50">
            <nav className="container mx-auto flex justify-between items-center">
                <Link to={"about"}>
                    <h1 className="text-3xl font-bold flex items-center space-x-4">
                        Simón Vizioli
                    </h1>
                </Link>
                <div className=" space-x-4 shrink-0">
                    <Link to={"/transaction"}>Education</Link>
                    <Link to={"/budget"}>Experience</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
