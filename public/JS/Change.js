if ( !window.XMLHttpRequest )
	XMLHttpRequest = function(){
		return new ActiveXObject("Microsoft.XMLHTTP");
	};

function setActiveStyleSheet(title) {
  var i, a, main;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
      a.disabled = true;
      if(a.getAttribute("title") == title) a.disabled = false;
    }
  }
}

function changeLanguage(lang) {
	var req = new XMLHttpRequest();
	req.open('get', '../lang/calendar-'+lang+'.js', true);
	req.onreadystatechange = function() {
		if (req.readyState == 4 && req.status == 200) {
			eval(req.responseText + "\nflatCal.recreate();popupCal.recreate();");
		}
	};
	req.send(null);
}

function changeType(type) {
	document.getElementById('popup_calendar').style.display = type == 'flat' ? 'none' : 'block';
	document.getElementById('flat_calendar').style.display = type == 'flat' ? 'block' : 'none';
	if (type == 'flat') flatCal.setDate(popupCal.date);
}


function changeDateType(dateType) {
	flatCal.setDateType(dateType);
	popupCal.setDateType(dateType);
	popupCal.params.inputField.value = popupCal.date.print(popupCal.dateFormat, popupCal.dateType, popupCal.langNumbers);
}


function changeLangNumbers(value) {
	flatCal.setLangNumbers(value);
	popupCal.setLangNumbers(value);
}		

function showWeekNumbers(value) {
	flatCal.setWeekNumbers(value);
	popupCal.setWeekNumbers(value);
	
}

function showOtherMonths(value) {
	flatCal.setOtherMonths(value);
	popupCal.setOtherMonths(value);
}

function changeDateFormat(format) {
	flatCal.setDateFormat(format);
	popupCal.setDateFormat(format);
	popupCal.params.inputField.value = popupCal.date.print(popupCal.dateFormat, popupCal.dateType, popupCal.langNumbers);
}

function changeShowTime(value) {
	flatCal.setShowsTime(value);
	popupCal.setShowsTime(value);
}

function setTime24(value) {
	flatCal.setTime24(value);
	popupCal.setTime24(value);
}