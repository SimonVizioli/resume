import { Link } from "react-router-dom";
import underConstruction from "/src/assets/under-construction.webp";
import { PortfolioBoxProps } from "@/utils/types";

const PortfolioCard = (props: PortfolioBoxProps) => {
    const { data } = props;
    const { id, title, urlDemo, urlGithub } = data;

    return (
        <div key={id} className="p-4 border border-teal-50 rounded-xl">
            <h3 className="mb-4 text-xl">{title}</h3>
            <img
                src={underConstruction}
                alt="Image"
                width={200}
                height={200}
                className="w-full md:w-[200px] rounded-2xl h-auto"
            />

            <div className="flex gap-5 mt-5">
                <Link
                    to={urlGithub}
                    target="_blank"
                    className="p-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80"
                >
                    Github
                </Link>

                {urlDemo && (
                    <Link
                        to={urlDemo}
                        target="_blank"
                        className="p-2 transition duration-150 rounded-lg bg-teal-500 hover:bg-teal-700"
                    >
                        Live demo
                    </Link>
                )}
            </div>
        </div>
    );
};

export default PortfolioCard;
