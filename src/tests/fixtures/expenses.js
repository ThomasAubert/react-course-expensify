import moment from 'moment';


export default [{
  id: '1',
  description: 'tres bien',
  amount: 10,
  createdAt: 0,
  note: ''
}, {
  id: '2',
  description: 'peu bien',
  amount: 50,
  createdAt: moment(0).subtract(4, 'days').valueOf(),
  note: ''
}, {
  id: '3',
  description: 'beaucoup bien',
  amount: 30,
  createdAt: moment(0).add(4, 'days').valueOf(),
  note: ''
}];