<template>	
	<div class="col-md-10">
		<table class="mixtapes table table-condensed">
			<tr>
				<th>Mixtapes</th>
				<th>Artistes</th>
				<th></th>
			</tr>
			<tr class="link" v-for="data in metadata" v-if="data.type == 'mixtape'">
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
import * as url from '../url.js';
import * as mixtapes from './mixtapes.js';
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
		var saveThis = this;
		mixtapes.getMixtapes(url.metadataUrl(), function(data){
			saveThis.metadata = data;
			
		});
	}
}
</script>

<style>
</style>
