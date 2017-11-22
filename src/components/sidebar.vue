<template>
	<div class="col-md-2 col-sm-3">
		<div class="page-sidebar">
			<header style="margin-bottom: 30px; color:#EBEBEB" >
				<h1 style="font-family:organo;">Nina.fm</h1>
				<h4>Gestion des Mixtapes</h4>
			</header>
			<div class="nav-divider"></div>
			<button @click="displayList" class="btn menubutton">Liste des Mixtapes</button>
			<button @click="goToAddMixtapes" class="btn menubutton">Ajouter une Mixtapes</button>
		</div>
	</div>
</template>
<script >

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