/** @format */

import React, { ReactElement, MouseEvent, useState } from 'react';
import style9 from 'style9';
import { useColors } from '../ThemeProvider/ThemeProvider';
import { createMonth, createWeek, formatMonth } from './DatePickerUtils';
import ChevronLeft from './icons/ChevronLeft';
import ChevronRight from './icons/ChevronRight';

const themeColors = useColors();

const DatePickerStyles = style9.create({
  container: {
    width: '200px',
    height: '240px',
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: themeColors.background,
    borderRadius: 10
  },
  titleBar: {
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    margin: 10,
    display: 'flex',
    justifyContent: 'space-between'
  },
  daysRow: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center' // add on hover highlights
  },
  days: {
    width: 20,
    height: 20,
    fontSize: 12,
    fontWeight: 'normal',
    textAlign: 'center',
    padding: 2,
    paddingTop: 5
  },
  hover: {
    ':hover': {
      cursor: 'pointer',
      backgroundColor: 'hotpink'
    }
  },
  highlight: {
    backgroundColor: 'hotpink'
  },
  icons: {
    cursor: 'pointer'
  }
});

export type DatePickerProps = {
  initialDate?: Date;
};

function DatePicker({
  initialDate = new Date(Date.now())
}: DatePickerProps): ReactElement {
  // const [referenceDay, setReferenceDay] = useState(initialDate?.getDay());

  const [referenceMonthName, setReferenceMonthName] = useState(
    formatMonth(initialDate?.getMonth()) // any functions that give out week days defaultly?
  );
  const [referenceMonthNumber, setReferenceMonthNumber] = useState(
    initialDate?.getMonth()
  );
  const [referenceYear, setReferenceYear] = useState(
    initialDate?.getFullYear()
  );

  const [selectedDay, setSelectedDay] = useState(initialDate?.getDate());

  const weekNames = createWeek();
  const daysInMonth = createMonth(referenceMonthNumber, referenceYear);

  const increaseMonth = () => {
    if (referenceMonthNumber === 11) {
      setReferenceYear((prev) => prev + 1);
      setReferenceMonthNumber(0);
      setReferenceMonthName(formatMonth(0));
    } else {
      setReferenceMonthNumber((prev) => prev + 1);
      setReferenceMonthName(formatMonth(referenceMonthNumber + 1));
    }
  };

  const decreaseMonth = () => {
    if (referenceMonthNumber === 0) {
      setReferenceYear((prev) => prev - 1);
      setReferenceMonthNumber(11);
      setReferenceMonthName(formatMonth(11));
    } else {
      setReferenceMonthNumber((prev) => prev - 1);
      setReferenceMonthName(formatMonth(referenceMonthNumber - 1));
    }
  };

  const selectDay = (event: MouseEvent<HTMLSpanElement>) => {
    if (event.target instanceof HTMLSpanElement) {
      event.target.className = DatePickerStyles('days', 'highlight');
      setSelectedDay(parseInt(event.target.innerHTML));
    }
  };

  const isSelected = (day: number | null): boolean => {
    return selectedDay === day;
  };

  const getDayClass = (day: number | null): string => {
    if (isSelected(day)) {
      return DatePickerStyles('days', 'highlight');
    }
    return DatePickerStyles('days', 'hover');
  };

  return (
    <div className={DatePickerStyles('container')}>
      <div className={DatePickerStyles('titleBar')}>
        <ChevronLeft
          size={16}
          color={'#FF69B4'}
          className={DatePickerStyles('icons')}
          onClick={decreaseMonth}
        />
        {referenceMonthName} {referenceYear}
        <ChevronRight
          size={16}
          color={'#FF69B4'}
          className={DatePickerStyles('icons')}
          onClick={increaseMonth}
        />
      </div>

      <div className={DatePickerStyles('daysRow')}>
        {weekNames.map((day, index) => (
          <span key={index} className={DatePickerStyles('days')}>
            {day}
          </span>
        ))}
      </div>

      {daysInMonth.map((week, wIndex) => (
        <div key={wIndex} className={DatePickerStyles('daysRow')}>
          {week.map((day, dIndex) => (
            <span key={dIndex} className={getDayClass(day)} onClick={selectDay}>
              {day}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default DatePicker;
