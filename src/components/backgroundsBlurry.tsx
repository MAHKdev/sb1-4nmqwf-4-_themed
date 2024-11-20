'use client';
import { useAnimation, motion } from 'framer-motion';

const BackgroundBlurry = () => {

    return (
        <motion.div
            id="animated-element"
            initial={{ opacity: 0, y: 230 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 230 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="absolute w-full"
            style={{ zIndex: -10}}
        >
            <div aria-hidden="true" className=" inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
                <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
                <div
                    className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"
                    style={{ animationDelay: '1s' }}
                ></div>
            </div>
        </motion.div>
    );
};

export default BackgroundBlurry;
