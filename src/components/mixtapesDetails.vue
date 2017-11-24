<template>
	<div>
		<div class="col-md-4 col-sm-4 mixtape">
			<div class="topData">
				<h1>{{details.title}}</h1>
				<h3>Artiste : {{details.artist}}</h3>
				<h3>Type : {{details.type}}</h3>
				<h3>Année : {{details.year}}</h3>
			</div>
			<table class="mixtape table table-condensed">
				<tr v-for="mixtape in details.tracks">
					<td>{{mixtape.artist}} : {{mixtape.title}}</td>
				</tr>
			</table>
		</div>
		<div class="col-md-3 col-sm-3 mixtape">
			<img class="cover" v-bind:src= mixtapeCover></img>
			<div>{{ details.text_tracks}}</div>
		</div>
	</div>	

</template>
<script>
import * as url from '../assets/url.js';
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
			this.metadata = requests.getMixtapes(url.metadataUrl());
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
		console.log(this.details.cover);
		if(this.details.cover.search(regexp)!=-1){
			this.mixtapeCover = url.metadataUrl()+this.details.cover;
		}
		else{
			this.mixtapeCover = "src/assets/No-image-found.jpg"; 
		}
	}
}
</script>
<style>
</style>