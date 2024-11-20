"use client"; // This makes this component a Client Component

import { useEffect } from 'react';
import useStore from '@/store/zustandStore';


const AppDataLoader = () => {
    const { syncFromSupabase }: any = useStore(); // Zustand store usage


    useEffect(() => {
        const fetchData = async () => {
            await syncFromSupabase(); // Fetch user data from Supabase
        };

        fetchData();
        console.log('AppDataLoader loaded');
    }, []); // Run once when the component mounts

    return null; // No UI to render
};

export default AppDataLoader;
