<template>	
	<div class="col-md-9">
		<table class="table table-condensed">
			<tr>
				<th>Mixtapes</th>
				<th>Artistes</th>
				<th></th>
			</tr>
			<tr class="link" style="text-align:left;" v-for="data in metadata">
				<td class="col-md-6" @click="displayDetails(data.id)">
					{{data.title}}
				</td>
				<td class="col-md-5" @click="displayDetails(data.id)">
					{{data.artist}}
				</td>
				<td><button type="button" class=" btn btn-dark glyphicon glyphicon-trash"></button></td>
			</tr>
		</table>
		<a href="#" class="col-md-12 btn glyphicon glyphicon-arrow-up"></a>
	</div>
</template>

<script>
export default {
	data(){
		return {
			metadata: null
		}
	},
	methods:{
		httpGet(theUrl){
			var xmlHttp = new XMLHttpRequest();
	  		xmlHttp.open("GET", theUrl, false); // true for asynchronous request
	  		xmlHttp.send(null);
	  		console.log(JSON.parse(xmlHttp.responseText));
	  		return JSON.parse(xmlHttp.responseText);
	  	},
	  	displayList() {
	  		this.$router.push({name: 'mixtapes'}); 
	  	}
	  	,
	  	displayDetails(idDetails) {
	  		this.$router.push({ name: 'mixtape',  params: { id: idDetails }}); 
	  	}
	},
	mounted(){
		this.metadata = this.httpGet("http://a6b4a4a271.testurl.ws/metadata/");
	}
}
</script>

<style>
</style>
