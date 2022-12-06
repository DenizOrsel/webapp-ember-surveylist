/* eslint-disable prettier/prettier */
const RECORDS = [
  {
    SurveyId: 'record1',
    SurveyName: 'UX Research',
    SurveyType: 'Online',
    SurveyState: 'Started',
  },
  {
    SurveyId: 'record2',
    SurveyName: 'Customer Satisfaction',
    SurveyType: 'CAPI',
    SurveyState: 'Under Construction',
  },
];
export class Record {

  constructor({ SurveyId, SurveyName, SurveyType, SurveyState }) {
    this.id = SurveyId;
    this.SurveyName = SurveyName;
    this.SurveyType = SurveyType;
    this.SurveyState = SurveyState;
  }
}

export { RECORDS };
