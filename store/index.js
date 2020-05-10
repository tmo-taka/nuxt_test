import Vuex from 'vuex'
import 'firebase/firestore'
import { vuexfireMutations, firestoreAction } from 'vuexfire';

/*export const state = () => ({
	articles: firebase.firestore().collection('articles'),
	/*articles: [
		{
			id: 0, name: 'サーバーサイドレンダリングについて',
			txt: `メリットとしては、ユーザー側ではなく、サーバー側でJavaScriptを使ったHTML生成を行うため
			ユーザー側でHTMLを生成する待ち時間がなくなる。`,
			links: []
		},
		{
			id: 1, name: 'ページ複製について',
			txt: `今やっとるやるおそらくVuex使うと思っとる`,
			links: ['https://note.com/yunp_q/n/n4e6f0d94121b','https://www.webopixel.net/javascript/1463.html']
		}
	],
	
})*/

const createStore = () => {
	return new Vuex.Store({
		state: {
			articles: [],
		},
		mutations: {
			...vuexfireMutations,
		},
		actions: {
			setArticles: firestoreAction(({ bindFirestoreRef }, ref) => {
				return bindFirestoreRef('articles', ref)
			})
		},
		getters: {
			getArticles: (state) => {
				return state.articles
			},
		},
	})
}

export default createStore

