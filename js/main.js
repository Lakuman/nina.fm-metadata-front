function httpGet(theUrl){

				var xmlHttp = new XMLHttpRequest();
				xmlHttp.open("GET", theUrl, false); // true for asynchronous request
    			
    			xmlHttp.send(null);
    			console.log(JSON.parse(xmlHttp.responseText));	
    			return JSON.parse(xmlHttp.responseText);
			}
var metadata = new Vue({
    el: '#metadata',
    data: {
    	metadata: httpGet("http://a6b4a4a271.testurl.ws/metadata/")
    },
    mounted(){
        /* On enregistre dans un tableau les id des données qui ne nous interesse pas*/
        //var notWantedData = ["59be9d156840e","59be9d15684bb"]
        console.log(this.metadata)
        /* Retourne uniquement les instances remplis et qui n'ont pas l'ID spécifié dans le tableau : notWantedData*/
        /* Est ce que on doit afficher les mixtapes qui sont vides ? Code associé: item.tracks.length > 0*/
        this.metadata = this.metadata.filter(function(item){
            return Object.keys(item).length > 0 //&& notWantedData.indexOf(item.id) == -1
        })

        console.log(this.metadata)
    }
})
