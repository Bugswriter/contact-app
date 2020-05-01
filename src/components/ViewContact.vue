<template>
	<div class="accordion">
		<div class="card">
			<h5 class="card-header">My Contacts</h5>
			<div class="card-body">
				<ul class="list-group list-group-flush">
					<li v-for="contact in contacts" v-bind:key="contact['.key']" class="list-group-item"><i>{{ contact.name }}</i> - {{ contact.contact }}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "ViewContact",
	props: ["contacts"]
}
</script>
