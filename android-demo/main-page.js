var app = require("application");
var context = app.android.context;

function creatingView(args) {    

	// initialize sdk
	com.facebook.FacebookSdk.sdkInitialize(context);
	
	
	var loginManager = com.facebook.login.LoginManager.getInstance(); 
	var fbCallbackManager = com.facebook.CallbackManager.Factory.create();

	//Implementing the callback Interface
	var callback = new com.facebook.FacebookCallback({
		
		onSuccess: function(result) {
			console.log("success");
		},
		onCancel: function() {
			console.log("cancel");
		},
		onError: function(e) {
			console.log("error " + e);
		} 
	});

	// starting facebook activity
	var act = app.android.startActivity;
	act.onActivityResult = function(requestCode, resultCode, data) {
		fbCallbackManager.onActivityResult(requestCode, resultCode, data);
	}
	
	// call login action
	loginManager.logInWithPublishPermissions(act, java.util.Arrays.asList(["publish_actions"]));
	loginManager.registerCallback(fbCallbackManager, callback);
}

exports.creatingView = creatingView;
