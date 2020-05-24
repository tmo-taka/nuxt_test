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
					id: 1, name:'HOME', url: '/'
				},
				{
					id: 2, name:'記事一覧', url: '/article'
				},
				{
					id: 3, name:'記事作成', url: '/createArticle'
				},
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
	width: 420px;
	color: #000;
}

.gNav a {
	padding: 12px 36px;
	width: 160px;
	text-align: center;
	text-decoration: none;
	color: #FFF;
	transition: 0.1s;
}

.gNav a:hover {
	text-decoration: underline;
}
</style>