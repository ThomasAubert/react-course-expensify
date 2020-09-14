import {setStartDate, setEndDate, sortByAmount, sortByDate, setTextFilter} from '../../actions/filters';
import moment from 'moment';

test('should generate set start date action object',
() => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('should generate set end date action object',
() => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test('should generation action object for sort by date', () =>{
  expect(sortByDate()).toEqual({
    type: 'SORT_BY_DATE'
  });
});

test('should generation action object for sort by amount', () =>{
  expect(sortByAmount()).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});

test('should generate set text filter object with text value', () =>{
  const someValue = 'bonjour';
  const action = setTextFilter(someValue);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: someValue
  });
});

test('should generate set text filter object for default', () =>{
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

