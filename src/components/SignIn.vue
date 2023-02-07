<template>
	<div class="signContainer">
		<h3>Sign In</h3>
		<form @submit.prevent="signIn">
			<!-- form -->
			<div class="form-item">
				<input type="email" v-model="email" placeholder="Email" required />
			</div>
			<div class="form-item passbox">
				<div v-if="click" class="eyeContainer">
					<input type="text" placeholder="Password" v-model="password" required />
					<i class="fa-regular fa-eye" @click="showPass"></i>
				</div>
				<div v-else class="eyeContainer">
					<input type="password" placeholder="Password" v-model="password" required />
					<i class="fa-regular fa-eye-slash" @click="showPass"></i>
				</div>
			</div>
			<div class="form-item reset">
				<span @click="lostPassword">Lost your password?</span>
			</div>
			<div class="form-item">
				<button>Sign In</button>
			</div>

			<!-- end of form -->
		</form>
		<div class="error" v-if="error">
			<span>{{ error }}</span>
		</div>
		<div class="form-item btn2">
			<button @click="changeModal">Create An Account</button>
		</div>
	</div>
	<!-- </div> -->
</template>

<script>
import { ref } from '@vue/reactivity';
import signInAccount from '../Composable/signInAccount';
import { useRouter } from 'vue-router';
export default {
	setup(props, context) {
		let password = ref('');
		let email = ref('');
		let click = ref(false);
		let router = useRouter();
		let showPass = () => {
			click.value = !click.value;
		};

		let changeModal = () => {
			context.emit('changeAuthBox');
		};

		let { error, accountRes } = signInAccount();
		let signIn = async () => {
			error.value = null;
			let accResponse = await accountRes(email.value, password.value);
			if (accResponse) {
				context.emit('enterAccount');
				console.log(accResponse.user);
			}
		};

		let lostPassword = () => {
			router.push('account/lostpassword');
		};

		return {
			password,
			email,
			click,
			showPass,
			changeModal,
			signIn,
			error,
			lostPassword,
		};
	},
};
</script>

<style></style>
