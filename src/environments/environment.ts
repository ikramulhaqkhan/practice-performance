// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const { version } = require('../../package.json');
export const environment = {
  production: false,
  appVersion: version,
  // Local Paths 
  // URL_ARDashboard: 'http://localhost:8292/ARDashboard.aspx',
  // // // baseURLNew: ' https://localhost:44320/api/',

  // baseURLNew: 'http://192.168.10.12:8081/api/',
  // ServicePathIntegration: 'http://localhost:7919/',
  // EligibilityPathIntegration: 'https://eligibilityapiapp.altumed.com/api/',
  EligibilityIntegrationV2: 'https://qaeligibilityapiv2.altumed.com/api/',
  EligibilityWebApp: 'http://localhost:4400/',
  // SubmissionApiEndpoint: 'http://192.168.10.12:61704/',
  // redirectServicePathIntegration: 'http://localhost:8292/',
  // // claimApiURL: 'http://192.168.10.12:8086/api/',
  // claimApiURL: 'https://localhost:8086/api/',
  // interoperabilityIntegration: 'https://localhost:5001/',
  // scrubberPath: 'http://dev.epm.com:13604/',
  // PaymentAPIEndpoint: 'https://localhost:5001/',
  // denialAiApiPath: 'https://ai.altumed.com:5000/',

  //UAT
  // URL: 'http://applogin.altumed.com/ARDashboard.aspx',
  // baseURLNew: 'https://appartrackerapi.altumed.com/api/',
  // ServicePathIntegration: 'https://appsetting.altumed.com/',
  // redirectServicePathIntegration: 'https://applogin.altumed.com/',
  // claimApiURL: 'http://192.168.10.12:8086/api/',
  //PaymentAPIEndpoint: 'https://qapaymentpostingapi.altumed.com/',
  //denialAiApiPath: 'https://ai.altumed.com:5000/',

  //QA
  //baseURLNew: ' https://localhost:44320/api/',
  // URL_ARDashboard: 'https://qalogin.altumed.com/ARDashboard.aspx',
  // baseURLNew: 'https://qaartrackerapi.altumed.com/api/',
  // CurrentUserSessionID: 'cc8d4f9c-5481-d52c-8f52-7d58243ce3ce',
  // ServicePathIntegration: 'https://qasetting.altumed.com/',
  // EligibilityPathIntegration: 'https://qaeligibilityapi.altumed.com/api/',
  // SubmissionApiEndpoint: 'https://qaautosubmissionapi.altumed.com/',
  // redirectServicePathIntegration: 'https://qalogin.altumed.com/',
  // claimApiURL: 'https://qaclaimapi.altumed.com/api/',
  // interoperabilityIntegration: 'https://qaintegration.altumed.com/',
  //denialAiApiPath: 'https://ai.altumed.com:5000/',

  //NLB
  URL_ARDashboard: 'https://loginapp.altumed.com/ARDashboard.aspx',
  baseURLNew: 'https://artrackerapiapp.altumed.com/api/',
  CurrentUserSessionID: 'cc8d4f9c-5481-d52c-8f52-7d58243ce3ce',
  ServicePathIntegration: 'https://settingapp.altumed.com/',
  EligibilityPathIntegration: 'https://eligibilityapiapp.altumed.com/api/',
  SubmissionApiEndpoint: 'https://autosubmissionapiapp.altumed.com/',
  redirectServicePathIntegration: 'https://loginapp.altumed.com/',
  claimApiURL: 'https://claimapiapp.altumed.com/api/',
  interoperabilityIntegration: 'https://integrationappca.altumed.com/',
  PaymentAPIEndpoint: 'https://paymentpostingapiapp.altumed.com/',
  scrubberPath: 'https://scrubberapiapp.altumed.com/',
  denialAiApiPath: 'https://ai.altumed.com:5000/',
  AuthURL: 'https://appcubecaa.altumed.com/',
  JsReportServer : "https://reportapp.altumed.com"
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
