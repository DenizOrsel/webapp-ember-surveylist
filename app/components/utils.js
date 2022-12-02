/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { tracked } from '@glimmer/tracking';

const RECORDS = [
  {
    id: 'record1',
    column1: 'Record 1, Value 1',
    column2: 'Record 1, Value 2',
    column3: 'Record 1, Value 3',
    column4: 'Record 1, Value 4',
    column5: 'Record 1, Value 5',
  },
  {
    id: 'record2',
    column1: 'Record 2, Value 1',
    column2: 'Record 2, Value 2',
    column3: 'Record 2, Value 3',
    column4: 'Record 2, Value 4',
    column5: 'Record 2, Value 5',
  },
  {
    id: 'record3',
    column1: 'Record 3, Value 1',
    column2: 'Record 3, Value 2',
    column3: 'Record 3, Value 3',
    column4: 'Record 3, Value 4',
    column5: 'Record 3, Value 5',
  },
  {
    id: 'record4',
    column1: 'Record 4, Value 1',
    column2: 'Record 4, Value 2',
    column3: 'Record 4, Value 3',
    column4: 'Record 4, Value 4',
    column5: 'Record 4, Value 5',
  },
];

export class Record {
  @tracked id;

  @tracked enabled;

  @tracked column1;
  @tracked column2;
  @tracked column3;
  @tracked column4;
  @tracked column5;

  constructor({ id, column1, column2, column3, column4, column5 }) {
    this.id = id;
    this.column1 = column1;
    this.column2 = column2;
    this.column3 = column3;
    this.column4 = column4;
    this.column5 = column5;
  }
}

export { RECORDS };
