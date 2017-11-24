<template>	
	<div class="col-md-10">
		<table class="mixtapes table table-condensed">
			<tr>
				<th>Mixtapes</th>
				<th>Artistes</th>
				<th></th>
			</tr>
			<tr class="link" v-for="data in metadata">
				<td class="col-md-6" @click="displayDetails(data.id)">
					{{data.title}}
				</td>
				<td class="col-md-5" @click="displayDetails(data.id)">
					{{data.artist}}
				</td>
				<td class="col-md-1">
					<button type="button" class=" btn btn-dark glyphicon glyphicon-trash"></button>
				</td>
			</tr>
		</table>
		<a href="#" class="col-md-12 btn glyphicon glyphicon-arrow-up"></a>
	</div>
</template>

<script>
import * as url from '../assets/url.js';
import * as requests from './requests.js';
export default {
	data(){
		return {
			metadata: null
		}
	},
	methods:{
	  	displayDetails(idDetails) {
	  		this.$router.push({ name: 'mixtape',  params: { id: idDetails }}); 
	  	}
	},
	mounted(){
		this.metadata = requests.getMixtapes(url.metadataUrl());
		console.log(this.metadata);
	}
}
</script>

<style>
</style>
