<template>
	<div class="rightMenu" :class="{ showMenu: rightSidebar, hideMenu: !rightSidebar }">
		<aside>
			<!-- logo and logo text and close btn -->
			<div class="top">
				<div class="close" id="close-btn" @click="hideRightMenu">
					<span class="material-symbols-outlined"> close </span>
				</div>
			</div>

			<!-- dashboard menu -->
			<div>
				<!-- <h3 v-if="rightSidebar" class="sidebar_title">Dashboard</h3> -->
				<h3 class="sidebar_title">Dashboard</h3>
				<ul class="sidebar">
					<!-- <li><h3 v-if="rightSidebar">Dashboard</h3></li> -->
					<li>
						<router-link to=""> <i class="bx bxs-user-detail"></i>About Myself </router-link>
					</li>
					<li>
						<router-link to=""><i class="bx bx-briefcase-alt-2"></i>Projects</router-link>
					</li>
					<li>
						<router-link to=""> <i class="bx bx-book"></i>Skills & Experience</router-link>
					</li>
					<li>
						<router-link to=""> <i class="bx bx-message-detail"></i>Contact Us</router-link>
					</li>
				</ul>
			</div>
		</aside>
	</div>

	<div class="navAdmin">
		<div class="navMenu">
			<div id="menu-btn" @click="showRightMenu">
				<span v-if="!rightSidebar" class="material-symbols-outlined"> menu </span>
			</div>
			<ul class="user_dropdown">
				<li class="dropdown">
					<div href="" class="dropbtn">
						<img src="../assets/images/portfolio.jpg" alt="" />
						<span class="user-name" v-if="userDetails">{{ userDetails.displayName }}</span>
						<i class="bx bx-caret-down dropdown-icon"></i>
					</div>
					<div class="dropdown-content">
						<a href="#" @click="logout">Logout</a>
						<a href="#">Link 2</a>
						<a href="#">Link 3</a>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import logoutfromAcc from '../Composable/logoutAcc';
import getUser from '../Composable/getUser';
import { ref } from '@vue/reactivity';
export default {
	setup() {
		let rightSidebar = ref(false);
		let { error, logoutAcc } = logoutfromAcc();
		let { userDetails } = getUser();
		console.log(userDetails.value.displayName);
		let logout = () => {
			logoutAcc();
		};

		let showRightMenu = () => {
			rightSidebar.value = true;
			console.log(rightSidebar.value);
		};

		let hideRightMenu = () => {
			rightSidebar.value = !rightSidebar.value;
			console.log(rightSidebar.value);
		};

		console.log(rightSidebar.value);

		return { logout, error, userDetails, showRightMenu, rightSidebar, hideRightMenu };
	},
};
</script>

<style></style>
