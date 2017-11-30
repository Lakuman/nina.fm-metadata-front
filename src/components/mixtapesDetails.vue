<template>
	<div class="mixtape">
		<div class="col-md-5 col-sm-5 ">
			<div class="topData">
				<h1>{{details.title}}</h1>
				<h3>Artiste : {{details.artist}}</h3>
				<h3>Année : {{details.year}}</h3>
			</div>
		</div>
		<div class="col-md-5 col-sm-5 ">
			<img class="cover" v-bind:src= mixtapeCover></img>
		</div>
		<div class="col-md-5 col-sm-5" style="margin-left: 230px;">
			<table class=" table table-condensed">
				<tr>
					<th>Tracks</th>
				</tr>
				<tr v-for="mixtape in details.tracks">
					<td>{{mixtape.artist}} : {{mixtape.title}}</td>
				</tr>
			</table>
		</div>
		<div class="col-md-5 col-sm-5 ">
			<table class=" table table-condensed">
				<tr>
					<th>Text_tracks</th>
				</tr>
				<tr v-for="detail in details.text_tracks">
					<td>{{detail}}</td>
				</tr>
			</table>
		</div>
	</div>	

</template>
<script>
import * as url from '../url.js';
import * as requests from './requests.js';
export default {
	data(){
		return {
			details: null,
			mixtapeCover: null,
			metadata: null,
			testvalue: null
		}
	},
	methods:{
		displayCover(){
			return this.mycover;
		},
		getDetails(mixtapeId, data){
			for (var i = 0; i <= data.length; i++) {
		        if(data[i].id==mixtapeId){
			        var arraydetails = data[i];
		            return arraydetails;
		        }
      		}
        }
	},
	mounted(){
		var temp = this;
		requests.getMixtapes(url.metadataUrl(), function(data){
			temp.details = temp.getDetails(temp.$route.params.id, data);
			temp.mixtapeCover = url.metadataUrl()+temp.details.cover;
			temp.details.text_tracks = temp.details.text_tracks.split("\n");
		});
	}
}
</script>
<style>
</style>