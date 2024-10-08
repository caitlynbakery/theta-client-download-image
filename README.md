# THETA Client React Native Download Image on Android

This demo showcases the [THETA Client SDK](https://github.com/ricohapi/theta-client) demo-react-native modified with the tutorial linked [here](https://community.theta360.guide/t/download-images-from-url-using-react-native-and-theta-client/9800) to download images into local storage on a mobile phone. theta-client is a library to communicate with RICOH THETA 360 camera models using a REST-like protocol.  The network connection is usually WiFi with the RICOH THETA camera functioning as a WiFi access point and available at `http://192.168.1.1`. In the `/demos/` folder of the theta-client repository, there four demos for ios, android, react native, and flutter.  This project focuses on modifications to the `demo-react-native` project.

The tutorial showcased how to download images using a fake THETA API, while this repo uses a physical THETA camera on an Android device. The new files additions and modifications are mainly in the `src` folder inside the `demo-react-native` directory.

The test was done using a physical device RICOH THETA Z1 connected to a physical device Android Phone with WiFi.  The Android phone is a Moto Power 5G 2024
running Android OS version 14.

## Run Project
* Clone project
* cd into `demos` → `demo-react-native` 
* Run `yarn install --frozen-lockfile` to install the packages

### On Virtual Simulator
* Open Android Studio and select a simulator from the Virtual Device
Manager
* Run `yarn android` to view on the simulator

### On Physical Device
* Navigate into `Settings` → `About Phone` → `Software Information` →
tap `Build Number` seven times to enable USB Debugging. Go into `Settings` → `Developer Options` and ensure USB Debugging is toggled on.
* Plug in device with USB cable. Run `adb devices` and you should see the physical device listed. 
    #### On Mac Set up adb command
    * Run `nano $HOME/.zshrc`
    * Paste the code in
    ```   
        export PATH=$PATH:~/Library/Android/sdk/platform-tools
        export ANDROID_HOME=~/Library/Android/sdk
        export PATH="$HOME/.bin:$PATH"
        export PATH="~/Library/Android/sdk/platform-tools":$PATH  
    ```
    * Run `source ~/.zshrc`
* Run `yarn android`

![take-photo](readme_assets/take-photo.gif)

## Modifications
The tutorial worked well with the fake THETA API, but displayed queued images with a physical THETA camera. <img src="readme_assets/queued.png" width="30%" /> 

I added the two packages: [react-native-blob-util](https://github.com/RonRadtke/react-native-blob-util) and [camera-roll](https://www.npmjs.com/package/@react-native-camera-roll/camera-roll) and replaced the download function with the code shown below.

<img src="readme_assets/downloadphoto.png">

Also, the first time you use the physical camera, [set the camera date](https://github.com/ricohapi/theta-api-specs/blob/main/theta-web-api-v2.1/options/date_time_zone.md)  so it appears in camera roll chronologically. If you take a picture with official RICOH app, it will set the time using the time on the mobile phone.

The final result is shown here:

![download](readme_assets/download.gif) ![view-photo](readme_assets/view-photo.gif)

    
