
export function getMixtapes(theUrl, callback){
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", theUrl, true); // true for asynchronous requests
        xmlHttp.onreadystatechange = function() {

	        if(xmlHttp.readyState == XMLHttpRequest.DONE && xmlHttp.status == 200) {
	            callback(JSON.parse(xmlHttp.response));
	    	}
	    }
        xmlHttp.send(null);
}
//Unconfigured methods
export function addMixtapes(theUrl){}

export function modifieMixtapes(theUrl){}

export function deleteMixtapes(theUrl){}

	

