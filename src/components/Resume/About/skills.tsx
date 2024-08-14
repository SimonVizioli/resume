import { FaReact, FaNodeJs, FaJs, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { MdLanguage } from "react-icons/md";
import { GiBrain } from "react-icons/gi";
import { MotionTransition } from "@/utils/transition-component";
import dataCV from "@/utils/data";
import { ReactElement } from "react";
import { Trans, useTranslation } from "react-i18next";

interface HardSkillIcons {
    [key: string]: ReactElement;
}

const Skills = () => {
    const { t } = useTranslation();
    const hardSkillIcons: HardSkillIcons = {
        "React.js": <FaReact className="text-teal-500" />,
        JavaScript: <FaJs className="text-yellow-500" />,
        TypeScript: <SiTypescript className="text-blue-500" />,
        CSS: <FaCss3Alt className="text-blue-600" />,
        Tailwind: <SiTailwindcss className="text-teal-300" />,
        Git: <FaGitAlt className="text-orange-500" />,
        "Node.js": <FaNodeJs className="text-green-600" />,
    };

    return (
        <div className="flex flex-col justify-center divide-y divide-slate-200">
            <div className="md:w-full w-3/4 max-w-3xl mx-auto py-28 sm:py-32 lg:py-48">
                <MotionTransition position="right" className="overflow-hidden">
                    <h2 className="text-3xl font-extrabold pb-8 mb-10 ">
                        <Trans i18nKey={"HabilidadesH2"}>Habilidades</Trans>
                    </h2>
                </MotionTransition>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                    <MotionTransition
                        position="left"
                        className="overflow-hidden p-6 dark:bg-white bg-indigo-800 shadow-lg rounded-lg"
                    >
                        <h3 className="text-xl font-bold text-white dark:text-gray-600 mb-4 flex items-center">
                            <GiBrain className="text-2xl text-teal-500 mr-2" />{" "}
                            Hard Skills
                        </h3>
                        <ul className="space-y-4">
                            {dataCV.habilidades_adicionales.hard_skills.map(
                                (skill, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center dark:text-slate-600 text-white"
                                    >
                                        {hardSkillIcons[skill]}
                                        <span className="ml-2">{skill}</span>
                                    </li>
                                )
                            )}
                        </ul>
                    </MotionTransition>
                    <MotionTransition
                        position="right"
                        className="overflow-hidden p-6 dark:bg-white bg-indigo-800 shadow-lg rounded-lg h-full"
                    >
                        <h3 className="text-xl font-bold text-white dark:text-gray-600 mb-4 flex items-center">
                            <MdLanguage className="text-2xl text-teal-500 mr-2" />{" "}
                            <Trans i18nKey={"IdiomasH3"}>Idiomas</Trans>
                        </h3>
                        <ul className="space-y-4">
                            {dataCV.habilidades_adicionales.idiomas.map(
                                (language, index) => (
                                    <li
                                        key={index}
                                        className="dark:text-slate-600 text-white"
                                    >
                                        {t(`idiomas.${index}.idioma`)} -{" "}
                                        {t(`idiomas.${index}.nivel`)}
                                        {language.institucion && (
                                            <span className="text-sm dark:text-slate-500 text-white">
                                                {" "}
                                                ({language.institucion})
                                            </span>
                                        )}
                                    </li>
                                )
                            )}
                        </ul>
                    </MotionTransition>
                </div>
                <MotionTransition
                    position="bottom"
                    className="overflow-hidden p-6 dark:bg-white bg-indigo-800 shadow-lg rounded-lg sm:col-span-2 "
                >
                    <h3 className="text-xl font-bold text-white dark:text-gray-600 mb-4 flex items-center">
                        <GiBrain className="text-2xl text-teal-500 mr-2" /> Soft
                        Skills
                    </h3>
                    <ul className="space-y-4">
                        {dataCV.habilidades_adicionales.soft_skills.map(
                            (_skill, index) => (
                                <li
                                    key={index}
                                    className="dark:text-slate-600 text-white"
                                >
                                    {t(`soft_skills.${index}`)}
                                </li>
                            )
                        )}
                    </ul>
                </MotionTransition>
            </div>
        </div>
    );
};

export default Skills;
