
function httpGet(theUrl){
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open("GET", theUrl, false); // true for asynchronous request
    xmlHttp.send(null);
    
    return JSON.parse(xmlHttp.responseText);
}
var metadata = new Vue({
    el: '#metadata',
    data: {
    	metadata: httpGet("http://a6b4a4a271.testurl.ws/metadata/")
    },
})


