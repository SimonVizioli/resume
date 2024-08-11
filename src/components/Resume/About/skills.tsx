import { FaReact, FaNodeJs, FaJs, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { MdLanguage } from "react-icons/md";
import { GiBrain } from "react-icons/gi";
import { MotionTransition } from "@/utils/transition-component";
import dataCV from "@/utils/data";
import { ReactElement } from "react";

interface HardSkillIcons {
    [key: string]: ReactElement;
}

const Skills = () => {
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
                        Habilidades
                    </h2>
                </MotionTransition>
                <MotionTransition position="bottom" className="overflow-hidden">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
                        <div className="p-6 bg-white shadow-lg rounded-lg">
                            <h3 className="text-xl font-bold text-gray-600 mb-4 flex items-center">
                                <GiBrain className="text-2xl text-teal-500 mr-2" />{" "}
                                Hard Skills
                            </h3>
                            <ul className="space-y-4">
                                {dataCV.habilidades_adicionales.hard_skills.map(
                                    (skill, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center text-slate-600"
                                        >
                                            {hardSkillIcons[skill]}
                                            <span className="ml-2">
                                                {skill}
                                            </span>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>

                        <div className="p-6 bg-white shadow-lg rounded-lg">
                            <h3 className="text-xl font-bold text-gray-600 mb-4 flex items-center">
                                <MdLanguage className="text-2xl text-teal-500 mr-2" />{" "}
                                Idiomas
                            </h3>
                            <ul className="space-y-4">
                                {dataCV.habilidades_adicionales.idiomas.map(
                                    (language, index) => (
                                        <li
                                            key={index}
                                            className="text-slate-600"
                                        >
                                            {language.idioma} - {language.nivel}
                                            {language.institucion && (
                                                <span className="text-sm text-gray-500">
                                                    {" "}
                                                    ({language.institucion})
                                                </span>
                                            )}
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>

                        <div className="p-6 bg-white shadow-lg rounded-lg sm:col-span-2">
                            <h3 className="text-xl font-bold text-gray-600 mb-4 flex items-center">
                                <GiBrain className="text-2xl text-teal-500 mr-2" />{" "}
                                Soft Skills
                            </h3>
                            <ul className="space-y-4">
                                {dataCV.habilidades_adicionales.soft_skills.map(
                                    (skill, index) => (
                                        <li
                                            key={index}
                                            className="text-slate-600"
                                        >
                                            {skill}
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    </div>
                </MotionTransition>
            </div>
        </div>
    );
};

export default Skills;
