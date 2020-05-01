<template>
	<div id="app">
		<Header />
			<AddContact v-on:add-contact="addContact" />
			<hr/>
			<ViewContact v-bind:contacts="contacts" />
	</div>
</template>


<script>
import Header from './components/Header'
import AddContact from './components/AddContact'
import ViewContact from './components/ViewContact'
import { contactsRef } from './firebase'


export default {
	name: 'App',
	components: {
		Header,
		AddContact,
		ViewContact
	},
	data() {
		return {
			contacts: {}
		}
	},
	firebase: {
		contacts: contactsRef
	},
	methods: {
		addContact(newContact){
			contactsRef.push(newContact).then((data) => {
				console.log("Data Submited: " + data.key)
			}).catch((err) => {
				console.log(err);
			});
		}
	}
}
</script>

<style>
#app {
	margin: 0 auto;
	max-width: 500px;
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
