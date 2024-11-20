//GROWTH
'use client';

import { Suspense } from 'react';
import SuspenseFallback from '@/components/ui/SuspenseFallback';

import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useTheme } from 'next-themes';
import { ChildSelector } from '@/components/ChildSelector';
import { useAppStore } from '@/store/useAppStore';
import { whoGrowthData } from '@/utils/whoGrowthData';
import { format, differenceInMonths, parseISO } from 'date-fns';
import { GrowthStats } from '@/components/growth/GrowthStats';
import { GrowthSummary } from '@/components/growth/GrowthSummary';
import { Modal } from '@/components/ui/Modal';
import { GrowthEntryForm } from '@/components/growth/GrowthEntryForm';
import { ParentHeightForm } from '@/components/forms/ParentHeightForm';
import { BirthDateSetter } from '@/components/growth/BirthDateSetter';
import { Plus } from 'lucide-react';

import HFAWFAChart from '@/components/growth/HFAWFAChart';

function GrowthScreen() {
  const { theme } = useTheme();
  const { activeChild, updateChild } = useAppStore();
  const [isAddingEntry, setIsAddingEntry] = useState(false);
  const [isEditingParentHeights, setIsEditingParentHeights] = useState(false);
  const [isSettingBirthDate, setIsSettingBirthDate] = useState(false);
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    if (!activeChild?.birthDate || !activeChild.growthData.length) {
      setChartData([]);
      return;
    }

    const birthDate = parseISO(activeChild.birthDate);
    const newChartData = activeChild.growthData.map(entry => {
      const ageInMonths = differenceInMonths(parseISO(entry.date), birthDate);
      const whoData = whoGrowthData.find(d => d.months >= ageInMonths) || whoGrowthData[0];
      const gender = activeChild.gender === 'male' ? 'Boys' : 'Girls';

      return {
        date: entry.date,
        height: entry.height,
        weight: entry.weight,
        [`heightP50${gender}`]: whoData[`height${gender}`].p50,
        [`heightP3${gender}`]: whoData[`height${gender}`].p3,
        [`heightP97${gender}`]: whoData[`height${gender}`].p97,
        [`weightP50${gender}`]: whoData[`weight${gender}`].p50,
        [`weightP3${gender}`]: whoData[`weight${gender}`].p3,
        [`weightP97${gender}`]: whoData[`weight${gender}`].p97,
      };
    });

    setChartData(newChartData);
  }, [activeChild]);

  const colors = {
    retro: {
      height: '#2563eb',
      weight: '#dc2626',
      grid: '#cbd5e1',
      reference: '#94a3b8',
    },
    dark: {
      height: '#60a5fa',
      weight: '#f87171',
      grid: '#475569',
      reference: '#64748b',
    },
  };

  const currentColors = theme === 'dark' ? colors.dark : colors.retro;

  if (!activeChild) return null;

  const gender = activeChild.gender === 'male' ? 'Boys' : 'Girls';

  if (!activeChild.birthDate) {
    return (
      <div className="space-y-8">
        <div className="alert alert-warning">
          <span>Please set the birth date to enable growth tracking</span>
          <button
            onClick={() => setIsSettingBirthDate(true)}
            className="btn btn-sm"
          >
            Set Birth Date
          </button>
        </div>

        {isSettingBirthDate && (
          <BirthDateSetter
            child={activeChild}
            onSave={(date) => {
              updateChild(activeChild.id, { birthDate: date.toISOString() });
              setIsSettingBirthDate(false);
            }}
            onCancel={() => setIsSettingBirthDate(false)}
          />
        )}
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <div className="card bg-base-200 p-6">

        <HFAWFAChart />
        <div className="flex justify-end pt-4">
          <button
            onClick={() => setIsAddingEntry(true)}
            className="btn btn-primary"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Measurement
          </button>
        </div>

      </div>

      <GrowthStats child={activeChild} />

      <GrowthSummary
        child={activeChild}
        onEditParentHeights={() => setIsEditingParentHeights(true)}
      />


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

      </div>

      <Modal
        isOpen={isAddingEntry}
        onClose={() => setIsAddingEntry(false)}
      >
        <GrowthEntryForm
          onSubmit={(entry) => {
            //updateChildGrowth(activeChild.id, {
            //  id: Date.now().toString(),
            //  ...entry,
            // });
            setIsAddingEntry(false);
          }}
          onClose={() => setIsAddingEntry(false)}
        />
      </Modal>

      <Modal
        isOpen={isEditingParentHeights}
        onClose={() => setIsEditingParentHeights(false)}
      >
        <ParentHeightForm
          child={activeChild}
          onSubmit={(heights) => {
            updateChild(activeChild.id, {
              parentHeights: heights,
            });
            setIsEditingParentHeights(false);
          }}
          onClose={() => setIsEditingParentHeights(false)}
        />
      </Modal>
    </div>
  );
}

export default function GrowthPage() {
  return (
    <Suspense fallback={<SuspenseFallback />}>
      <GrowthScreen />
    </Suspense>
  );
}