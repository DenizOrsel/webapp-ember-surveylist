import Route from '@ember/routing/route';

export default class SurveysRoute extends Route {
  async model() {
    const url = 'http://localhost:8080/v1/Surveys';
    const res = await fetch(url);
    const data = await res.json();
    const surveyName = data.Surveys.map((surveys) => surveys.SurveyName);
    return surveyName;
  }
}
