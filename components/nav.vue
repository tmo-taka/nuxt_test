<template>
	<div class="gNav_wrap">
		<nav class="gNav">
		<nuxt-link v-for="item in links" :to='item.url' :id='item.id'>{{ item.name }}</nuxt-link>
		</nav>
	</div>
</template>

<script>
export default {
	data() {
		return {
			links: [
				{
					id: 1, name: 'HOME', url: '/'
				},
				{
					id: 2, name: '記事', url: '/article'
				}
			]
		}
	}
}
</script>

<style>
.gNav_wrap {
	margin-bottom: 36px;
	background-color: #62C68F;
	color: #FFF;
}

.gNav {
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 360px;
	color: #000;
}

.gNav a {
	padding: 12px 36px;
	width: 120px;
	text-align: center;
	text-decoration: none;
	color: #FFF;
	transition: 0.1s;
}

.gNav a:hover {
	text-decoration: underline;
}
</style>