<template>
	<header id="header" class="header">
		<nav class="nav container">
			<a href="" class="nav_logo">YMK</a>
			<div class="nav_menu">
				<ul class="nav_list">
					<li class="nav_item">
						<router-link :to="{ name: 'home' }">
							<i class="bx bx-home-alt"></i>
						</router-link>
					</li>
					<li class="nav_item">
						<router-link :to="{ name: 'about' }">
							<i class="bx bx-user"></i>
						</router-link>
					</li>

					<li class="nav_item">
						<router-link :to="{ name: 'projects' }">
							<i class="bx bx-briefcase-alt-2"></i>
						</router-link>
					</li>
					<li class="nav_item">
						<router-link :to="{ name: 'skills' }">
							<i class="bx bx-book"></i>
						</router-link>
					</li>
					<li class="nav_item">
						<router-link :to="{ name: 'contact' }">
							<i class="bx bx-message-detail"></i>
						</router-link>
					</li>
				</ul>
			</div>
			<!-- theme change button -->
			<i class="bx bx-moon change-theme" id="theme-button"></i>
		</nav>
	</header>
</template>

<script>
export default {};
</script>

<style></style>
