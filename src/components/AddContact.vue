<template>
	<form @submit.prevent="addContact">
		<div class="form-group">
			<input type="text" v-model='name' placeholder="Name">
		</div>
		<div class="form-group">
			<input type="text" v-model='number' placeholder="Phone Number">
		</div>
		<input type="submit" class="btn btn-primary" value="Add Number +">
	</form>
</template>


<script>
export default {
	name: "AddContact",
	data(){
		return {
			name: '',
			number: '',
		}
	},
	methods: {
		addContact(){
			const newContact = {
				name: this.name,
				contact: this.number
			}

			this.$emit('add-contact', newContact);
			this.name = '';
			this.number = '';
		}
	}
}
</script>
