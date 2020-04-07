// Called when Google Javascript API Javascript is loaded
function HandleGoogleApiLibrary() {
	// Load "client" & "auth2" libraries
	var apiKey
	var clientId
	$.get("api/apiKey", function (data) {
		apiKey = data
	})
	$.get("api/clientId", function (data) {
		clientId = data
	})
	gapi.load('client:auth2',  {
		callback: function() {
			// Initialize client & auth libraries
			
			gapi.client.init({
		    	apiKey: apiKey,
		    	clientId: clientId,
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
			sessionStorage.setItem("userConnect", true);
			sessionStorage.setItem("userName", gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getName());
			sessionStorage.setItem("userID", gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getId());
			window.location.href = "loadingPage.html" ;
		},
		function(error) {
			// Error occurred
			console.log(error) //to find the reason
		}
	);
});



