<template>
	<div class="mixtape"  v-if="mixtape != null">
		<div class="col-md-5 col-sm-5 ">
			<div class="top-data">
				<h1>{{mixtape.title}}</h1>
				<h3>Artiste : {{mixtape.artist}}</h3>
				<h3>Année : {{mixtape.year}}</h3>
			</div>
		</div>
		<div class="col-md-5 col-sm-5">
			<img class="cover" v-bind:src= mixtape.cover></img>
		</div>
		<div class="col-md-5 col-sm-5">
			<table class="table table-condensed">
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
	import * as Mixtapes from './mixtapes.js';
	export default {
		data(){
			return {
				mixtape: null,
			}
		},
		mounted(){
			var saveThis = this;
			Mixtapes.get(function(data){
				saveThis.mixtape = data;
			},saveThis.$route.params.id);
		}
	}
</script>
<style>
</style>