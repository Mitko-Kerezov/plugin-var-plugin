# NativeScript Facebook Plugin

This is a **proof of concept** plugin.

You can vote for a cross-platform implementation in the [idea portal](https://nativescript.ideas.aha.io/ideas/NS-I-63).

## Installation

Clone the repo:
```bash
git clone git@github.com:NativeScript/nativescript-facebook-plugin.git
```

Go to your app and add the plugin:
```
tns plugin add ../nativescript-facebook-plugin
```

You will be prompted for the values of the `FACEBOOK_APP_ID` (1234567890) and `APP_NAME` (org.nativescript.myapp) plugin variables.

## Usage iOS

You can see an ios sample in the `ios-demo` folder.

## Usage Android

* Copy the content of the `android-demo` folder into the `<app_name>/app/` folder.
* Open the `node_modules/nativescript-facebook-plugin/platformsandroid/include.gradle` file.
* Replace `__YOUR_FACEBOOK_APP_ID_HERE__` with your facebook app id.
* Run project.

## Requirements
* NativeScript CLI 1.4+
