// Called when Google Javascript API Javascript is loaded
function HandleGoogleApiLibrary() {
	// Load "client" & "auth2" libraries
	gapi.load('client:auth2',  {
		callback: function() {
			// Initialize client & auth libraries
			gapi.client.init({
		    	apiKey: 'AIzaSyDwEjpZAX4FpLlsPEQbu7QxTPbwOSBmxVU',
		    	clientId: '328129129619-hb9ssc9ajkdqrfr82dsmtn27jhkjrqdj.apps.googleusercontent.com',
		    	scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/plus.me'
			}).then(
				function(success) {
			  		// Libraries are initialized successfully
		  			// You can now make API calls
				}, 
				function(error) {
					// Error occurred
					 console.log(error) //to find the reason
			  	}
			);
		},
		onerror: function() {
			// Failed to load libraries
		}
	});
}

// Call login API on a click event
$("#google-button").on('click', function() {
	// API call for Google login
	gapi.auth2.getAuthInstance().signIn().then(
		function(success) {
            // Login API call is successful
            console.log("success");
            window.location.href = "http://localhost:8080/mainPage.html";
			sessionStorage.setItem("userConnect", true);
			sessionStorage.setItem("userName", gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getName());
			sessionStorage.setItem("userID", gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getId());
		},
		function(error) {
			// Error occurred
			console.log(error) //to find the reason
		}
	);
});

