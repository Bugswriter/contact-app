import firebase from 'firebase'

var app = firebase.initializeApp({
	apiKey: "AIzaSyBzmYp5lAkbyaA84NpCMP9eScX4E3mW6vg",
	authDomain: "contact-app-b1328.firebaseapp.com",
	databaseURL: "https://contact-app-b1328.firebaseio.com",
	projectId: "contact-app-b1328",
	storageBucket: "contact-app-b1328.appspot.com",
	messagingSenderId: "374141070641",
	appId: "1:374141070641:web:4d7d9012b2a18ca0759410"
});

export const db = app.database();
export const contactsRef = db.ref('contacts')

