<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div class="flex items-center">
		<img src="https://avatars.githubusercontent.com/u/32404639?s=96&amp;v=4" alt="Luis Lucas" class="w-20 h-20 mr-6 rounded-full">
		<div class="flex flex-col w-full">
			<strong class="text-2xl text-title">Luis Lucas</strong>
			<p class="flex items-center">
				<img src="icons/level.svg" alt="level" class="mr-2">
				<span class="text-base">Level {{ level }}</span>
			</p>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
export default Vue.extend({
	computed: mapState('Challenges', ['level']),
});
</script>
