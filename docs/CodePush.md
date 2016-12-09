# CodePush 적용하기

[CodePush](http://microsoft.github.io/code-push/index.html)는 React Native의 장점중 큰 부분을 차지한다. 일부 수정을 통해 매번 앱을 빌드하고 배포하는 과정없이 CodePush를 통해서 업데이트가 가능하다.

resource를 추가한다거나 일부 기능이 추가되어 빌드를 해야하는 경우를 제외하고 컨텐츠, 스타일 같이 간단한 수정을 했을 때, 바로 적용할 수 있다.

Getting Started를 통해서 하나씩 따라해보자.

[샘플 앱](https://github.com/kjk7034/ReactNativeComponentEx)은 기존에 스터디하면서 만들었던 ComponentEx로 테스트했다. 

## 1. Install the CodePush CLI

```
npm install -g code-push-cli
```

OSX and Linux에서 sudo가 필요한 경우도 있다.

## 2. code-push register

```
code-push register
```

Please select an authentication provider for your CodePush account:

GitHub, Microsoft (Personal), Microsoft (Work) 세가지의 선택중 나는 GitHub를 선택했다.

발급받은 키를 입력해서 등록한다.

<img scr="http://wagunblog.com/wp/wp-content/uploads/2016/12/codepush-01.png" alt="" width="50%" />

<img scr="http://wagunblog.com/wp/wp-content/uploads/2016/12/codepush-02.png" alt="" width="50%" />

<img scr="http://wagunblog.com/wp/wp-content/uploads/2016/12/codepush-03.png" alt="" width="50%" />

## 3. Register your app with the service

```
code-push app add ReactNativeComponentEx-Android
code-push app add ReactNativeComponentEx-iOS
```

CodePush에 앱이름-Android, 앱이름-iOS 앱을 등록했다.

그러면 각각 Production Deployment Key와 Staging Deployment Key가 발급된다.

```code-push -h```로 code-push 명령어들을 확인할 수 있다.

<img scr="http://wagunblog.com/wp/wp-content/uploads/2016/12/codepush-04.png" alt="" width="50%" />

```code-push app list```로 등록된 앱의 목록도 확인할 수 있다.

<img scr="http://wagunblog.com/wp/wp-content/uploads/2016/12/codepush-05.png" alt="" width="50%" />

## 4. CodePush-ify your mobile client

[react-native-code-push - GitHub](https://github.com/Microsoft/react-native-code-push)를 보면서 하나씩 따라해보자.

```
npm install --save react-native-code-push@latest
```

최신버전의 react-native-code-push를 install한다.

react native버전을 확인해서 iOS, Android를 설정한다.

나는 간단하게 react-native link를 이용했다. (react-native 0.34 사용)

```
react-native link react-native-code-push
```

### iOS

Xcode에서 Info.plist에서 CodePushDeploymentKey에 CodePush에서 받은 Staging Deployment Key을 입력한다. (ReactNativeComponentEx-iOS의 Staging Deployment Key)

<img scr="http://wagunblog.com/wp/wp-content/uploads/2016/12/codepush-06.png" alt="" width="50%" />

### Android

MainApplication.java 파일에 new CodePush에 CodePush에서 받은 Staging Deployment Key을 입력.

```
@Override
protected List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(
        new MainReactPackage(),
        new CodePush("<ReactNativeComponentEx-Android의 Staging Deployment Key>", getApplicationContext(), BuildConfig.DEBUG)
    );
}
```
<img scr="http://wagunblog.com/wp/wp-content/uploads/2016/12/codepush-07.png" alt="" width="50%" />

## 5. CodePush Component 생성

코드에서 다음과 같이 페이지가 처음 로드되는 시점에 CodePushComponent를 적용했다. (예제 코드 확인)

```
<View style={{flex:1}}>
    <Navigator {...navigatorProps} />
    <CodePushComponent />
</View>
```

내가 적용한 방법은 codePush.sync로 연결해서 syncStatus의 값에 따라 텍스트와 progress를 보여주는 컴포넌트를 생성했다. (CodePush에는 다양한 기능들이 있는데, 이 기능 추가적으로 필요한 부분들은 GitHub를 참고하자.) 

```
import React, {Component} from 'react';
import {
    View,
    Alert,
    Text,
    AppState
} from "react-native";

import codePush from "react-native-code-push";
import {Style} from './style';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            syncMessage : null,
            progress : null
        }
    }
    codePushSync() {
        try {
            codePush.sync(
                {
                    updateDialog: {
                        title : "새로운 업데이트가 존재합니다.",
                        optionalUpdateMessage : "지금 업데이트하시겠습니까?",
                        mandatoryContinueButtonLabel : "계속",
                        mandatoryUpdateMessage : "업데이트를 설치해야 사용할 수 있습니다.",
                        optionalIgnoreButtonLabel : "나중에",
                        optionalInstallButtonLabel : "업데이트"
                    },
                    installMode: codePush.InstallMode.IMMEDIATE
                },
                (syncStatus) => {
                    switch(syncStatus) {
                        case codePush.SyncStatus.CHECKING_FOR_UPDATE:
                            this.setState({
                                syncMessage: "Checking for update."
                            });
                            break;
                        case codePush.SyncStatus.DOWNLOADING_PACKAGE:
                            this.setState({
                                syncMessage: "Downloading package."
                            });
                            break;
                        case codePush.SyncStatus.AWAITING_USER_ACTION:
                            this.setState({
                                syncMessage: "Awaiting user action."
                            });
                            break;
                        case codePush.SyncStatus.INSTALLING_UPDATE:
                            this.setState({
                                syncMessage: "Installing update."
                            });
                            break;
                        case codePush.SyncStatus.UP_TO_DATE:
                            this.setState({
                                syncMessage: "App up to date.",
                                progress: false
                            });
                            break;
                        case codePush.SyncStatus.UPDATE_IGNORED:
                            this.setState({
                                syncMessage: "Update cancelled by user.",
                                progress: false
                            });
                            break;
                        case codePush.SyncStatus.UPDATE_INSTALLED:
                            this.setState({
                                syncMessage: "Update installed and will be run when the app next resumes.",
                                progress: false
                            });
                            break;
                        case codePush.SyncStatus.UNKNOWN_ERROR:
                            this.setState({
                                syncMessage: "An unknown error occurred.",
                                progress: false
                            });
                            break;
                    }
                },
                (progress) => {
                    this.setState({
                        progress: progress
                    });
                }
            );
        } catch (error) {
            Alert.alert('오류', '업데이트 과정에 오류가 발생했습니다.');
            codePush.log(error);
        }
    }
    componentDidMount() {
        this.codePushSync();
        AppState.addEventListener("change", (state) => {
            state === "active" && this.codePushSync();
        });
    }
    render(){
        if(!this.state.progress) {
            return null
        }
        let syncView, progressView;
        if (this.state.syncMessage) {
            syncView = (
                <View style={Style.TitleWrap}>
                    <Text style={Style.Title}>{this.state.syncMessage}</Text>
                </View>
            );
        }
        progressView = (
            <View style={Style.percentWrap}>
                <Text style={Style.percent}>{this.state.progress && parseInt((this.state.progress.receivedBytes/this.state.progress.totalBytes)*100)}%</Text>
            </View>
        );
        return (
            <View style={Style.Wrapper}>
                {progressView}
                {syncView}
            </View>
        )
    }
}
```

## 6. Release an app update

컴포넌트도 만들었고 CodePush도 만들었으니 실제 업데이트되는 과정을 한번 알아보자.

CodePush CLI에서 release-react 명령을 실행하면 JavaScript 및 에셋 파일을 번들 처리하고 CodePush 서버에 업데이트를 릴리스합니다. <br />(Run the release-react comand in the CodePush CLI, which will handle bundling your JavaScript and asset files and releasing the update to the CodePush server. )

### iOS

release-react 실행.

```
// 프로젝트 경로
code-push release-react ReactNativeComponentEx-iOS ios
```

--deploymentName, --description, --mandatory, --development등을 설정해서 release-react를 실행할 수도 있다.

```
code-push deployment ls ReactNativeComponentEx-iOS -k
```

이제 시뮬레이터를 돌려보면 다음과 같이 업데이트가 존재하는 것을 확인 할 수 있다. (iOS는 실제 폰에서 테스트를 지금 하지는 못했지만, 조만간 추가로 진행할 예정이다.)

<img scr="http://wagunblog.com/wp/wp-content/uploads/2016/12/codepush-08.png" alt="" width="30%" />

### Android

release-react 실행.

```
// 프로젝트 경로
code-push release-react ReactNativeComponentEx-Android android
```

code-push의 deployment 정보 확인

```
code-push deployment ls ReactNativeComponentEx-Android -k
```

<img scr="http://wagunblog.com/wp/wp-content/uploads/2016/12/codepush-09.png" alt="" width="30%" />

## 7. App Build

### iOS

추후 추가 예정

### Android

[React Native - Generating Signed APK](https://github.com/kjk7034/ReactNativeStudy/blob/master/docs/GeneratingSignedAPK.md)를 참고해서 APK 생성 후 배포.

## 8. App 설치

### iOS

추후 추가 예정

### Android

생성한 apk-release.apk를 서버에 올려서 다운로드 받아 폰에 설치했다.

<img scr="http://wagunblog.com/wp/wp-content/uploads/2016/12/codepush-10.png" alt="" width="30%" />

설치 완료~!

<img scr="http://wagunblog.com/wp/wp-content/uploads/2016/12/codepush-11.png" alt="" width="30%" />

그리고 텍스트를 일부 수정. 이제 CodePush를 통해서 업데이트 해보자.

```
// 텍스트 수정 ("React Native COMPONENTS 샘플"에서 "샘플" 제거 후 update)

// 프로젝트 경로
code-push release-react ReactNativeComponentEx-Android android
```

<img scr="http://wagunblog.com/wp/wp-content/uploads/2016/12/codepush-12.png" alt="" width="30%" />

업데이트를 하면 다음과 같이 텍스트가 제거된 앱을 확인할 수 있다.

<img scr="http://wagunblog.com/wp/wp-content/uploads/2016/12/codepush-13.png" alt="" width="30%" />

## 기타

꼭 위와 같이 하는 방법이 답은 아니다.

Production Deployment Key와 Staging Deployment Key를 사용하는 방법이 **4. CodePush-ify your mobile client** 과 다른 방법으로도 설정할 수 있다.

난 Staging을 설정하고 나중에 실제 라이브서버로 배포할 때, 빌드하는 과정에서 shell을 통해서 다음과 같이 Staging Key를 Production Key로 변경하여 빌드하는 방법을 사용했다.

```
// 샘플 코드
(
	pushd android/
		xml edit --inplace --update "//resources/string[@name='reactNativeCodePush_androidDeploymentKey']" --value <프로덕션 키> app/src/main/res/values/strings.xml
		./gradlew assembleRelease
	popd

	pushd ios/
		plutil -replace CodePushDeploymentKey -string <프로덕션 키> ReactNativeComponentEx/Info.plist
		xcodebuild -scheme ReactNativeComponentEx archive -archivePath ReactNativeComponentEx
		xcodebuild -exportArchive -archivePath ReactNativeComponentEx.xcarchive/ -exportPath ReactNativeComponentEx -exportProvisioningProfile "<발급받은 인증서명>"
	popd
)
```

[CodePush > Multi-Deployment Testing - Git](https://github.com/Microsoft/react-native-code-push#multi-deployment-testing)에 있는 예제처럼 Debug, Release를 구분해서 사용할 수도 있다.