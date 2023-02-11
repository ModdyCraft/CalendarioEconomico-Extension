let calendarApiHTML = document.createElement("iframe");
calendarApiHTML.src = "https://sslecal2.investing.com?columns=exc_flags,exc_currency,exc_importance,exc_actual,exc_forecast,exc_previous&category=_employment,_economicActivity,_inflation,_credit,_centralBanks,_confidenceIndex,_balance,_Bonds&importance=1,2,3&features=datepicker,timezone,filters&countries=29,25,32,6,37,72,22,17,39,14,10,35,43,125,56,36,110,11,26,12,4,5&calType=week&timeZone=8&lang=1";
calendarApiHTML.className = "iframe-content";
calendarApiHTML.title = "Investing.com";

const poweredBy = document.getElementsByClassName("poweredBy")[0];
const progressBar = document.getElementsByClassName("progress-bar")[0];
const iframeContainer = document.getElementsByClassName("iframe-container")[0];

function loadCalendar(){
    iframeContainer.appendChild(calendarApiHTML);
};

calendarApiHTML.onload = function(){
    progressBar.setAttribute("style", "display: none;");
    poweredBy.setAttribute("style", "display: block;");
    iframeContainer.setAttribute("style", "display: block;");
    calendarApiHTML.width = "650";
    calendarApiHTML.height = "467";
};

setTimeout(function(){
    loadCalendar();
}, 100);

chrome.storage.local.get('colorBackgorund', function(items){
    console.log(items.colorBackground);
});