# React Native - Generating Signed APK

React Native에서 안드로이드 APK를 생성하는것에 대해서 알아보겠다. <a href="https://facebook.github.io/react-native/docs/signed-apk-android.html" target="_blank">Generating Signed APK</a> 문서에도 잘 정리되어 있지만, 문서만보고 따라하는데 한계가 있어서 경험자인 팀원분에게 물어서 작업을 진행했다.

기존에 작업했던 <a href="https://github.com/kjk7034/RealTimeEmergencyDepartmentInfo" target="_blank">RealTimeEmergencyDepartmentInfo</a>를 적용해보기로 했다.

## Generating a signing key

프로젝트Path/android/app/에 나는 해당 키를 생성하기로 헀다.

```
$ cd ~/Study/RealTimeEmergencyDepartmentInfo/android/app/
$ keytool -genkey -v -keystore kr.wise7034.RealTimeEmergencyDepartmentInfo.keystore -alias kr.wise7034.RealTimeEmergencyDepartmentInfo.remote -keyalg RSA -keysize 2048 -validity 10000 -storepass ********
```

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/12/RNGeneratingSignedAPK_1.png" alt="" />

keystore, alias, storepass를 설정해서 키를 생성한다.(********는 비밀번호를 설정하면 된다.)

이 과정에서 여러 질문을 하는데, 이런건 한글이 더 어렵게 느껴지는것 같다. ()는 맥의 언어 설정이 영문인경우...


* 이름과 성을 입력하십시오.(What is your first and last name?)
* 조직 단위 이름을 입력하십시오. (What is the name of your organizational unit?)
* 조직 이름을 입력하십시오. (What is the name of your organization?)
* 구/군/시 이름을 입력하십시오? (What is the name of your City or Locality?)
* 시/도 이름을 입력하십시오. (What is the name of your State or Province?)
* 이 조직의 두 자리 국가 코드를 입력하십시오. (What is the two-letter country code for this unit?)

내용을 다 입력하면 키가 생성되었다.

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/12/RNGeneratingSignedAPK_2.png" alt="" />

프로젝트Path/android/ 폴더를 보니 keystores 폴더가 생성된 것을 확인할 수 있다.

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/12/RNGeneratingSignedAPK_3.png" alt="" />

## Setting up gradle variables

문서에는 ~/.gradle/gradle.properties로 **글로벌 gradle 변수**에 추가하라고 되어있다.
나는 일단 샘플이기에 앱에 있는 gradle.properties에 다음 코드를 추가했다.

**일반적으로 앱에 해당 코드를 추가하지는 않는다.** 내가 추가한 이유는 나중에 git에 공유하기 위해서이다. (실제 ********을 사용하지는 않았음)

```
MYAPP_RELEASE_STORE_FILE=kr.wise7034.RealTimeEmergencyDepartmentInfo.keystore
MYAPP_RELEASE_KEY_ALIAS=kr.wise7034.RealTimeEmergencyDepartmentInfo.remote
MYAPP_RELEASE_STORE_PASSWORD=********
MYAPP_RELEASE_KEY_PASSWORD=********
```

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/12/RNGeneratingSignedAPK_4.png" alt="" />

### 키 스토어 저장에 대한 참고 사항 (Note about saving the keystore)

Play 스토어에 앱을 게시 한 후 언제든지 서명 키를 변경하려면 앱을 다른 패키지 이름 (모든 다운로드 및 등급 손실)으로 다시 게시해야합니다. 따라서 키 저장소를 백업하고 암호를 잊어 버리지 마십시오.<br />(Once you publish the app on the Play Store, you will need to republish your app under a different package name (losing all downloads and ratings) if you want to change the signing key at any point. So backup your keystore and don't forget the passwords.)

### Note about security (보안 참고 사항)

암호를 일반 텍스트로 저장하지 않고 OSX를 실행하는 경우 키 체인 액세스 응용 프로그램에 자격 증명을 저장할 수도 있습니다. 그런 다음 ~ / .gradle / gradle.properties의 마지막 두 행을 건너 뛸 수 있습니다.<br />(If you are not keen on storing your passwords in plaintext and you are running OSX, you can also store your credentials in the Keychain Access app. Then you can skip the two last rows in ~/.gradle/gradle.properties.)

## Adding signing config to your app's gradle config

프로젝트Path/android/app/build.gradle 파일에서 다음과 같은 코드를 추가해보자.

```
android {
    ...
    defaultConfig { ... }
    signingConfigs {
        release {
            storeFile file(MYAPP_RELEASE_STORE_FILE)
            storePassword MYAPP_RELEASE_STORE_PASSWORD
            keyAlias MYAPP_RELEASE_KEY_ALIAS
            keyPassword MYAPP_RELEASE_KEY_PASSWORD
        }
    }
    buildTypes {
        release {
            ...
            signingConfig signingConfigs.release
        }
    }
}
```

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/12/RNGeneratingSignedAPK_5.png" alt="" />

## Generating the release APK

```
cd 프로젝트Path (프로젝트 path에서 시작)
cd android && ./gradlew assembleRelease
```

생성된 APK는 android/app/build/outputs/apk/app-release.apk에서 찾을 수 있다.

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/12/RNGeneratingSignedAPK_6.png" alt="" />

## 결과 확인

해당 파일을 서버에 올려서 다운로드 받아봤다. 보안을 이유로 설치가 차단되었다.

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/12/RNGeneratingSignedAPK_7.png" width="50%" alt="" />

설정으로 이동하여 출처를 알 수 없는 앱을 허용한다.

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/12/RNGeneratingSignedAPK_8.png" width="50%" alt="" />

오 ~ 예전에 만들었던 앱이 폰에 동작하는 것을 확인 할 수 있었다.

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/12/RNGeneratingSignedAPK_9.png" width="50%" alt="" />

앱아이콘을 등록하지 않았지만 설치가 잘 되었다.

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/12/RNGeneratingSignedAPK_10.png" width="50%" alt="" />

앱스토어에 등록하고 싶다면, 앱등록 절차에 따라 apk를 등록하면 된다. 그 전에 react-native문서에 있는 마지막 부분을 확인하자.

## Testing the release build of your app

출시 빌드를 Play 스토어에 업로드하기 전에 철저하게 테스트해야합니다. 다음을 사용하여 장치에 설치하십시오.<br />(Before uploading the release build to the Play Store, make sure you test it thoroughly. Install it on the device using:)

```
$ react-native run-android --variant=release
```

--variant = release는 위에서 설명한대로 서명을 설정 한 경우에만 사용할 수 있습니다.<br />(--variant=release is only available if you've set up signing as described above.)

## Enabling Proguard to reduce the size of the APK (optional)

Proguard를 활성화하여 APK 의 크기를 줄이는 방법은 android/app/build.gradle에서 enableProguardInReleaseBuilds 를 false(샘플이미지)에서 true로 변경한다.

```
/**
 * Run Proguard to shrink the Java bytecode in release builds.
 */
def enableProguardInReleaseBuilds = true
```

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/12/RNGeneratingSignedAPK_11.png" alt="샘플이미지" />