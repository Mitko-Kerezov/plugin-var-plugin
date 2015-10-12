var AppDelegate = UIResponder.extend({
    applicationDidFinishLaunchingWithOptions(application, launchOptions) {
        return FBSDKApplicationDelegate.sharedInstance().applicationDidFinishLaunchingWithOptions(application, launchOptions);
    },

    applicationOpenURLSourceApplicationAnnotation(application, url, sourceApplication, annotation) {
        return FBSDKApplicationDelegate.sharedInstance().applicationOpenURLSourceApplicationAnnotation(application, url, sourceApplication, annotation);
    },

    applicationDidBecomeActive(application) {
        FBSDKAppEvents.activateApp();
    }
}, {
    protocols: [UIApplicationDelegate]
});


var application = require("application");
application.mainModule = "main-page";
application.cssFile = "./app.css";
application.ios.delegate = AppDelegate;
application.start();
