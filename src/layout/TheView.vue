<template>
	<header>
		<TheHeader></TheHeader>
	</header>
	<main>
		<div class="container my-4">
			<RouterView></RouterView>
		</div>
	</main>
</template>

<script setup>
import TheHeader from '@/layout/TheHeader.vue';
</script>

<style lang="scss" scoped></style>
