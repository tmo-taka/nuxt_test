<template>
<div>
<h1>記事ページだよ</h1>
<div class="articleBox">
<ul>
<li v-for="article in articles" :key="article.id">
<nuxt-link v-bind:to="{ name: 'category-article', params:{id:article.number} }">{{article.name}}</nuxt-link>
</li>
</ul>
</div>
</div>
</template>

<script>
import 'firebase/firestore'
import { db } from '@/plugins/firebase'
import { mapGetters } from 'vuex'

export default {
	created: function () {
		this.$store.dispatch('setArticles', db.collection('articles'))
	},
	computed: {
		...mapGetters({ articles: 'getArticles' })
	},
}

/*
firebase.firestore().collection('articles').get().then(snapshot => {
		let articles = [];
        snapshot.forEach((doc) => {
			articles.push(
            Object.assign({
              id: doc.id
            }, doc.data())
          )
		})
		console.log(data);
	})*/

</script>

<style lang="scss">
	h1 {
		margin-bottom: 24px;
		text-align: center;
		font-weight: normal;
	}
	.articleBox {
		margin: 0 auto;
		padding: 24px 12px;
		border-radius:8px;
		width: 540px;
		box-shadow: 0 0 1px 1px #62C68F;
		ul {
			list-style: none;
			padding-left: 0;
		}
		li {
			margin-bottom: 16px;
			text-align: center;
			&:last-child {
				margin-bottom: 0;
			}
			a {
				font-size: 112%;
				text-decoration: none;
				color: #000;
				&:hover {
					opacity: 0.7;
				}
			}
		}
	}
</style>