document.getElementById('signin-div').addEventListener('click', () => {
	var provider = new firebase.auth.GoogleAuthProvider();
	firebase.auth().signInWithPopup(provider).then(function() {});
});
