<template>
	<!-- <Header
		:class="{ scrollValue: scrollValue }"
		v-if="!['admin'].includes($route.name)"
	></Header> -->
	<Header
		:class="{ scrollValue: scrollValue }"
		v-if="!$route.path.startsWith('/admin')"
	></Header>
	<router-view />
</template>
<script>
import { onMounted, ref } from '@vue/runtime-core';
import Header from './components/Header';
export default {
	components: { Header },
	setup() {
		let scrollValue = ref(false);
		onMounted(() => {
			window.addEventListener('scroll', () => {
				if (window.scrollY >= 50) {
					scrollValue.value = true;
				} else {
					scrollValue.value = false;
				}
				console.log(window.scrollY);
			});
		});
		return { scrollValue };
	},
};
</script>

<style>
/* #app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

nav {
	padding: 30px;
}

nav a {
	font-weight: bold;
	color: #2c3e50;
}

nav a.router-link-exact-active {
	color: #42b983;
} */
</style>
