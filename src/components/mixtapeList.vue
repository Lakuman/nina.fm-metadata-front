<template>	
	<div class="mixtapes col-md-12 col-sm-12">
		<table class="table table-condensed">
			<tr>
				<th>Mixtapes</th>
				<th>Artistes</th>
				<th></th>
			</tr>
			<tr class="link" v-for="data in metadata" v-if="data.type == 'mixtape'">
				<td class="col-md-6 col-sm-6" @click="displayDetails(data.id)">
					{{data.title}}
				</td>
				<td class="col-md-5 col-sm-5" @click="displayDetails(data.id)">
					{{data.artist}}	
				</td>
				<td class="col-md-1 col-sm-1">
					<button type="button" class=" btn btn-dark glyphicon glyphicon-trash"></button>
				</td>
			</tr>
		</table>
		<a href="#" class="col-md-12 btn glyphicon glyphicon-arrow-up"></a>
	</div>
</template>

<script>
	import * as Mixtapes from './mixtapes.js';
	export default {
		data(){
			return {
				metadata: null
			}
		},
		methods:{
		  	displayDetails(id){
		  		this.$router.push({ name: 'mixtape',  params: { id: id }}); 
		  	}
		},
		mounted(){
			var save_this = this;
			Mixtapes.get(function(data){
				save_this.metadata = data;
			});
		}
}
</script>

<style>
</style>
