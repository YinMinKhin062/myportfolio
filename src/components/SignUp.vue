<template>
	<!-- <div class="modalOverlay"> -->
	<!-- <h2>WElcome</h2> -->

	<div class="signContainer">
		<!-- <i class="fa-solid fa-circle-xmark" @click="hideModal"></i> -->
		<h3>Sign Up</h3>
		<form @submit.prevent="signUp">
			<!-- form -->
			<div class="form-item">
				<input type="text" v-model="name" placeholder="Name" required />
			</div>
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
			<div class="form-item">
				<button>Sign Up</button>
			</div>

			<!-- end of form -->
		</form>
		<div class="error" v-if="error">
			<span>{{ error }}</span>
		</div>
		<div class="form-item btn2">
			<button @click="changeModal">Already Have An Account</button>
		</div>
	</div>
	<!-- </div> -->
</template>

<script>
import { ref } from '@vue/reactivity';
import createAccount from '../Composable/createAccount';

export default {
	setup(props, context) {
		let password = ref('');
		let email = ref('');
		let name = ref('');
		let click = ref(false);
		let showPass = () => {
			click.value = !click.value;
		};

		let changeModal = () => {
			context.emit('changeAuthBox');
		};

		let { error, newAccount } = createAccount();

		let signUp = async () => {
			error.value = null;
			let account = await newAccount(name.value, email.value, password.value);
			if (account) {
				console.log(account.user);
			} else {
				console.log(error.value);
			}
		};

		return {
			name,
			password,
			email,
			click,
			showPass,
			changeModal,
			signUp,
			error,
		};
	},
};
</script>

<style></style>
