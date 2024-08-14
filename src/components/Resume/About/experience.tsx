import dataCV from "@/utils/data";
import { MotionTransition } from "@/utils/transition-component";
import { Trans, useTranslation } from "react-i18next";

const ExperienceTimeLine = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col justify-center divide-y divide-slate-200 ">
            <div className="md:w-full w-3/4 max-w-3xl mx-auto py-28 sm:py-32 lg:py-48">
                <MotionTransition position="right" className="overflow-hidden">
                    <h2 className="text-3xl font-extrabold pb-2 mb-2 flex gap-2">
                        <Trans i18nKey={"ExperienceH2"}>
                            Experiencia <p className="text-teal-400">Laboral</p>
                        </Trans>
                    </h2>
                </MotionTransition>
                <MotionTransition position="bottom">
                    <div className="my-3 ">
                        {dataCV.experiencia_laboral.map((data, index) => (
                            <div
                                key={data.id}
                                className="relative py-6 pl-8 sm:pl-32 group"
                            >
                                <h3 className="mb-1 text-2xl font-bold sm:mb-0 ">
                                    {data.cargo}
                                </h3>
                                <div
                                    className="flex flex-col sm:flex-row items-start mb-1 
                                        group-last:before:hidden before:absolute 
                                        before:left-2 sm:before:left-0 before:h-full
                                        before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] 
                                        before:self-start before:-translate-x-1/2 
                                        before:translate-y-3 after:absolute after:left-2 
                                        sm:after:left-0 after:w-2 after:h-2 after:bg-teal-600 
                                        after:border-4 after:box-content after:border-slate-50 
                                        after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 
                                        after:translate-y-1.5"
                                >
                                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                                        {data.periodo}
                                    </time>
                                    <div className="text-xl font-bold dark:text-gray-400 text-teal-400">
                                        {t(
                                            `experiencia_laboral.${index}.empresa`
                                        )}
                                    </div>
                                </div>
                                <div className="dark:text-slate-400 text-slate-700">
                                    {data.responsabilidades?.map(
                                        (_task, indexChld) => (
                                            <li key={indexChld}>
                                                {t(
                                                    `experiencia_laboral.${index}.responsabilidades.${indexChld}`
                                                )}
                                            </li>
                                        )
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </MotionTransition>
            </div>
        </div>
    );
};

export default ExperienceTimeLine;
