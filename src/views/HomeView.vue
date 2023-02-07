<template>
	<!-- <Header></Header> -->

	<Main></Main>
	<About_section></About_section>
	<Projects_section></Projects_section>
	<Skills_section></Skills_section>

	<Contact_section></Contact_section>
</template>

<script>
import Contact_section from '../components/Contact_section';
import Projects_section from '../components/Projects_section';
import Skills_section from '../components/Skills_section';
import { ref } from '@vue/reactivity';
import About_section from '../components/About_section';
import Main from '../components/Main';
import { onUpdated } from '@vue/runtime-core';
// import Header from '../components/Header';
export default {
	components: {
		Contact_section,
		Projects_section,
		Skills_section,
		About_section,
		Main,
	},
};
</script>
