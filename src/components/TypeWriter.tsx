"use client";
import Typewriter from 'typewriter-effect';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';



export default function TypeWriter() {

    return (
        <Typewriter
            options={{
                strings: ['motivates kids', 'tracks growth', 'reminds parents', 'gamifies success', 'involves family',],
                autoStart: true,
                loop: true,
                cursor: '',
                wrapperClassName: 'typewriter text-accent',
                cursorClassName: 'cursor',
            }}
        />
    );
}



export const TypingMachine = ({ text = 'Hello, World!', speed = 70, fontSize = 'text-2xl', color = 'text-gray-800', fontStyle = '' }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeoutId = setTimeout(() => {
                setDisplayedText((prev) => prev + text[currentIndex]);
                setCurrentIndex((prev) => prev + 1);
            }, speed); // Adjust typing speed for smooth effect

            return () => clearTimeout(timeoutId);
        } else {
            setIsComplete(true);
        }
    }, [currentIndex, text, speed]);

    return (
        <div className="flex items-center justify-center min-h-52" >
            <motion.div
                className={`font-mono ${fontSize} ${color} ${fontStyle}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {displayedText.split('').map((char, index) => (
                    <motion.span key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.1 }}>
                        {char}
                    </motion.span>
                ))}
                {!isComplete && (
                    <motion.span
                        className="animate-blink"  // Add Tailwind Config
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ repeat: Infinity, duration: 1 }}
                    >
                        |
                    </motion.span>
                )}
            </motion.div>
        </div>
    );
};






export const WordsRotating = () => {
    const words = ["DynaUI", "React", "Framer", "Motion", "GSAP", "Tailwind"];

    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000); // Change word every 2 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-20 w-40 overflow-hidden">
            <AnimatePresence>
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    exit={{ opacity: 0, y: -50, rotateX: 90 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <span className="text-4xl font-bold">{words[index]}</span>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};
