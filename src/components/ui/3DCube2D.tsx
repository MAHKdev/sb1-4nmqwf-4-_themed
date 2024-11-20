'use client';
import React from 'react';
import { motion } from 'framer-motion';

const RotatingCube = () => {
    const cubeVariants = {
        animate: {
            rotateX: [0, 360],
            rotateY: [0, 360],
            rotateZ: [0, 360],
            transition: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 10,
                ease: 'linear',
            },
        },
    } as any;

    const faceStyles = {
        position: 'absolute' as const,
        width: '200px',
        height: '200px',
        background: 'rgba(255, 255, 255, 0.8)',
        border: '2px solid #ccc',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center' as const,
    };

    return (
        <div
            style={{
                perspective: '1000px',
                width: '200px',
                height: '200px',
                position: 'relative',
            }}
        >
            <motion.div
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    transformStyle: 'preserve-3d',
                }}
                variants={cubeVariants}
                animate="animate"
            >
                <div style={{ ...faceStyles, transform: 'rotateY(0deg) translateZ(100px)', background: '#ff6666' }}>
                    Front
                </div>
                <div style={{ ...faceStyles, transform: 'rotateY(180deg) translateZ(100px)', background: '#66b3ff' }}>
                    Back
                </div>
                <div style={{ ...faceStyles, transform: 'rotateY(-90deg) translateZ(100px)', background: '#ffcc66' }}>
                    Left
                </div>
                <div style={{ ...faceStyles, transform: 'rotateY(90deg) translateZ(100px)', background: '#99ff99' }}>
                    Right
                </div>
                <div style={{ ...faceStyles, transform: 'rotateX(90deg) translateZ(100px)', background: '#ff99cc' }}>
                    Top
                </div>
                <div style={{ ...faceStyles, transform: 'rotateX(-90deg) translateZ(100px)', background: '#cc99ff' }}>
                    Bottom
                </div>
            </motion.div>
        </div>
    );
};

export default RotatingCube;
