<template>
	<div class="col-md-2 col-sm-3 col-xs-3">
		<div class="page-sidebar">
			<header>
				<h1>Nina.fm</h1>
				<h4>Gestion des Mixtapes</h4>
			</header>
			<div class="nav-divider"></div>
			<button @click="displayList" class="btn menubutton">Liste des <br class="linebreak">Mixtape</button>
			<button @click="goToAddMixtapes" class="btn menubutton">Ajouter une <br class="linebreak">Mixtape</button>
		</div>
		<div class="page-sidebar-small">
			<header>
				<h1>N</h1>
			</header>
			<div class="nav-divider"></div>
			<button @click="displayList" class="btn menubutton glyphicon glyphicon-list-alt"></button>
			<button @click="goToAddMixtapes" class="btn menubutton glyphicon glyphicon-plus"></button>
		</div>
	</div>
</template>
<script>
export default {
	methods: {
		displayList() {
			this.$router.push({name: 'mixtapes'}); 
		},
		//Unfinished functionality
		goToAddMixtapes(){
			this.$router.push({name: 'addMixtape'}); 
		}
	}
}
</script>
<style>
</style>