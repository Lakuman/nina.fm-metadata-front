<template>
	<div>
		<div class="page-sidebar">
			<header>
				<h1>Nina.fm</h1>
				<h4>Gestion des Mixtapes</h4>
			</header>
			<div class="nav-divider"></div>
			<button @click="displayList" class="btn menubutton">Liste des Mixtapes</button>
			<button @click="goToAddMixtapes" class="btn menubutton">Ajouter une Mixtape</button>
		</div>
		<div class="page-sidebar-small">
			<header>
				<img class ="logo" src="../assets/img/logo.png"></img>
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