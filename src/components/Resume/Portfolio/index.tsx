import dataCV from "@/utils/data";
import PortfolioCard from "./portfo-card";
import { MotionTransition } from "@/utils/transition-component";
import TransitionPage from "@/utils/transition-page";
import { Trans, useTranslation } from "react-i18next";

const Portfolio = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div className="py-32 sm:py-48 lg:py-56  max-w-5xl mx-auto flex justify-center md:w-full w-3/4">
                    <TransitionPage />
                    <div className="flex flex-col justify-center h-full items-center">
                        <MotionTransition position="right">
                            <h1 className="text-2xl  font-extrabold text-center md:text-4xl md:mb-10 mb-10 flex gap-2">
                                <Trans i18nKey={"PortfolioH1"} t={t}>
                                    Mis últimos
                                    <p className="text-teal-500">
                                        trabajos realizados
                                    </p>
                                </Trans>
                            </h1>
                        </MotionTransition>
                        <MotionTransition position="bottom">
                            <div className="relative z-10 grid gap-6 md:grid-cols-3 ">
                                {dataCV.proyectos.map((data) => (
                                    <PortfolioCard key={data.id} data={data} />
                                ))}
                            </div>
                        </MotionTransition>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Portfolio;
