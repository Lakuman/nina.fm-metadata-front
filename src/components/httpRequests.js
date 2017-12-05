import * as Url from '../url.js';

export function get(callback){
    var xml_http = new XMLHttpRequest();
    xml_http.open("GET", Url.URL_API, true); // true for asynchronous requests
    xml_http.onreadystatechange = function() {
	    if(xml_http.readyState == XMLHttpRequest.DONE && xml_http.status == 200) {
	        callback(JSON.parse(xml_http.response));
		}
	}
    xml_http.send(null);
}