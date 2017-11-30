//API requests functions
import * as url from '../url.js';

export function getMixtapes(callback){
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", url.metadataUrl(), true); // true for asynchronous requests
        xmlHttp.onreadystatechange = function() {
	        if(xmlHttp.readyState == XMLHttpRequest.DONE && xmlHttp.status == 200) {
	            callback(JSON.parse(xmlHttp.response));
	    	}
	    }
        xmlHttp.send(null);
}
	//Unconfigured methods
export function addMixtapes(){}

export function modifieMixtapes(){}

export function deleteMixtapes(){}

//
export function getDetails(mixtapeId, data){
	for (var i = 0; i <= data.length; i++) {
	    if(data[i].id==mixtapeId){
		    var arraydetails = data[i];
	            return arraydetails;
        }
	}
}

	


