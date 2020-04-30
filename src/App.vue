<template>
  <div id="app">
		<Header />
		<AddContact v-on:add-contact="addContact" />
		<hr/>
		<div class="container">
			<ul>
				<li v-for="contact in contacts" v-bind:key="contact['.key']">{{ contact.name }} - {{ contact.contact }}</li>
			</ul>
		</div>
  </div>
</template>

<script>
import Header from './components/Header'
import AddContact from './components/AddContact'
import { contactsRef } from './firebase'

export default {
  name: 'App',
  components: {
		Header,
		AddContact
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
