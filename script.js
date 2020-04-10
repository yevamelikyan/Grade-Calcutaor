function calculateGrade(){
	  var HomeworkPercent=parseInt(document.getElementById("HomeworkPercent").innerHTML)
	  var Quiz1Percent=parseInt(document.getElementById("Quiz1Percent").innerHTML)
	  var Quiz2Percent=parseInt(document.getElementById("Quiz2Percent").innerHTML)
	  var ParticipationPercent=parseInt(document.getElementById("ParticipationPercent").innerHTML)
	  var AttendancePercent=parseInt(document.getElementById("AttendancePercent").innerHTML)
	

	  var HomeworkGrade=parseFloat(document.getElementById("HomeworkGrade").value)
	  var Quiz1Grade=parseFloat(document.getElementById("Quiz1Grade").value)
	  var Quiz2Grade=parseFloat(document.getElementById("Quiz2Grade").value)
	  var ParticipationGrade=parseFloat(document.getElementById("ParticipationGrade").value)
	  var AttendanceGrade=parseFloat(document.getElementById("AttendanceGrade").value)
	  
	  var Homework=HomeworkPercent*HomeworkGrade/100
	  var Quiz1= Quiz1Percent*Quiz1Grade/100
	  var Quiz2=Quiz2Percent+Quiz2Grade/100
	  var Participation= ParticipationPercent*ParticipationGrade/100
	  var Attendance= AttendancePercent*AttendanceGrade/100




	  var currentGrade=Homework+Quiz1+Quiz2+Participation+Attendance
	  console.log(currentGrade)


	

    document.getElementById("currentGrade").innerHTML=currentGrade
  }

