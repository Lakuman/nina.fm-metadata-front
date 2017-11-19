<template>
	<div>
		<div class="col-md-4 col-sm-4">
			<table class="table table-condensed">
				<tr>
					<td><h2>{{details.title}}</h2></td>
				</tr>
				<tr>
					<th>Artist : {{details.artist}}</th>
				</tr>
				<tr>
					<th>Type : {{details.type}}</th>
				</tr>
				<tr v-for="data in details.tracks">
					<td>{{data.artist}} : {{data.title}}</td>
				</tr>
			</table>
		</div>
		<div class="col-md-3 col-sm-3 text_tracks">{{details.text_tracks}}</div>
		<img id="imageBox" v-bind:src= mycover height="auto" width="300px"></img>

	</div>	

</template>
<script>
export default {
	data(){
		return {
			metadata: null,
			details: null,
			mycover:null
		}
	
		
	},
	methods:{
		httpGet(theUrl){
			var xmlHttp = new XMLHttpRequest();
			xmlHttp.open("GET", theUrl, false); // true for asynchronous request
			xmlHttp.send(null);
			return JSON.parse(xmlHttp.responseText);
		},
		getMixtape(mixtapeId){
			for (var i = 0; i <= this.metadata.length; i++) {
				if(this.metadata[i].id==mixtapeId){
					var arraydetails = this.metadata[i];
					return arraydetails;
				}
			}
		},
		displayCover(){
			return this.mycover;
		}



	},
	mounted(){
		this.metadata = this.httpGet("http://a6b4a4a271.testurl.ws/metadata/");
		this.details = this.getMixtape(this.$route.params.id);
		if((this.details.cover.search('.bmp')!=-1)||(this.details.cover.search('.jpg')!=-1)||(this.details.cover.search('.png')!=-1)||(this.details.cover.search('.jpeg')!=-1)){
			this.mycover = "http://a6b4a4a271.testurl.ws/metadata/"+this.details.cover;
		}
		else{
			this.mycover = "src/assets/No-image-found.jpg"; 
		}
		
		
		
	}
}
</script>
<style>
</style>