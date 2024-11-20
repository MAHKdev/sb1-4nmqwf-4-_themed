import React, { useState, useMemo } from 'react';
import { useAppStore } from '@/store/useAppStore';
import { ComposedChart, XAxis, YAxis, Line, ResponsiveContainer, Tooltip, ReferenceLine } from 'recharts';
import dayjs from 'dayjs';
import data from '@/components/growth/HFAWFA_data.json';
import { Ruler, Weight } from 'lucide-react';

const HFAWFAChart = () => {
    const { activeChild, updateChild } = useAppStore();
    const [measurementType, setMeasurementType] = useState<'hfa' | 'wfa'>('hfa');
    const [predictionModel, setPredictionModel] = useState<'khamis-roche'>('khamis-roche');

    // Reference data
    const referenceData = useMemo(() => {
        const hfa_boys_data = data.hfa_boys_perc_WHO2007_exp.map((item) => ({
            month: item.Month,
            P3: item.P3,
            P50: item.P50,
            P97: item.P97,
            gender: 'male',
            indextype: 'hfa',
        }));

        const hfa_girls_data = data.hfa_girls_perc_WHO2007_exp.map((item) => ({
            month: item.Month,
            P3: item.P3,
            P50: item.P50,
            P97: item.P97,
            gender: 'female',
            indextype: 'hfa',
        }));

        const wfa_boys_data = data.wfa_boys_perc_WHO2007_exp.map((item) => ({
            month: item.Month,
            P3: item.P3,
            P50: item.P50,
            P97: item.P97,
            gender: 'male',
            indextype: 'wfa',
        }));

        const wfa_girls_data = data.wfa_girls_perc_WHO2007_exp.map((item) => ({
            month: item.Month,
            P3: item.P3,
            P50: item.P50,
            P97: item.P97,
            gender: 'female',
            indextype: 'wfa',
        }));

        return [...hfa_boys_data, ...hfa_girls_data, ...wfa_boys_data, ...wfa_girls_data];
    }, []);

    // Filter reference data
    const filteredReferenceData = useMemo(() => {
        if (!activeChild) return [];
        const gender = activeChild.gender === 'male' ? 'male' : 'female';
        return referenceData.filter(
            (item) => item.gender === gender && item.indextype === measurementType
        );
    }, [activeChild, measurementType, referenceData]);

    // Combine child data and reference data
    const combinedData = useMemo(() => {
        if (!activeChild?.growthData || !activeChild.birthDate) return [];

        const birthDate = dayjs(activeChild.birthDate);

        const childMeasurements = activeChild.growthData.map((entry) => ({
            month: dayjs(entry.date).diff(birthDate, 'month'),
            measuredHeight: entry.height,
            measuredWeight: entry.weight,
        }));

        const months = Array.from(
            new Set([
                ...filteredReferenceData.map((d) => d.month),
                ...childMeasurements.map((d) => d.month),
            ])
        ).sort((a, b) => a - b);

        return months.map((month) => {
            const referenceItem = filteredReferenceData.find((d) => d.month === month);
            const childItem = childMeasurements.find((d) => d.month === month);
            return {
                month,
                ...referenceItem,
                measuredHeight: childItem?.measuredHeight || null,
                measuredWeight: childItem?.measuredWeight || null,
            };
        });
    }, [filteredReferenceData, activeChild]);

    // Y-axis domain
    const yAxisDomain = useMemo(() => {
        const allValues = combinedData.flatMap((d) => [
            d.P3,
            d.P50,
            d.P97,
            d.measuredHeight,
            d.measuredWeight,
        ]).filter((val) => val !== undefined && val !== null);
        return [
            Math.floor(Math.min(...allValues) / 5) * 5,
            Math.ceil(Math.max(...allValues) / 5) * 5,
        ];
    }, [combinedData]);

    // Parent Heights
    const parentHeights = useMemo(() => {
        if (!activeChild?.parentHeights) return [];
        return [
            { label: 'Mother', value: activeChild.parentHeights.mother },
            { label: 'Father', value: activeChild.parentHeights.father },
        ];
    }, [activeChild]);

    const CustomCrossDot = ({ cx, cy, stroke }: any) =>
        cx && cy ? (
            <svg x={cx - 5} y={cy - 5} width={10} height={10} viewBox="0 0 10 10" fill="none" stroke={stroke} strokeWidth="2">
                <line x1="5" y1="0" x2="5" y2="10" />
                <line x1="0" y1="5" x2="10" y2="5" />
            </svg>
        ) : null;

    if (!combinedData.length) return <div>No data available</div>;


    const minMonth = Math.min(
        ...filteredReferenceData.map((d) => d.month),
        ...activeChild?.growthData.map((d) => dayjs(d.date).diff(dayjs(activeChild.birthDate), 'month')) || []
    );

    const maxMonth = Math.max(
        ...filteredReferenceData.map((d) => d.month),
        ...activeChild?.growthData.map((d) => dayjs(d.date).diff(dayjs(activeChild.birthDate), 'month')) || []
    );


    return (
        <div className="w-full">
            {/* Measurement Type and Prediction Model Selection */}
            <div className="flex gap-2 flex-wrap justify-between mb-4">
                <button
                    className={`btn ${measurementType === 'hfa' ? 'btn-primary' : 'btn-ghost'}`}
                    onClick={() => setMeasurementType('hfa')}
                >
                    <Weight className="mr-2" />
                    Height
                </button>
                <button
                    className={`btn  ${measurementType === 'wfa' ? 'btn-primary' : 'btn-ghost'}`}
                    onClick={() => setMeasurementType('wfa')}
                >
                    <Ruler className="mr-2" />
                    Weight
                </button>
                <select
                    className="select select-bordered select-sm"
                    value={predictionModel}
                    onChange={(e) => setPredictionModel(e.target.value as 'khamis-roche')}
                >
                    <option value="khamis-roche">Khamis-Roche</option>
                </select>
            </div>

            {/* Chart */}
            <div className="relative w-full h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={combinedData}>
                        <XAxis
                            dataKey="month"
                            scale="linear"
                            ticks={Array.from(
                                { length: Math.floor(maxMonth / 12) - Math.floor(minMonth / 12) + 1 },
                                (_, i) => Math.floor(minMonth / 12) * 12 + i * 12
                            )} // Dynamically generate ticks for each year
                            tickFormatter={(tick) => `${Math.floor(tick / 12)}`} // Format months as years
                            label={{
                                value: 'Age in years',
                                position: 'insideBottomRight',
                                offset: -5,
                                fontSize: 12,
                            }}
                            padding={{ left: 0, right: 0 }} // Remove extra padding on the edges
                            className="text-sm font-bold z-10 overflow-visible"

                        />
                        <YAxis
                            domain={['dataMin', 'dataMax']} // Dynamically adjusts to data range
                            padding={{ top: 0, bottom: 0 }} // Removes extra space on top and bottom
                            type="number" // Ensures the axis is numerical
                            tickCount={10} // Define the number of ticks
                            allowDecimals={false} // Optional: Disallow decimal tick values for clarity
                            className="text-sm font-bold z-10 overflow-visible"
                            tickFormatter={(value: number) => {
                                const minValue = Math.floor(combinedData[0]?.measuredHeight ?? 0); // Exact minimum value
                                const maxValue = Math.ceil(combinedData[combinedData.length - 1]?.measuredHeight ?? 0); // Exact maximum value
                                if (value === minValue || value === maxValue) {
                                    return value.toString(); // Show exact minimum and maximum values
                                }
                                return (Math.round(value / 10) * 10).toString(); // Round other values to the nearest 10
                            }}

                        />
                        <Tooltip />
                        {/* Horizontal Lines 
                        {combinedData.map((d, i) =>
                            d.measuredHeight || d.measuredWeight ? (
                                <ReferenceLine key={i} y={d.measuredHeight || d.measuredWeight} stroke="#ccc" />
                            ) : null
                        )}
                            */}
                        {/* Lines */}
                        {/* Lines for WHO Reference Data */}
                        <Line
                            type="monotone"
                            dataKey="P97"
                            stroke="#8884d8"
                            dot={false}
                            isAnimationActive={false}
                            style={{ pointerEvents: 'none' }} // <--- Disable pointer events
                            tooltipType="none" // <--- Disable tooltips
                        />
                        <Line
                            type="monotone"
                            dataKey="P50"
                            stroke="#ffc658"
                            dot={false}
                            isAnimationActive={false}
                            style={{ pointerEvents: 'none' }} // <--- Disable pointer events
                            tooltipType="none" // <--- Disable tooltips
                        />
                        <Line
                            type="monotone"
                            dataKey="P3"
                            stroke="#82ca9d"
                            dot={false}
                            isAnimationActive={false}
                            style={{ pointerEvents: 'none' }} // <--- Disable pointer events
                            tooltipType="none" // <--- Disable tooltips
                        />
                        <Line
                            type="monotone"
                            dataKey={measurementType === 'hfa' ? 'measuredHeight' : 'measuredWeight'}
                            stroke="#dc2626"
                            dot={<CustomCrossDot stroke="#dc2626" />}
                        />
                        {parentHeights.map((parent, i) => (
                            <ReferenceLine
                                key={i}
                                y={parent.value}
                                stroke={i === 0 ? '#34d399' : '#60a5fa'}
                                label={{ value: parent.label, position: 'insideRight', fill: i === 0 ? '#34d399' : '#60a5fa' }}
                            />
                        ))}
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default HFAWFAChart;
