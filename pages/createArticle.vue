<template>
<div>
<h1>記事登録だよ</h1>
<div class="articleBox">
	<div class="inputItem">
		<span class="inputItem_title">記事のID:</span><input type="text" name="number" v-model="number" readonly>
	</div>
	<div class="inputItem">
		<span class="inputItem_title">記事の名前:</span><input type="text" name="name" v-model="name" @blur="$v.name.$touch()" :class="{ error : $v.name.$error}">
		<span class="errorMessage" v-if="$v.name.$error">記事の名前をに入力してください。</span>
	</div>
	<div class="inputItem">
		<span class="inputItem_title">記事のテキスト:</span><textarea type="text" name="txt" rows="8" v-model="txt" @blur="$v.txt.$touch()" :class="{ error : $v.txt.$error}"></textarea>
		<span class="errorMessage" v-if="$v.txt.$error">記事の名前をに入力してください。</span>
	</div>
	<div class="inputItem">
		<span class="inputItem_title">参考サイトのリンク:</span>
		<ul class="urlBox">
			<li v-for="(link, index) in links" class="urlBox_item" >
				<input type="text" name="links" v-model="links[index]"><a @click="linkAdd" v-if="index == (links.length - 1)" class="addUrl"></a>
			</li>
		</ul>
	</div>
	<div　class="submitBox">
	<button :disabled="$v.$invalid" @click="submit">登録する</button>
	</div>
</div>
</div>
</template>

<script>
import Vue from 'vue';
import Vuelidate from 'vuelidate';
import 'firebase/firestore'
import { db } from '@/plugins/firebase'
import { mapGetters } from 'vuex'
import { required } from 'vuelidate/lib/validators'

Vue.use(Vuelidate);

export default {
	created: function () {
		this.$store.dispatch('setArticles', db.collection('articles'))
	},
	computed: {
		...mapGetters({ articles: 'getArticles' }),
		number: {
			get() {
				return this.$store.state.articles.length
			},
			set (){
				this.$store.state.articles.length
			}
		}
	},
	data: function () {
		return {
			name: '',
			txt: '',
			links: [''],
			trueLinks: [],
		}
	},
	validations: {
		name: {
			required,
		},
		txt: {
			required,
		}
	},
	methods: {
		submit: function () {
			//空文字を抜く
			this.trueLinks = this.links.filter(Boolean);
			const article = {
				name: this.name,
				txt: this.txt,
				number: this.number,
				links: this.trueLinks,
			}
			const articlesRef = db.collection('articles')
			articlesRef.add(article)
			this.number = ''
			this.name = ''
			this.txt = ''
			this.links =''
		},
		linkAdd() {
			this.links.push('');
		}
	},
}

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
	.inputItem {
		margin-bottom: 2em;
		display: flex;
		justify-content: space-between;
		position: relative;
		&.last-child {
			margin-bottom: 0;
		}
		&_title {
			display: inline-block;
			width: 24%;
		}
		input, textArea {
			-webkit-appearance: none;
			-moz-appearance: none;
			appearance: none;
			resize: none;
			border: 0;
			outline: none;
			background: transparent;
			width: 70%;
			padding: 0.4em;
			box-shadow: 0 0 1px #000;
			&.error {
				color: #8a0421;
				border-color: #dd0f3b;
				background-color: #ffd9d9;
			}
		}
		.errorMessage {
			display: inline-block;
			position: absolute;
			bottom: -28px;
			right: 0;
			padding: 0.2em 0.4em;
			border-radius: 12px;
			width: 70%;
			background-color: #F00;
			color: #FFF;
			font-size: 88%
		}
	}

	.submitBox {
		text-align: center;
		button {
			background-color: #62C68F;
			border: solid 1px #62C68F;
			border-radius :28px;
			color: #FFF;
			font-size: 16px;
			font-weight: bold;
			cursor: pointer;
			outline: none;
			padding: 0.6em 2em;
			-webkit-appearance: none;
			-moz-appearance: none;
			appearance: none;
		}
	}

	.urlBox {
		width: 70%;
		&_item {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			input {
				width: 92%;
			}
			.addUrl {
				display: inline-block;
				border-radius: 50%;
				position: relative;
				width: 1.36em;
				height: 1.36em;
				text-align: center;
				background-color: #62C68F;
				color: #FFF;
				font-weight: bold;
				cursor: pointer;
				&:hover {
					opacity: 0.7;
				}
				&::after {
					content: '+';
					display: inline-flex;
					align-items: center;
					justify-content: center;
					width: 0.8em;
					height: 0.8em;
					margin: auto;
					position: absolute;
					top: 0;
					bottom: 0;
					right: 0;
					left: 0;
				}
			}
		}
	}
</style>