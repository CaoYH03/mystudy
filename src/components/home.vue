<template>
<div>
	<div class="web-home" v-if="!$store.state.ismobile">
		<input type="text" v-model="message">
		<button @click="click">Send</button>
	</div>
	<div class="wap-home" v-else></div>
</div>
</template>
<script>
export default {
	data(){
		return{
			message:''
		}
	},
	computed:{

	},
	methods:{
		click(){
			this.$emit('childsent',this.message)
		}
	}
}
</script>
<style lang="sass" scoped>

</style>