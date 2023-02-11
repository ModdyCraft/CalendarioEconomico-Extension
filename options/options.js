//Options variables
const apply = document.getElementById("nav-apply");
const colorPickerBackground = document.getElementById("data-background-color");
const colorPickerText = document.getElementById("data-text-color");
const colorPickerDividers = document.getElementById("data-dividers-color");
const colorPickerBorder = document.getElementById("data-border-color");

const iframeDefaultURL = "https://sslecal2.investing.com?columns=exc_flags,exc_currency,exc_importance,exc_actual,exc_forecast,exc_previous&features=datepicker,timezone&countries=25,32,6,37,72,22,17,39,14,10,35,43,56,36,110,11,26,12,4,5&calType=week&timeZone=8&lang=1";

    //Customize colors
let backgroundcolor;
const ecoDayBackground = "ecoDayBackground=%23" + backgroundcolor;

let textcolor;
const defaultFont = "defaultFont=%23" + textcolor;

let dividerscolor;
const innerBorderColor = "innerBorderColor=%23" + dividerscolor;

let bordercolor;
const borderColor = "borderColor=%23";

let datefonttext;
const ecoDayFontColor = "ecoDayFontColor=%23";

    //Default Time Zone
let timezone;
const timeZone = "timeZone=";

    //Customize Columns
const columns = "columns=";

let colunsData;
    
    //Calendar Type
const calType = "calType=";

let ctTimeZone;

    //Customize Countries
const customizeCountries = "countries=";

let countries;

    //Customize Category
const category = "category=";

let categorys;

    //Customize Importance
const importance = "importance=";

let importanceData;

    //Feature Selection
const features = "features=";

let featuresDate;

//Aqui cominza todo

//Obtener valores de color
colorPickerBackground.onchange = function() {
    backgroundcolor = this.value;
};

colorPickerText.onchange = function() {
    textcolor = this.value;
};

colorPickerDividers.onchange = function() {
    dividerscolor = this.value;
};

colorPickerBorder.onchange = function(){
    bordercolor = this.value;
};

//Print colors
apply.onclick = function() {
    console.log("Background Color: "+backgroundcolor);
    console.log("Text Color: "+textcolor);
    console.log("Dividers Color: "+dividerscolor)
};