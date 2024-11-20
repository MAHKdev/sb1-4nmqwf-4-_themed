'use client';

import { redirect } from 'next/navigation';

import Logo from '@/components/Mascot';

import SpinningWheel from '@/components/Spinner';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Page() {

    return (
        <>
            <div className=" relative">



                <Logo />
                <svg width="101" height="101" viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M42.7544 4.90851C47.4833 1.91171 53.5167 1.91171 58.2456 4.90851V4.90851C60.734 6.48543 63.6444 7.26528 66.5878 7.14381V7.14381C72.1816 6.91297 77.4067 9.92965 80.0036 14.8894V14.8894C81.3702 17.4993 83.5007 19.6298 86.1106 20.9964V20.9964C91.0704 23.5933 94.087 28.8184 93.8562 34.4122V34.4122C93.7347 37.3556 94.5146 40.266 96.0915 42.7544V42.7544C99.0883 47.4833 99.0883 53.5167 96.0915 58.2456V58.2456C94.5146 60.734 93.7347 63.6444 93.8562 66.5878V66.5878C94.087 72.1816 91.0704 77.4067 86.1106 80.0036V80.0036C83.5007 81.3702 81.3702 83.5007 80.0036 86.1106V86.1106C77.4067 91.0704 72.1816 94.087 66.5878 93.8562V93.8562C63.6444 93.7347 60.734 94.5146 58.2456 96.0915V96.0915C53.5167 99.0883 47.4833 99.0883 42.7544 96.0915V96.0915C40.266 94.5146 37.3556 93.7347 34.4122 93.8562V93.8562C28.8184 94.087 23.5933 91.0704 20.9964 86.1106V86.1106C19.6298 83.5007 17.4993 81.3702 14.8894 80.0036V80.0036C9.92965 77.4067 6.91297 72.1816 7.14381 66.5878V66.5878C7.26528 63.6444 6.48543 60.734 4.90851 58.2456V58.2456C1.91171 53.5167 1.91171 47.4833 4.90851 42.7544V42.7544C6.48543 40.266 7.26528 37.3556 7.14381 34.4122V34.4122C6.91297 28.8184 9.92965 23.5933 14.8894 20.9964V20.9964C17.4993 19.6298 19.6298 17.4993 20.9964 14.8894V14.8894C23.5933 9.92965 28.8184 6.91297 34.4122 7.14381V7.14381C37.3556 7.26528 40.266 6.48543 42.7544 4.90851V4.90851Z" fill="url(#paint0_linear_609_599)" />
                    <circle cx="36.5" cy="39.5" r="5.5" fill="black" />
                    <circle cx="63.5" cy="39.5" r="5.5" fill="black" />
                    <circle cx="50.5" cy="53.5" r="2.5" fill="black" />
                    <defs>
                        <linearGradient id="paint0_linear_609_599" x1="6.01195e-07" y1="0.106266" x2="101" y2="100.894" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#F3F3F3" />
                            <stop offset="1" stop-color="#C0C0C0" />
                        </linearGradient>
                    </defs>
                </svg>



                <SpinningWheel />



            </div>
        </>
    );
}