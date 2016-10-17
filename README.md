# React Native Study

react native 스터디를 참여하면서 개인적으로 정리하는 곳.

## 스터디 요약

### 스터디 목표

여러 스터디를 진행 및 참가하면서 기간이 길어지고 스터디의 방향성이 모호해지는 경우가 많아서 정확한 목표를 가지고 단계적으로 진행하기로 계획함.

1단계는 각자 원하는 자신만의 앱을 하나씩 만들어 보는 것. 여러 컴포넌트들 및 API를 통해서 로컬 환경에서의 앱 개발.

2단계는 앱 배포 및 Codepush 등 을 통해서 업데이트

3단계는 Redux를 통해서 state를 관리하는 것을 최종 목표로 생각하고 있으며 일단 1단계부터 Agenda를 만들어서 진행.

API를 하나로 정하기보다는 각 회사에서 제작한 모바일 앱 or 웹을 React Native로 만들어 보는 것을 추천하고 싶음. 꼭 회사 용이 아니더라도 각자 만들고 싶은 앱을 자유롭게 진행.

생각나는 앱이 없으면 Open API를 이용한 날씨 앱. ([Weather Planet](https://developers.skplanetx.com/apidoc/kor/weather/))

### 스터디 구성원 (4명)

+ [김준극](https://github.com/kjk7034)
+ [김정윤](https://github.com/bowaxwing)
+ [남동훈](https://github.com/seye2)
+ [서재현](https://github.com/jejette)

### 스터디 장소 및 일정

9월 24일 강남 토즈 1시에서 첫 스터디. 스터디 일정 및 장소는 매주 스터디 끝날 때 유동적으로 결정~!! (상황에 따라 On, Off 병행)

### 스터디 1단계 Agenda - 최초 계획안

#### 1일차

+ 예습 : 환경설정([React Native Getting Started](https://facebook.github.io/react-native/docs/getting-started.html) 따라해오기) (못해온 사람은 옆에서 당일 도와주기) 
+ 예습 : [React JS 강좌](https://www.inflearn.com/course/react-%ea%b0%95%ec%a2%8c-velopert/?action=curriculum) 섹션 1 ~ 3까지 보고오기. (React Native를 하기위해서 기본적인 React JS에 대해서 어느정도 알아야 진행이 가능함)
+ xcode(mac), android studio 설치해오기
+ 진행했던 프로젝트 결과물 공유 + codepush Update 시연 / (김준극)
+ [React Native UIExplorer 설치 및 확인(MAC)](http://wagunblog.com/wp/?p=2144) / (김준극)
+ 앞으로의 스터디 장소 및 시간 결정
+ 회비 및 총무 결정
+ 2일차 예습 공지 및 발표자 선정

#### 2일차

+ 예습 : react-native의 COMPONENTS 예제 모두 따라해보기 (IOS, Android는 제외)
+ 예습 : [[React.JS] 강좌 7편 Component LifeCycle API](https://velopert.com/1130) 보고오기.
+ COMPONENTS 복습 발표 / (???)
+ react lifecycle 발표 / (???)
+ 3일차 예습 공지 및 발표자 선정

#### 3일차

+ 예습 : react-native의 APIS 예제 모두 따라해보기
+ 예습 : 샘플 앱 만들기 - 1/3 (Navigator를 이용하여 페이지 구성)
+ APIS 복습 발표 / (???)
+ JavaScript Environment에 있는 ES6 문법 설명 / (???)
+ CSS Flexbox / (???)
+ StyleSheet 작업하면서 수치 값에 대한 경험 공유. / (김준극)

#### 4일차

+ 예습 : 샘플 앱 만들기 - 2/3 (Fetch, StyleSheet 적용)
+ 각자 만든 샘플 앱 코드리뷰
+ Third Party에 관한 설명 ([React Native Camera](https://github.com/remobile/react-native-camera), 웹폰트 적용사례)) / (김준극)

#### 5일차

+ 예습 : 샘플 앱 최종 완성, 필요할 것 같은 Third Party 찾아보기 
+ 찾은 Third Party 공유
+ 완성된 앱 공유
+ 1단계 완료 회식!!

### 스터디 2단계 목표 (자세한 Agenda 미정)

+ 앱 등록 및 배포
+ CodePush 적용

### 스터디 3단계 목표 (자세한 Agenda 미정)

+ Redux 활용

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

### 샘플 예제 만들기

아직 뭔가 만들고 싶다는 구상이 없어서 고민중.
실제 사용할 Component들을 서드파티 포함해서 몇개 추가해볼까 생각중이기도함.

*****

## 샘플 프로젝트 진행현황 (진행 전)

```
react-native init reactNativeStudy
```

기본 설치만 해놓은 상태.

*****

## 기타 참고자료

* [React & Express 를 이용한 웹 어플리케이션 개발하기](https://www.inflearn.com/course/react-%EA%B0%95%EC%A2%8C-velopert/)
* [React Native를 사용한  초간단 커뮤니티 앱 제작](http://www.slideshare.net/taggon/react-native)
* [리액트 네이티브로 시작하는 앱 개발 #1](https://realm.io/kr/news/react-native/)
* [앱 예제 - SendBird 채팅앱](http://blog.sendbird.com/ko/tutorialreact-native%EC%97%90%EC%84%9C-%EC%B1%84%ED%8C%85-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0/)
* [앱 예제 - open API 활용 예제](https://github.com/kjk7034/RealTimeEmergencyDepartmentInfo)
* [react-native-tutorial-korean 자료](https://g6ling.gitbooks.io/react-native-tutorial-korean/content/1-1ko.html)
* [React 공부 정리](http://www.sangkon.com/2016/08/02/react-study-01/)
