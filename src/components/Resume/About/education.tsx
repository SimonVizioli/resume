import dataCV from "@/utils/data";
import { MotionTransition } from "@/utils/transition-component";

const EducationTimeline = () => {
    return (
        <div className="flex flex-col justify-center divide-y divide-slate-200">
            <div className="md:w-full w-3/4 max-w-3xl mx-auto py-28 sm:py-32 lg:py-48">
                <MotionTransition position="right" className="overflow-hidden">
                    <h2 className="text-3xl font-extrabold pb-2 mb-5">
                        Formación Académica
                    </h2>
                </MotionTransition>
                <MotionTransition position="bottom" className="overflow-hidden">
                    <div className="my-3 ">
                        {dataCV.formacion_academica.map((data) => (
                            <div
                                key={data.id}
                                className="relative py-6 pl-8 sm:pl-32 group"
                            >
                                <h3 className="mb-1 md:text-2xl text-lg font-bold sm:mb-0">
                                    {data.institucion}
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
                                    <div className="md:text-xl text-lg font-bold text-gray-400">
                                        {data.titulo}
                                    </div>
                                </div>
                                <div className="text-slate-400">
                                    {data.especializacion?.map((item) => (
                                        <li>{item}</li>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </MotionTransition>
            </div>
        </div>
    );
};

export default EducationTimeline;
