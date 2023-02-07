<template>
	<div class="authContainer">
		<div v-if="showAuthBox">
			<!-- <i class="fa-solid fa-circle-xmark" @click="hideModal"></i> -->
			<SignIn @changeAuthBox="changeAuthBox" @enterAccount="enterAccount"></SignIn>
		</div>
		<div v-else>
			<!-- <i class="fa-solid fa-circle-xmark" @click="hideModal"></i> -->
			<SignUp @changeAuthBox="changeAuthBox"></SignUp>
		</div>
	</div>
</template>

<script>
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';
import { ref } from '@vue/reactivity';
import { useRouter } from 'vue-router';

export default {
	components: {
		SignUp,
		SignIn,
	},
	setup(props, context) {
		let showAuthBox = ref(true);
		let router = useRouter();
		let enterAccount = () => {
			router.push({ name: 'account' });
		};

		let hideModal = () => {
			context.emit('hideAuthBox');
		};

		let changeAuthBox = () => {
			showAuthBox.value = !showAuthBox.value;
		};
		return {
			hideModal,
			showAuthBox,
			changeAuthBox,
			enterAccount,
		};
	},
};
</script>

<style></style>
