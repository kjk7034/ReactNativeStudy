# React Native Study

이 글은 [React Native](https://facebook.github.io/react-native/)를 해보고 싶은데, [React Native Getting Started](https://facebook.github.io/react-native/docs/getting-started.html)와 [React Native Getting Tutorial](https://facebook.github.io/react-native/docs/tutorial.html)을 보고 따라 하기 쉽지 않은 분, 튜토리얼은 따라 할 수 있지만 뭘 어떻게 해야 할지 모르는 분에게 조금이나마 도움이 되었으면 하는 마음에 스터디가 끝나고 새롭게 글을 정리했다.

해당 내용 외에 추가적으로 필요하거나 궁금한 내용들은 [Facebook group - 생활코딩](https://www.facebook.com/groups/codingeverybody/), [Facebook group - React Korea](https://www.facebook.com/groups/react.ko/) 같은 커뮤니티에 물어보면 좋은 답변을 받을 수 있을 것이다.

개인적으로 궁금한 내용은 이메일로 문의를 ...

기존에 스터디를 진행하면서 간단하게 정리한 내용들은 **[스터디 정리 문서](https://github.com/kjk7034/ReactNativeStudy/blob/master/docs/RealStudy.md)**로 옮겼다.

**스터디 정리 문서**에는 스터디 시작 전 아젠다부터, 스터디 목표 설정 과정, 스터디 주차별 내용 정리, 기타 참고 자료 등이 포함되어 있다. 스터디가 

샘플 작업을 한 코드, 문서들에 부족한 부분이 있어서 추가하고 싶거나 잘못된 내용에 대한 피드백이 있으신 분들은 언제든 환영합니다. 같이 더 나은 콘텐츠를 만들고 싶은 분들도 환영합니다.

그리고 튜토리얼의 개념처럼 하나씩 따라 해보기를 원하는 분들은 지금까지 본 자료 중에서는 [React Native Express](http://www.reactnativeexpress.com/)가 제일 좋은 것 같다.

## 스터디 구성원 (4명)

이 자료를 만드는데 도움을 주신 우리 스터디 구성원입니다. :)

* [김준극](https://github.com/kjk7034)
* [김정윤](https://github.com/bowaxwing)
* [남동훈](https://github.com/seye2)
* [서재현](https://github.com/jejette)

## 추천목차

1. 스터디 목표 세우기
2. 프로젝트 환경설정
3. React의 이해
4. React Native
    1. COMPONENTS
    2. APIS
    3. 스타일 입히기
    4. JavaScript Environment
5. 샘플 앱 만들기
6. 배포용 파일 만들기
7. Codepush 적용하기
8. 기타

## 1. 스터디 목표 세우기

단순하게 Components, API 등을 따라 하기 보다, 본인이 만들고 싶은 간단한 샘플 앱을 목표로 세우고 진행하면 좋을 것 같다.

생각나는 앱이 없으면 Open API를 이용한 날씨 앱도 괜찮음. ([Weather Planet](https://developers.skplanetx.com/apidoc/kor/weather/))

## 2. 프로젝트 환경설정

Mac도 많이 안 써보고, 앱 개발도 잘 모르는 분들에게는 이 과정이 제일 힘들 것 같다.

그나마 다행인 건 예전(0.17 version)에는 없었지만, 지금(0.39 version)은 [React Native Getting Started](https://facebook.github.io/react-native/docs/getting-started.html)에 OS 별로 어떻게 설정해야 하는지 잘 정리가 되어있다.

[Wise의 React Native – 기본 세팅하기](http://wagunblog.com/wp/?p=1855)에서 링크의 내용들이 지금 많이 바뀌어서 해당 글만 보고 이해가 어려운 부분들이 있으니 가볍게 참고.

**React Native Getting Started**를 진행하다가 개개인의 작업환경에 따라 환경 변수를 이미 다르게 지정했던가 기타 다른 여러 이슈들로 문제가 발생할 수 있다.

이런 경우 주변 지인들이나 [Facebook group - 생활코딩](https://www.facebook.com/groups/codingeverybody/), [Facebook group - React Korea](https://www.facebook.com/groups/react.ko/) 같은 커뮤니티에 물어보면 좋은 정보를 얻을 것이다.

기본 환경설정이 끝났으면 [react-native/Examples/UIExplorer/](https://github.com/facebook/react-native/tree/master/Examples/UIExplorer)를 실행해보자.

이유는 React Native에서 사용하는 Component, API 기본 기능들을 하나씩 확인할 수 있다.

실행하는 과정은 [React Native UIExplorer 설치 및 확인(MAC)](http://wagunblog.com/wp/?p=2144)을 참고.

실행하지 않고도 [USE REACT NATIVE - IOS BASE COMPONENTS](http://www.reactnative.com/uiexplorer/)에서도 확인할 수 있다.

## 3. React의 이해

React Native를 진행하려면 props, state 등 기본적인 React에 대한 이해가 있어야 한다.

React에 대한 기본 지식이 없으면, [[React.JS] 강좌](https://velopert.com/775)를 통해서 기본 지식을 얻을 수 있다.

그리고 React LifeCycle에 대한 이해를 더 돕기 위해서 다음 링크들도 참고하자.

* [React Component Specs and Lifecycle 발표](https://github.com/kjk7034/ReactLifecycle)
* [[React.JS] 강좌 7편 Component LifeCycle API](https://velopert.com/1130)
* [참고이미지 - imgh.us/react-lifecycle.svg](http://imgh.us/react-lifecycle.svg)

## 4. React Native

**React Native > Docs**에는 THE BASICS, GUIDES, GUIDES (IOS), GUIDES (ANDROID), COMPONENTS, APIS으로 정리되어 있다.

처음부터 하나씩 다 읽어보고 작업하는 것을 권장한다. 영어를 못하는 분들도 요즘 구글 번역이 예전에 비해서 퀄리티도 높아져서 조금은 이해할 수 있을 것이다. 

해당 글은 React Native에서 사용하는 Component, API 들과 스타일을 입히는 방식을 통해서 원하는 앱을 만드는 과정을 설명하고자 한다.

참고용 샘플 예제들은 모든 Props, Methods를 테스트하지는 않았다.

해당 샘플을 clone 해서 샘플에 없는 Props, Method들을 다 테스트해보기를 권장하며, 테스트하면서 UIExplorer의 내용도 같이 참고해보자.

**환경설정**에서 프로젝트 생성과 run을 해봤을 것이다.

```
react-native init 프로젝트명
```

최초 생성된 프로젝트에서 iOS는 index.ios.js, 안드로이드는 index.android.js 파일이 index 파일이라는 것을 알 수 있다.

React Native의 장점이 하나의 코드로 iOS와 안드로이드를 동시에 만들 수 있는 것이라고 생각한다. 아래의 코드를 index.ios.js, index.android.js 동시에 적용해서 app이라는 폴더를 기준으로 샘플 작업들을 했다.

```
import {
    AppRegistry
} from 'react-native';

import { App } from './app';

AppRegistry.registerComponent('프로젝트명', () => App);
```

### 4.1 COMPONENTS

React Native Component는 [React Native Component 예제 !!](https://github.com/kjk7034/ReactNativeComponentEx)에 정리를 했다.

샘플 예제들을 참고하면서 원하는 스타일을 테스트해보자.

xxxxxIOS, xxxxxAndroid와 같이 iOS, 안드로이드만 지원하는 부분들은 제외했지만, iOS or 안드로이드 앱을 동시에 만드는 것이 아닌 하나만 만드는 분들은 해당 내용도 꼭 테스트해보세요.

### 4.2 APIS

React Native API는 Component처럼 샘플 코드를 다 만들고 싶었지만 바쁜 업무로 간단하게 Docs를 정리하는 수준에서 경험한 내용들을 추가로 작성했다. 안 써본 API들도 있어서 해당 API들은 구글 번역을 통해서 복사 붙여넣기를 했다.

[React Native API](https://github.com/kjk7034/ReactNativeStudy/blob/master/docs/ReactNativeAPI.md)에서 정리된 내용을 확인할 수 있다.

### 4.3 스타일 입히기

기본적인 컴포넌트로 어느 정도 구조를 만들었다면 이제 표현의 단계인 스타일을 입히는 과정에 대해서 알아보자. 기본적으로 StyleSheet을 사용하는 방법, width와 height, flexbox에 대한 이해가 필요하다.

[React Native 스타일 관련](https://github.com/kjk7034/ReactNativeStyling)에 정리를 했다.

CSS Flexbox에 대한 내용을 잘 모르겠으면, [CSS TRICKS - A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)를 참고하자.

### 4.4 JavaScript Environment

버전 0.5.0부터 React Native는 Babel 자바스크립트 컴파일러를 사용한다.

[React Native 0.39의 JavaScript Environment](http://facebook.github.io/react-native/releases/0.39/docs/javascript-environment.html)에서 ES5, 6, 7 사용 가능한 문법을 확인할 수 있다.

ES6에 대해 모든 것은 아니지만 많이 사용할 것 같은 내용을 [ES6 - seye2](https://github.com/seye2/es6)에 정리했다. 

## 5. 샘플 앱 만들기

위의 내용들을 토대로 간단하게 샘플 앱을 만들어 볼 수 있다.

[공공데이터 포털 API (전국 응급의료기관 조회 서비스)](https://www.data.go.kr/subMain.jsp?param=T1BFTkFQSUAxNTAwMDU2Mw==#/L3B1YnIvdXNlL3ByaS9Jcm9zT3BlbkFwaURldGFpbC9vcGVuQXBpTGlzdFBhZ2UkQF4wMTJtMjEkQF5wdWJsaWNEYXRhUGs9MTUwMDA1NjMkQF5icm1DZD1PQzAwMDkkQF5tYWluRmxhZz10cnVl), [위치 좌표 - 다음 지도 API](https://developers.daum.net/services/apis/local/geo/coord2addr)를 통해서 간단하게 [응급실 실시간 가용 병상정보 App](https://github.com/kjk7034/RealTimeEmergencyDepartmentInfo)를 만들었다.

앱을 만드는 과정에서 React Native COMPONENTS에서 제공하지 않는 기능이 필요한 경우가 많다.

이런 경우 직접 앱 개발을 해도 되겠지만, 내가 필요한 내용은 이미 다른 사람들도 필요했을 것이고 잘 찾아보면 다양한 서드파티들이 있으니 선택해서 사용하면 된다.

어디에 무엇이 있는지 잘 모르겠으면, [js.coach의 react-native](https://js.coach/react-native)에 다양한 서드파티들이 있으니 한번 쭉 보고 나중에 필요한 기능들을 가져다 쓰면 된다.

예를 들어 카메라 기능이 필요해서 react-native-camera를 적용하는 과정에 대해서 [React Native 서드파티 컴포넌트 적용하기](https://github.com/kjk7034/ReactNativeCameraExample)에 정리했다.

## 6. APK 배포용 파일 만들기

샘플 앱을 만들었으면 이제 우리가 폰에서 직접 볼 수 있도록 배포용 파일을 만들어야 한다. 

[Generating Signed APK](https://facebook.github.io/react-native/docs/signed-apk-android.html)을 보고할 수 있다.

테스트 과정은 [React Native - Generating Signed APK](https://github.com/kjk7034/ReactNativeStudy/blob/master/docs/GeneratingSignedAPK.md)에 정리했다.

## 7. Codepush 적용하기

개인적으로 생각하는 React Native를 사용하는 이유 중 **가장 큰 장점**이 Codepush라고 생각한다.

앱에 간단한 수정이 발생했을 때 매번 앱을 다시 빌드 해서 배포하고 있지만 이런 과정을 획기적으로 줄여주는 단계라고 생각한다.

테스트 과정은 [CodePush 적용하기](https://github.com/kjk7034/ReactNativeStudy/blob/master/docs/CodePush.md)에 정리했다.

## 8. 기타 소개

### mobile app development tool (Exponent)

React Native로 앱을 만들며, Exponent SDK는 연락처, 카메라 및 소셜 로그인과 같은 시스템 기능에 대한 액세스를 제공한다.

[ReactNative - Exponent](https://github.com/kjk7034/ReactNativeExponent)에 정리했다.

### UI 관련 (NativeBase)

작업을 하다 보면 Tab, 버튼 등등 수많은 UI 관련 컴포넌트들이 필요할 것이다. 

여러 참고할 만한 사이트 중에서 [NativeBase-KitchenSink v0.5.18](https://github.com/GeekyAnts/NativeBase-KitchenSink)이 제일 괜찮은 것 같다.

앱을 다운로드해서 본인의 폰으로 테스트를 해보고 쓸만한 컴포넌트들은 커스텀 해서 쓰던가 혹은 [NativeBase](http://nativebase.io/)를 활용할 수도 있다.
