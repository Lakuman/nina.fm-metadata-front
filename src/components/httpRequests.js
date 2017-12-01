import * as url from '../url.js';


export function get(callback){
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", url.metadataUrl(), true); // true for asynchronous requests
        xmlHttp.onreadystatechange = function() {
	        if(xmlHttp.readyState == XMLHttpRequest.DONE && xmlHttp.status == 200) {
	            callback(JSON.parse(xmlHttp.response));
	    	}
	    }
        xmlHttp.send(null);
}