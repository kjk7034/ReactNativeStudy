# CodePush 적용하기

[CodePush](http://microsoft.github.io/code-push/index.html)는 React Native의 장점중 큰 부분을 차지한다. 일부 수정을 통해 매번 앱을 빌드하고 배포하는 과정없이 CodePush를 통해서 빌드 없이 업데이트가 가능하다.

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

## 3. Register your app with the service

```
code-push app add ReactNativeComponentEx
```

ReactNativeComponentEx이라는 해당 프로젝트 이름을 등록을 했다.

그러면 Production Deployment Key와 Staging Deployment Key가 발급된다.

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

Xcode에서 Info.plist에서 CodePushDeploymentKey에 CodePush에서 받은 Staging Deployment Key을 입력.

### Android

MainApplication.java 파일에 new CodePush에 CodePush에서 받은 Staging Deployment Key을 입력.

```
@Override
protected List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(
        new MainReactPackage(),
        new CodePush("TIlQvj1XU0RQOuStmrkMViN20FmlV11jsZYe-", getApplicationContext(), BuildConfig.DEBUG)
    );
}
```

## 5. CodePush Component 생성

기존에 만들은 코드에서 다음과 같이 Navigator가 실행되는 시점에 CodePushComponent를 적용했다. (예제 코드 확인)

```
<View style={{flex:1}}>
    <Navigator {...navigatorProps} />
    <CodePushComponent />
</View>
```

업데이트가 발생시 해당 업데이트과정을 보여주는 컴포넌트를 추가하고, 앱을 새로 동작하게 하는 내용을 만들었다. (CodePush에는 다양한 기능들이 있는데, 이 기능 추가적으로 필요한 부분들은 GitHub를 참고하자.) 

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
code-push release-react ReactNativeComponentEx ios
```

code-push의 deployment 정보 확인

```
code-push deployment ls ReactNativeComponentEx -k
```

이제 시뮬레이터를 돌려보면 다음과 같이 업데이트가 존재하는 것을 확인 할 수 있다. (iOS는 실제 폰에서 테스트를 지금 하지는 못했지만, 조만간 개발자 개정 생성 후 테스트를 진행할 예정이다.)

### Android

release-react 실행.

```
// 프로젝트 경로
code-push release-react ReactNativeComponentEx android
```

code-push의 deployment 정보 확인

```
code-push deployment ls ReactNativeComponentEx -k
```

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

그리고 텍스트를 일부 수정. 이제 CodePush를 통해서 업데이트 해보자.

```
// 텍스트 수정 (React Native COMPONENTS 샘플 - 텍스트에서 - 제거)

// 프로젝트 경로
code-push release-react ReactNativeComponentEx android
```

## 기타

꼭 위와 같이 하는 방법이 답은 아니다.

Production Deployment Key와 Staging Deployment Key를 사용하는 방법이 **4. CodePush-ify your mobile client** 과 다른 방법으로도 설정할 수 있다.

난 Staging을 설정하고 나중에 실제 라이브서버로 배포할 때, shell을 통해서 build하는 과정에서 Staging Key를 Production로 변경하여 빌드하는 방법을 사용했다.

```
// 샘플 코드
(
	pushd android/
		xml edit --inplace --update "//resources/string[@name='reactNativeCodePush_androidDeploymentKey']" --value <프로덕션 키> app/src/main/res/values/strings.xml
		./gradlew assembleRelease
	popd

	pushd ios/
		plutil -replace CodePushDeploymentKey -string <프로덕션 키> remote/Info.plist
		xcodebuild -scheme remote archive -archivePath remote
		xcodebuild -exportArchive -archivePath remote.xcarchive/ -exportPath remote -exportProvisioningProfile "<발급받은 인증서명>"
	popd
)
```

[CodePush > Multi-Deployment Testing - Git](https://github.com/Microsoft/react-native-code-push#multi-deployment-testing)에 있는 예제처럼 Debug, Release를 구분해서 사용할 수도 있다.