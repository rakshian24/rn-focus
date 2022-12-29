# Focus App
## This is a portfolio react native app which helps in focusing things.

## Supported Features
1. Multi language support using `i18next` and `react-i18next`

---
## Steps for generating an apk file from react native project
1. Run the following code which generates a keystore valid for 10000 days under the file name my-key.keystore.\
`keytool -genkey -v -keystore my-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000`

    Note: Alias is a name that you will use later when signing your app, so remember to take note of the alias.

2. Now, you have to place the created keystore file under the `android/app` directory in your react native project folder.

    Next, add the following lines to `android\app\build.gradle`

    ```
    android {
    ...
    signingConfigs {
        release {
            if (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) {
                storeFile file(MYAPP_RELEASE_STORE_FILE)
                storePassword MYAPP_RELEASE_STORE_PASSWORD
                keyAlias MYAPP_RELEASE_KEY_ALIAS
                keyPassword MYAPP_RELEASE_KEY_PASSWORD
            }
        }
    }
    buildTypes {
        release {
            ......
            signingConfig signingConfigs.release
        }
    }
    ...
    }
    ```

    Add the following lines to gradle.properties

    ```
    MYAPP_RELEASE_STORE_FILE=my-key.keystore
    MYAPP_RELEASE_KEY_ALIAS=my-key-alias
    MYAPP_RELEASE_STORE_PASSWORD=******
    MYAPP_RELEASE_KEY_PASSWORD=*******
    ```
    Note: Replace the asterisks with the password that you entered in cli.
3. Now, place your terminal directory to `android` using,

    ```
    cd android
    ```

    Then run the following command\
    For windows,
    ```
    gradlew assembleRelease
    ```

    Note: `gradle.properties` should not include `org.gradle.configureondemand=true` . If you allow this in your `gradle.properties`, this will not bundle JS and assets to your APK

    Now the APK creation process is done! You can find the generated APK at `android/app/build/outputs/apk/app-release.apk` 