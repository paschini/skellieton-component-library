/** @format */

const formatWeekDay = (weekDay: number, long?: boolean): string => {
  switch (weekDay) {
    case 0:
      return long ? 'Sunday' : 'Su';
    case 1:
      return long ? 'Monday' : 'Mo';
    case 2:
      return long ? 'Tuesday' : 'Tu';
    case 3:
      return long ? 'Wednesday' : 'We';
    case 4:
      return long ? 'Thursday' : 'Th';
    case 5:
      return long ? 'Friday' : 'Fr';
    case 6:
      return long ? 'Saturday' : 'Sa';
    default:
      return long ? 'Unknown' : 'Un';
  }
};

export const formatMonth = (month: number): string => {
  switch (month) {
    case 0:
      return 'January';
    case 1:
      return 'February';
    case 2:
      return 'March';
    case 3:
      return 'April';
    case 4:
      return 'May';
    case 5:
      return 'June';
    case 6:
      return 'July';
    case 7:
      return 'August';
    case 8:
      return 'September';
    case 9:
      return 'October';
    case 10:
      return 'November';
    case 11:
      return 'December';
    default:
      return 'Unknown';
  }
};

const createRange = (start: number, end: number): Array<number> => {
  const range = [];
  for (let count = start; count <= end; count++) {
    range.push(count);
  }
  return range;
};

export const createWeek = (): Array<string> => {
  const weekNumbers = createRange(0, 6);
  return weekNumbers.map((day) => formatWeekDay(day));
};

export const createMonth = (
  month: number,
  year: number
): Array<Array<number | null>> => {
  const firstOfMonth = new Date(year, month, 1);
  const firstWeekDay = firstOfMonth.getDay();
  const weeks: Array<Array<number | null>> = [[]];

  let currentWeek = weeks[0];
  let currentDate = firstOfMonth;

  for (let i = 0; i < firstWeekDay; i++) {
    currentWeek.push(null);
  }

  while (currentDate.getMonth() === month) {
    if (currentWeek.length === 7) {
      currentWeek = [];
      weeks.push(currentWeek);
    }

    currentWeek.push(currentDate.getDate());
    currentDate = new Date(year, month, currentDate.getDate() + 1);
  }

  while (currentWeek.length < 7) {
    currentWeek.push(null);
  }

  return weeks;
};
