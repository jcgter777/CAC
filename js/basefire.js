var firebaseConfig = {
      apiKey: "AIzaSyC6GNGrAh1tTCU8c_uyqxfEyxVuiv9YIhE",
      authDomain: "congress-app-challenge-jcjz.firebaseapp.com",
      databaseURL: "https://congress-app-challenge-jcjz.firebaseio.com",
      projectId: "congress-app-challenge-jcjz",
      storageBucket: "congress-app-challenge-jcjz.appspot.com",
      messagingSenderId: "680387094668",
      appId: "1:680387094668:web:09cf5cd1524895d3a3f3a9",
      measurementId: "G-JF18VZ8LDK"
    };
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

document.getElementById('signin-div').addEventListener('click', () => {
	var provider = new firebase.auth.GoogleAuthProvider();
	firebase.auth().signInWithPopup(provider).then(function() {});
});
