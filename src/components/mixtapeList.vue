<template>	
	<div class="col-md-12 col-sm-12 col-xs-12 col-12">
		<table class="mixtapes table table-condensed">
			<tr>
				<th>Mixtapes</th>
				<th>Artistes</th>
				<th></th>
			</tr>
			<tr v-for="data in metadata" v-if="data.type == 'mixtape'">
				<td class="col-md-6 col-sm-6 col-xs-6 col-6 link" @click="displayDetails(data.id)">
					{{data.title}}
				</td>
				<td class="col-md-5 col-sm-5 col-xs-5 col-5" @click="displayDetails(data.id)">
					{{data.artist}}	
				</td>
				<td class="col-md-1 col-sm-1 col-xs-1 col-1">
					<button type="button" class=" btn btn-dark glyphicon glyphicon-trash"></button>
				</td>
			</tr>
		</table>
		<a href="#" class="col-md-12 btn glyphicon glyphicon-arrow-up"></a>
	</div>
</template>

<script>
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
		mixtapes.get(function(data){
			saveThis.metadata = data;
			
		});
	}
}
</script>

<style>
</style>
