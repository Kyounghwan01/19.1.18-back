
/**  
* @param {org.acme.model.GradeUpdate} GradeUpdate transaction arguments
* @transaction  
*/

async function GradeUpdate(GradeUpdate){
	GradeUpdate.grade_prev.safetycheck_date=GradeUpdate.safetycheck_date_update;
	GradeUpdate.grade_prev.Electricity=GradeUpdate.Electricity_update;
  	GradeUpdate.grade_prev.Gas=GradeUpdate.Gas_update;
	GradeUpdate.grade_prev.Elevator=GradeUpdate.Elevator_update;
    GradeUpdate.grade_prev.Building=GradeUpdate.Building_update;
    GradeUpdate.grade_prev.FireSafety=GradeUpdate.FireSafety_update;
  	
  	
  	let assetRegistry=await getAssetRegistry('org.acme.model.Grade');
   	let participantRegistry=await getParticipantRegistry('org.acme.model.User');
  	
	let gradeUpdateNotification=getFactory().newEvent('org.acme.model', 'GradeUpdateNotification');
	gradeUpdateNotification.grade_prev=GradeUpdate.grade_prev;
	emit(gradeUpdateNotification);
	    
    await assetRegistry.update(GradeUpdate.grade_prev);
  	await participantRegistry.update(GradeUpdate.user);
}
