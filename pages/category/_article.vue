<template>
<div>
<h1>{{ this.$store.state.articles[this.$route.params.id].name }}</h1>
<p class="txtBox">{{ this.$store.state.articles[$route.params.id].txt }}</p>
<div class="linkBox" v-show="show">
<h2>参考サイト</h2>
<ul class="linkArea">
    <li v-for="link in this.$store.state.articles[this.$route.params.id].links">
        <a :href='link' target="_blank">{{link}}</a>
    </li>
</ul>
</div>
<nuxt-link class="topLink" :to="{name:'article'}">記事ページに戻る</nuxt-link>
</div>
</template>

<script>
//import store from '../../store/'

export default {
	head(){
        return {
            title: this.$store.state.articles[this.$route.params.id].name,
        }
	},
    data: function(){
        return {
            show: false,
        }
    },
    mounted() {
        this.$nextTick(function () {
            if(this.$store.state.articles[this.$route.params.id].links){
                this.show = true;
            }else {
                this.show = false;
            }
        })
    },
}
</script>

<style lang="scss">
h2 {
    margin: 0 auto 8px;
    width: 840px;
    font-weight: normal;
}

.linkBox {
    margin-bottom: 48px;
}

.linkArea {
    margin: 0 auto;
    padding-left: 1em;
    width: 840px;
    li {
        list-style: none;
    }
}

.txtBox {
    margin: 0 auto 48px;
    width: 840px;
}

.topLink {
    margin: 0 auto;
    display: block;
    width: 840px;
    text-align: right;
}
</style>