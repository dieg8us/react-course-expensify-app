// Set text filter
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// Sort by Amount
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

// Sort by Date
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// Set start date
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});

// Set end date
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});

export { 
  setTextFilter, 
  sortByAmount, 
  sortByDate, 
  setStartDate, 
  setEndDate 
};