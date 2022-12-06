/* eslint-disable prettier/prettier */
import Component from '@glimmer/component';
import TableColumn from 'nfield-components/table/table-column';
import { Record, RECORDS } from './utils';

export default class TableBasic extends Component {
  get columns() {
    return [
      new TableColumn('SurveyName'),
      new TableColumn('SurveyType'),
      new TableColumn('SurveyState'),
    ];
  }

  get records() {
    return RECORDS.map((record) => new Record(record));
  }
}
