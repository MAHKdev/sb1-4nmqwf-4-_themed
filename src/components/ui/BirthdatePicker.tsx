'use client';

import React, { useState, useEffect } from 'react';

interface DatePickerProps {
  date?: Date;
  onSelect: (date: Date | undefined) => void;
  label?: string;
  placeholder?: string;
  maxDate?: Date;
  minDate?: Date;
  required?: boolean;
}

export function BirthdatePicker({
  date,
  onSelect,
  label,
  placeholder = 'Select your birthdate',
  maxDate = new Date(),
  minDate = new Date(1900, 0, 1),
  required = false,
}: DatePickerProps) {
  // State for day, month, year
  const [day, setDay] = useState<number | ''>(
    date ? date.getDate() : ''
  );
  const [month, setMonth] = useState<number | ''>(
    date ? date.getMonth() + 1 : ''
  );
  const [year, setYear] = useState<number | ''>(
    date ? date.getFullYear() : ''
  );

  // Update state when the `date` prop changes
  useEffect(() => {
    if (date) {
      setDay(date.getDate());
      setMonth(date.getMonth() + 1);
      setYear(date.getFullYear());
    }
  }, [date]);

  // Helper: Days in a given month
  const daysInMonth = (year: number, month: number) =>
    new Date(year, month, 0).getDate();

  // Update the parent when values change
  const handleDateChange = () => {
    if (day && month && year) {
      const selectedDate = new Date(year, month - 1, day);

      // Enforce minDate and maxDate constraints
      if (selectedDate < minDate) {
        onSelect(minDate);
        return;
      }
      if (selectedDate > maxDate) {
        onSelect(maxDate);
        return;
      }

      onSelect(selectedDate);
    } else {
      onSelect(undefined);
    }
  };

  useEffect(() => {
    handleDateChange();
  }, [day, month, year]);

  return (
    <div className="form-control space-y-2">
      {label && (
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
      )}

      <div className="flex space-x-2">
        {/* Day Selector */}
        <select
          className="select select-bordered w-full"
          value={day}
          onChange={(e) => setDay(Number(e.target.value) || '')}
        >
          <option value="">Day</option>
          {Array.from(
            { length: month && year ? daysInMonth(year, month) : 31 },
            (_, i) => i + 1
          ).map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>

        {/* Month Selector */}
        <select
          className="select select-bordered w-full"
          value={month}
          onChange={(e) => setMonth(Number(e.target.value) || '')}
        >
          <option value="">Month</option>
          {[
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ].map((m, index) => (
            <option key={m} value={index + 1}>
              {m}
            </option>
          ))}
        </select>

        {/* Year Selector */}
        <select
          className="select select-bordered w-full"
          value={year}
          onChange={(e) => setYear(Number(e.target.value) || '')}
        >
          <option value="">Year</option>
          {Array.from(
            { length: maxDate.getFullYear() - minDate.getFullYear() + 1 },
            (_, i) => maxDate.getFullYear() - i
          ).map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>

      {/* Validation */}
      {required && (!day || !month || !year) && (
        <label className="label">
          <span className="label-text-alt text-error">
            Please select a valid date.
          </span>
        </label>
      )}

      {placeholder && !date && !day && !month && !year && (
        <p className="text-sm text-gray-500">{placeholder}</p>
      )}
    </div>
  );
}
