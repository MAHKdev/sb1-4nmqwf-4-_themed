'use client';

import React, { useState, useEffect } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format, isValid } from 'date-fns';

interface DatePickerProps {
  date?: Date;
  onSelect: (date: Date | undefined) => void;
  label?: string;
  placeholder?: string;
  maxDate?: Date;
  minDate?: Date;
  required?: boolean;
}

export function DatePicker({
  date,
  onSelect,
  label,
  placeholder = 'Pick a date',
  maxDate,
  minDate,
  required = false,
}: DatePickerProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(date || null);

  useEffect(() => {
    if (date && isValid(date)) {
      setSelectedDate(date);
    }
  }, [date]);

  const handleDateChange = (newDate: Date | null) => {
    if (!newDate) {
      setSelectedDate(null);
      onSelect(undefined);
      return;
    }

    // Enforce min/max constraints
    if (minDate && newDate < minDate) {
      setSelectedDate(minDate);
      onSelect(minDate);
      return;
    }

    if (maxDate && newDate > maxDate) {
      setSelectedDate(maxDate);
      onSelect(maxDate);
      return;
    }

    setSelectedDate(newDate);
    onSelect(newDate);
  };

  return (
    <div className="form-control">
      {label && (
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
      )}
      <ReactDatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        placeholderText={placeholder}
        dateFormat="MMM dd, yyyy"
        maxDate={maxDate}
        minDate={minDate}
        //className="input input-bordered w-full"
        //popperClassName="react-datepicker-popper"
        //wrapperClassName="relative"
        popperPlacement="bottom"
        showPopperArrow={false}
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
      />
      {required && !selectedDate && (
        <label className="label">
          <span className="label-text-alt text-error">This field is required</span>
        </label>
      )}
    </div>
  );
}