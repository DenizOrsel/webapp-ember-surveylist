/* eslint-disable prettier/prettier */
import Component from '@glimmer/component';
import TableColumn from 'nfield-components/table/table-column';
import { Record, RECORDS } from './utils';

export default class TableBasic extends Component {
  get columns() {
    return [
      new TableColumn('column1'),
      new TableColumn('column2'),
      new TableColumn('column3'),
      new TableColumn('column4'),
      new TableColumn('column5'),
    ];
  }

  get records() {
    return RECORDS.map((record) => new Record(record));
  }
}
