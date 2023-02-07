<template>
	<div class="adminContainer">
		<Nav_admin></Nav_admin>
		<Admin_main></Admin_main>
	</div>
</template>

<script>
import Nav_admin from '../components/Nav_admin';
import Admin_main from '../components/Admin_main';

import getUser from '../Composable/getUser';
import { useRouter } from 'vue-router';
import { watch } from 'vue';
export default {
	components: {
		Nav_admin,
		Admin_main,
	},
	setup() {
		let { userDetails } = getUser();
		let router = useRouter();
		watch(userDetails, () => {
			if (!userDetails.value) {
				router.push({ path: '/admin/signIn' });
			}
		});
	},
};
</script>

<style></style>
