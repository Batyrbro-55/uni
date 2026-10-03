export const planningTasks=[
 ['eligibility','Check school qualification and funding eligibility'],
 ['account','Create application account and choose entry term'],
 ['transcript','Request transcript, predicted grades and translations'],
 ['references','Invite required teacher / counselor recommenders'],
 ['essays','Finish personal statement and required supplements'],
 ['english','Check IELTS validity and score delivery'],
 ['aid','Complete required aid forms and financial documents'],
 ['submit','Submit application and check receipt in applicant portal'],
] as const;
export const planningTaskIds=planningTasks.map(([id])=>id);
