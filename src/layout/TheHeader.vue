<template>
	<nav class="navbar navbar-expand-sm navbar-fixed-top border-bottom container" data-bs-theme="dark">
		<div class="container-fluid">
			<RouterLink class="navbar-brand" to="/"> Tax </RouterLink>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto">
					<li class="nav-item">
						<router-link class="nav-link" to="/">Home</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/about">Link</router-link>
					</li>
				</ul>
				<form class="d-flex" role="search">
					<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
					<button class="btn btn-outline-success bg-dark" type="submit">Search</button>
				</form>
			</div>
		</div>
	</nav>
</template>

<script setup></script>

<style lang="scss" scoped></style>
