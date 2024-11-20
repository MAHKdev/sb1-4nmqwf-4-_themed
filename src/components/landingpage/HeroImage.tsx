'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function MascotArrangement() {

    return (
        <>
            <div className="md:flex flex-col justify-center items-center absolute md:relative w-full -mr-60 md:mr-0 top-50 right-0 z-10">
                <div className="relative z-10">

                    <motion.div
                        className="absolute -right-10 -top-20"
                        animate={{ y: [0, -10, 0], x: [3, 6, -5, 3] }}
                        transition={{
                            duration: 12,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <Image
                            src="/icons/3dicons_500px/crown/front/color.png"
                            alt="icon"
                            width={220}
                            height={220}
                            priority
                        />
                    </motion.div>

                    <motion.div
                        className="absolute -left-[35%] top-1/2 -transform -translate-y-[30%]"
                        animate={{ x: [0, 10, 0], y: [0, -3, 6, 0], rotate: [0, 5, 0] }}
                        transition={{
                            duration: 22.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <Image
                            src="/icons/3dicons_500px/medal/front/color.png"
                            alt="icon"
                            width={260}
                            height={260}
                            priority
                        />
                    </motion.div>

                    <motion.div
                        className="relative"
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <Image
                            src="/DALLE2_raw.PNG"
                            alt="dodoball"
                            width={368}
                            height={368}
                            priority
                        />
                    </motion.div>

                    <motion.div
                        className="absolute right-1 -bottom-[14%]"
                        animate={{ x: [0, 6, -4, 0], y: [0, 8, -4, 0], rotate: [0, 5, -5, 0] }}
                        transition={{
                            duration: 20.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <Image
                            src="/icons/3dicons_500px/fire/front/color.png"
                            alt="icon"
                            width={230}
                            height={230}
                            priority
                        />
                    </motion.div>
                </div>
            </div>
        </>
    );
}