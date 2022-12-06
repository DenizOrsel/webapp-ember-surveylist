/* eslint-disable prettier/prettier */
import Component from '@glimmer/component';
import TableColumn from 'nfield-components/table/table-column';

 class Record {
  constructor({ SurveyId, SurveyName, SurveyType, SurveyState }) {
    this.id = SurveyId;
    this.SurveyName = SurveyName;
    this.SurveyType = SurveyType;
    this.SurveyState = SurveyState;
  }
}

export default class TableBasic extends Component {
  get columns() {
    return [
      new TableColumn('SurveyName'),
      new TableColumn('SurveyType'),
      new TableColumn('SurveyState'),
    ];
  }

  get records() {
    return this.args.survey.map((record) => new Record(record));
  }
}

