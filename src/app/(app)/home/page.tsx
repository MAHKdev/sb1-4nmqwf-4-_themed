//HOME

'use client';
import { Suspense } from 'react';
import SuspenseFallback from '@/components/ui/SuspenseFallback';


import React, { useState } from 'react';
import { Pencil, Gift } from 'lucide-react';
import Link from 'next/link';
import { ChildCard } from '@/components/ChildCard';
import { ChildSelector } from '@/components/ChildSelector';
import { useAppStore } from '@/store/useAppStore';
import { ActivityLog } from '@/components/ActivityLog';
import { Modal } from '@/components/ui/Modal';
import { ChildForm } from '@/components/forms/ChildForm';
import { GoalProgress } from '@/components/GoalProgress';
import { PerformanceCalendar } from '@/components/PerformanceCalendar';

import SpinningWheel from '@/components/Spinner';

function HomeScreen() {
  const { activeChild, updateChild } = useAppStore();
  const [isEditing, setIsEditing] = useState(false);

  if (!activeChild) return null;

  return (
    <div className="space-y-8">

      {/*}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">{activeChild.name}'s Dashboard</h2>
        <div className="flex gap-2">
          <Link href="/rewards" className="btn btn-primary btn-sm">
            <Gift className="w-4 h-4 mr-2" />
            Spend Points
          </Link>
        </div>
      </div>
      */}

      <GoalProgress />

      <PerformanceCalendar />

      <ChildCard />
      <ActivityLog />
      <SpinningWheel />

    </div>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={<SuspenseFallback />}>
      <HomeScreen />
    </Suspense>
  );
}