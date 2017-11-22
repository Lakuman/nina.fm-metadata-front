<template>
	<div>
		<div class="col-md-4 col-sm-4">
			<table class="mixtape table table-condensed" style="margin-bottom:100px;">
				<tr>
					<td><h2 style="margin-bottom:30px;">{{details.title}}</h2></td>
				</tr>
				<tr>
					<th>Artist : {{details.artist}}</th>
				</tr>
				<tr >
					<th>Type : {{details.type}}</th>
				</tr>
			</table>
			<table class="mixtape table table-condensed">
				<tr v-for="data in details.tracks">
					<td>{{data.artist}} : {{data.title}}</td>
				</tr>
			</table>
		</div>
		<div class="col-md-3 col-sm-3">
			<table class="mixtape table table-condensed" >
				<tr>
					<td>
						<img style="margin-left:10px; margin-bottom: 50px; " v-bind:src= mixtapeCover height="auto" width="270px"></img>
					</td>	
				</tr>
				<tr>
					<td><div class="text_tracks">{{details.text_tracks}}</div></td>
				</tr>
			</table>
		</div>
	</div>	

</template>
<script>
import * as requests from './requests.js';
export default {
	data(){
		return {
			details: null,
			mixtapeCover:null
		}
	},
	methods:{
		displayCover(){
			return this.mycover;
		},
		getDetails(mixtapeId){
			this.metadata = requests.getMixtapes("http://a6b4a4a271.testurl.ws/metadata/");
		    for (var i = 0; i <= this.metadata.length; i++) {
		        if(this.metadata[i].id==mixtapeId){
		            var arraydetails = this.metadata[i];
		            return arraydetails;
		        }
          	}
        }
	},
	mounted(){
		this.details = this.getDetails(this.$route.params.id);
		var regexp = /\.[a-z]/;
		if(this.details.cover.search(regexp)!=-1){
			this.mixtapeCover = "http://a6b4a4a271.testurl.ws/metadata/"+this.details.cover;
		}
		else{
			this.mixtapeCover = "src/assets/No-image-found.jpg"; 
		}
	}
}
</script>
<style>
</style>