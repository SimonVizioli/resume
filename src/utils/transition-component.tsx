"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { fadeIn } from "./motion-tramsition";
import { useEffect, useRef } from "react";

export type MotionTransitionProps = {
    children: React.ReactNode;
    className?: string;
    position: "right" | "bottom";
};

export function MotionTransition(props: MotionTransitionProps) {
    const { children, className, position } = props;
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
            slideControls.start("visible");
        }
    }, [isInView]);

    return (
        <div ref={ref} className="relative overflow-hidden w-fit">
            <motion.div
                variants={fadeIn(position)}
                initial="hidden"
                animate={mainControls}
                className={className}
            >
                {children}
            </motion.div>
        </div>
    );
}
