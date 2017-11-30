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
		<div class="col-md-5 col-sm-5">
			<table class=" table table-condensed">
				<tr>
					<th>Tracks</th>
				</tr>
				<tr v-for="track in mixtape.tracks">
					<td>{{track.artist}} : {{track.title}}</td>
				</tr>
			</table>
		</div>
		<div class="col-md-5 col-sm-5">
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
	mounted(){
		var saveThis = this;
		mixtapes.getMixtapes(function(data){
			saveThis.mixtape = mixtapes.getDetails(saveThis.$route.params.id, data);
			saveThis.mixtapeCover = url.metadataUrl()+saveThis.mixtape.cover;
			saveThis.mixtape.text_tracks = saveThis.mixtape.text_tracks.split("\n");
		});
	}
}
</script>
<style>
</style>