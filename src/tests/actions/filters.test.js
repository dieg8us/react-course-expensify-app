import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions/filters';
import moment from 'moment';

test('should setup setTextFilter expense filter object', () => {
  const filterParam = 'test';
  const filter = setTextFilter(filterParam);
  expect(filter).toEqual({
    type: 'SET_TEXT_FILTER',
    text: filterParam
  });
});

test('should setup setTextFilter default expense filter object', () => {
  const filter = setTextFilter();
  expect(filter).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('should setup sortByAmount expense filter object', () => {
  const filter = sortByAmount();
  expect(filter).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});

test('should setup sortByDate default expense filter object', () => {
  const filter = sortByDate();
  expect(filter).toEqual({
    type: 'SORT_BY_DATE'
  });
});

test('should setup setStartDate default expense filter object', () => {
  const dateParam = moment();
  const filter = setStartDate(dateParam);
  expect(filter).toEqual({
    type: 'SET_START_DATE',
    startDate: dateParam
  });
});

test('should setup setEndDate default expense filter object', () => {
  const dateParam = moment();
  const filter = setEndDate(dateParam);
  expect(filter).toEqual({
    type: 'SET_END_DATE',
    endDate: dateParam
  });
});

