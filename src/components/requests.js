
export function getMixtapes(theUrl){
         var xmlHttp = new XMLHttpRequest();
         xmlHttp.open("GET", theUrl, false); // true for asynchronous request
         xmlHttp.send(null);
         return JSON.parse(xmlHttp.responseText);

      }
//Unconfigured methods
export function addMixtapes(theUrl){}

export function modifieMixtapes(theUrl){}

export function deleteMixtapes(theUrl){}

	

