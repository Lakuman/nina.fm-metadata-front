<template>
	<div class="mixtape">
		<div class="col-md-5 col-sm-5 ">
			<div class="topData">
				<h1>{{mixtape.title}}</h1>
				<h3>Artiste : {{mixtape.artist}}</h3>
				<h3>Année : {{mixtape.year}}</h3>
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
				<tr v-for="track in mixtape.tracks">
					<td>{{track.artist}} : {{track.title}}</td>
				</tr>
			</table>
		</div>
		<div class="col-md-5 col-sm-5 ">
			<table class=" table table-condensed">
				<tr>
					<th>Text_tracks</th>
				</tr>
				<tr v-for="track in mixtape.text_tracks">
					<td>{{track}}</td>
				</tr>
			</table>
		</div>
	</div>	

</template>
<script>
import * as url from '../url.js';
import * as mixtapes from './mixtapes.js';
export default {
	data(){
		return {
			mixtape: null,
			mixtapeCover: null
		}
	},
	methods:{
	},
	mounted(){
		var temp = this;
		mixtapes.getMixtapes(url.metadataUrl(), function(data){
			temp.mixtape = mixtapes.getDetails(temp.$route.params.id, data);
			temp.mixtapeCover = url.metadataUrl()+temp.mixtape.cover;
			temp.mixtape.text_tracks = temp.mixtape.text_tracks.split("\n");
		});
	}
}
</script>
<style>
</style>