var vmModule = require("./main-view-model");
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = vmModule.mainViewModel;

    FBSDKLoginManager.alloc().init().logInWithReadPermissionsHandler(["public_profile"], (result, error) => {
        if (error) {
            console.error(error.description);
        } else if (result.isCancelled) {
            console.log('canceled');
        } else {
            FBSDKGraphRequest.alloc().initWithGraphPathParameters("me", null).startWithCompletionHandler((connection, result, error) => {
                if (error) {
                    console.error(error.description);
                } else {
                    console.log('Logged in as ' + result.objectForKey('name'));
                }
            });
        }
    });
}
exports.pageLoaded = pageLoaded;
