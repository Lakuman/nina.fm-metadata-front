<template>
	<div class="mixtape">
		<div class="col-md-5 col-sm-5 ">
			<div class="topData">
				<h1>{{details.title}}</h1>
				<h3>Artiste : {{details.artist}}</h3>
				<h3>Type : {{details.type}}</h3>
				<h3>Année : {{details.year}}</h3>
			</div>
		</div>
		<div class="col-md-5 col-sm-5 ">
			<img class="cover" v-bind:src= mixtapeCover></img>
		</div>
		<div class="col-md-5 col-sm-5" style="margin-left: 230px;">
			<table class=" table table-condensed">
				<tr>
					<th> Tracks</th>
				</tr>
				<tr v-for="mixtape in details.tracks">
					<td>{{mixtape.artist}} : {{mixtape.title}}</td>
				</tr>
			</table>
		</div>
		<div class="col-md-5 col-sm-5 ">
			<table class=" table table-condensed">
				<tr>
					<th> Text_tracks</th>
				</tr>
				<tr v-for="details in details.text_tracks">
					<td>
						{{details}}
					</td>
				</tr>
			</table>
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
		this.details.text_tracks = this.details.text_tracks.split("\n");
	}
}
</script>
<style>
</style>