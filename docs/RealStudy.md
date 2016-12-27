# React Native Study

react native 스터디를 참여하면서 개인적으로 정리하는 곳.

내가 처음 공부할 때 처럼 ReactNative는 해보고 싶은데 뭐부터 해야할지 잘 모르는 사람에게 도움이 되었으면 하는 마음에 정리를 합니다.

## 스터디 목표 설정과정

1인 1앱 만들기를 목표.

여러 스터디를 진행 및 참가하면서 기간이 길어지고 스터디의 방향성이 모호해지는 경우 흐지부지 되는 경우가 많아서 목표를 설정하고 필요한 부분에 대해서 단계적으로 진행하기로 계획을 했다. 

1단계는 각자 원하는 자신만의 앱을 하나씩 만들어 보는 것. 여러 컴포넌트들 및 API를 통해서 로컬 환경에서의 앱 개발.

2단계는 앱 배포 및 Codepush 등 을 통해서 업데이트

3단계는 Redux를 통해서 state를 관리하는 것을 최종 목표로 생각하고 있으며 일단 1단계부터 Agenda를 만들어서 진행.

1단계 상세 아젠다는 [스터디 정보](https://github.com/kjk7034/ReactNativeStudy/blob/master/docs/StudyAgenda.md)에서 확인할 수 있다 

(스터디 시작전 아젠다 이며 실제 스터디를 진행하면서 변경된 내용들이 많다.)

*****

# 스터디 내용 정리

## 스터디 1일차 (9월 24일)

### 프로젝트 환경설정

내가 처음에 환경설정할 때 React Native 버전은 0.18... 지금은 0.32.0 ... 참으로 빠르다는 생각이... 

[React Native Getting Started](https://facebook.github.io/react-native/docs/getting-started.html)를 참고하면 된다. 오랜만에 보니 전보다 훨씬 잘 정리가 되어있었음

전에 내가 세팅하던 과정. (참고용) [Wise의 React Native – 기본 세팅하기](http://wagunblog.com/wp/?p=1855)

### React Native UIExplorer 설치 및 확인(MAC)

[React Native UIExplorer 설치 및 확인(MAC)](http://wagunblog.com/wp/?p=2144) 발표

### 기타 사항

스터디 장소 및 일정은 상황에 따라 주마다 유동적으로, 스터디 발표는 랜덤 발표!! 당일날 뽑아서 발표.

## 스터디 2일차 (10월 1일)

회사를 다니며 스터디 예습하고 준비하기는 역시 많이 힘든 듯. 모두 다 준비해오지는 못했고, 그래도 지난주 진행했던 환경설정까지는 모두 마무리해왔다.
Lifecycle을 발표하는데 생각보다 많은 시간이 들었으며, Component를 하기 시간도 애매하고 예습도 많이 해오지는 않은 상태라 Component는 다음 주에 이어서 진행하기로 하고, 최근 동훈이가 관심을 가지고 있는 기술에 대해서 진행했다.  

### Lifecycle

* [React Component Specs and Lifecycle 발표](https://github.com/kjk7034/ReactLifecycle)
* [React Native Express - 참고 사이트](http://www.reactnativeexpress.com/)
* [참고이미지 - imgh.us/react-lifecycle.svg](http://imgh.us/react-lifecycle.svg)

### 동훈이가 최근 관심을 가지고 있는 부분

#### PWA

*[PWA - Progressive Web Apps](https://developers.google.com/web/progressive-web-apps/)*.

PWA 예제 사이트를 보면서 IndexDB, manifest cache, service worker 등에 대한 얘기가 나왔으며, 그중 가장 핫하게 받아들이고 있는 부분은 service worker였다.
  
#### AMP
 
*[AMP - Accelerated Mobile Pages](https://www.ampproject.org/)*를 적용한 경험담.

AMP가 대충 이런 거다는 알고 있었지만 조금 더 들어가서 validation의 통과 여부에 따른 google 검색 노출 여부.
지도 작업 관련해서는 ifame을 통해서 구현 가능.  

## 스터디 3일차 (10월 15일)

인원들의 사정으로 Online 스터디로 대체함.

### 컴포넌트 예제 따라해보기.

[React Native Component 예제 !!](https://github.com/kjk7034/ReactNativeComponentEx) 자료 공유.

## 스터디 4일차 (10월 22일)

### React Native 스타일 관련
React Naive > DOCS > THE BASICS의 내용에서 다음의 세가지를 한번 알아봤다.
* Style,
* Height and Width,
* Layout with Flexbox

[React Native 스타일 관련](https://github.com/kjk7034/ReactNativeStyling) 자료 공유. (경험담 포함)

### Tech planet 2016에서 정윤이형이 발표한 내용 공유

* 주제 : Introduction to Using NPM scripts as a Build Tool
* [발표자료](http://readme.skplanet.com/wp-content/uploads/%ED%8A%B8%EB%9E%993-3.Introduction-to-Using-NPM-scripts-as-a-Build-Tool.without-Gulp-or-Grunt_%EB%B0%B0%ED%8F%AC.pdf) 
* [발표영상](https://readme.skplanet.com/?p=13267)

## 스터디 5일차 (11월 19일)

Online 스터디로 대체함.

### javascript ES6
[javascript ES6](https://github.com/seye2/es6) 자료 공유

### React Native API
[React Native API](https://github.com/kjk7034/ReactNativeStudy/blob/master/docs/ReactNativeAPI.md) 자료 공유

## 스터디 6일차 (12월 3일)

스터디 5일차에 진행했던, [React Native API](https://github.com/kjk7034/ReactNativeStudy/blob/master/docs/ReactNativeAPI.md) 설명

## 스터디 7일차 (12월 10일)

[CodePush](https://github.com/kjk7034/ReactNativeStudy/blob/master/docs/CodePush.md) 자료 공유 및 시연

[ReactNative - Exponent](https://github.com/kjk7034/ReactNativeExponent) 자료 공유

[NativeBase-KitchenSink v0.5.18](https://github.com/GeekyAnts/NativeBase-KitchenSink) 소개

스터디 5일차에 진행했던, [javascript ES6](https://github.com/seye2/es6) 설명

동훈이가 요즘 보고 있는 universal rendering중 **[Next.js](https://zeit.co/blog/next)** 소개

*****

# 스터디를 마무리하며...

React Native를 실무에 적용했던 과거의 버전과 지금의 버전의 차이에 대해서 많이 달라진 점에 대해서 알 수 있었고, 처음 적용할 떄 보다 기본적인 내용들에 대해서 정리하면서 더 깊에 알수 있는 시간이 되어서 좋았다.

React Native 스터디라는 주제를 잡고 시작했지만, PWA, AMP, NPM scripts, universal rendering등 다양한 이야기들을 할 수 있는것도 좋았다.

1인 1앱 만들기위한 목표로 출발을 했지만, 개개인의 바쁜 일정으로 각자 만들어서 서로 코드를 공유하는 부분을 하지 못한 점이 가장 아쉬웠다.

*****

# 기타 참고 자료

* [React Native Express](http://www.reactnativeexpress.com/)
* [ReactNative - Exponent](https://github.com/kjk7034/ReactNativeExponent)
* [React & Express 를 이용한 웹 어플리케이션 개발하기](https://www.inflearn.com/course/react-%EA%B0%95%EC%A2%8C-velopert/)
* [React Native를 사용한 초간단 커뮤니티 앱 제작](http://www.slideshare.net/taggon/react-native)
* [리액트 네이티브로 시작하는 앱 개발 #1](https://realm.io/kr/news/react-native/)
* [앱 예제 - SendBird 채팅앱](http://blog.sendbird.com/ko/tutorialreact-native%EC%97%90%EC%84%9C-%EC%B1%84%ED%8C%85-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0/)
* [앱 예제 - open API 활용 예제](https://github.com/kjk7034/RealTimeEmergencyDepartmentInfo)
* [react-native-tutorial-korean 자료](https://g6ling.gitbooks.io/react-native-tutorial-korean/content/1-1ko.html)
* [React 공부 정리](http://www.sangkon.com/2016/08/02/react-study-01/)