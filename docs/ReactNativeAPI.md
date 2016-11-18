# React Native API

원래는 기존처럼 샘플을 모두 만들어서 공유하고 싶었다. Alert, Animated, ... 하나씩 만들다가 바쁜 업무일정으로 도저히 시간상 불가능했다.

그리고 요즘 스터디원들의 개인적인 사정들과 현재의 국가적 이슈로 스터디가 연기되고 있는 상황에서, 이대로면 흐지부지 스터디가 끝날 것 같아서 일단 스텝을 끊는다는 차원에서 간단한 사용법 정도만 정리하려고 한다.

예제 샘플은 스터디 처음할 때 만들었던 [React Native UIExplorer](http://wagunblog.com/wp/?p=2144)로 대체하려 한다.

해당 예제를 설치해서 보기가 어렵다면 예제가 있는 것들은 스펙 페이지 옆에 Run this example을 클릭하면 바로 확인해 볼 수 있다.
<img src="http://wagunblog.com/wp/wp-content/uploads/2016/11/react-native-api-0-1.png" width="40%" alt="" />

그리고 IOS, Android에서만 적용되는 API는 일단 패스. 

사용 안해본 API도 많고 새로생긴 API들도 있어서 보다보니 사용해본게 많지는 않았다.
그리고 글을 보다보면 xxx습니다. 되어있는건 대부분 구글 번역을 가져왔다. 가져오면서 번역 퀄리티가 눈에띄게 달라졌다는 것을 체감했다. (인공지능의 효과인가...) 

## Alert

Methods => static alert(title, message?, buttons?, options?, type?)

웹에서의 Alert과 유사하지만 다르다.
Alert의 title, 내용(message), 버튼을 여러개 만들어서 각각의 버튼 onPress해서 원하는 행동을 할 수 있다.

UI상 buttons가 2개인 경우, 웹에서의 confirm창과 같이 좌우 두개의 버튼이 생성되고, 3개 이상인 경우 일렬로 버튼이 생성된다.

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/11/react-native-api-1-1.png" width="40%" alt="" /> <img src="http://wagunblog.com/wp/wp-content/uploads/2016/11/react-native-api-1-2.png" width="40%" alt="" />

## Animated

애니메이션은 현대 UX의 중요한 부분이며 애니메이션 라이브러리는 유동적이고 강력하며 제작 및 유지 관리가 쉽도록 설계되어있다.
가장 간단한 워크 플로는 Animated.Value를 만들고 애니메이션 된 구성 요소의 하나 이상의 스타일 특성에 연결 한 다음 Animated.timing과 같은 애니메이션을 통해 업데이트를 수행하거나 panning 또는 Animated.event를 통해 스크롤과 같은 제스처에 연결하는 것입니다.

위의 스펙의 설명을 들어도 처음에는 이해가 잘 안갈 것이다. 

Animated 관련 예제는 샘플 예제를 따라해보기를 추천한다.

opacity를 0에서 1로 변경하는 FadeIn을 시작으로 Transform Bounce, delay, Easing등 적용한 예제를 확인 할 수 있다.

```
<Animated.View>로 PanResponder, Easing API들과 같이 사용하게 될 것이다.
```

## AppRegistry

AppRegistry는 모든 React Native 앱을 실행하는 JS 진입 점. 
App 루트 구성 요소는 AppRegistry.registerComponent로 등록해야 한다. 
네이티브 시스템은 App에 대한 번들을 로드 한 다음 AppRegistry.runApplication을 호출하여 준비가 되었을 때 실제로 응용 프로그램을 실행할 수 있다.

뷰를 소멸시킬 때 응용 프로그램을 "중지"하려면 runApplication으로 전달 된 태그로 AppRegistry.unmountApplicationComponentAtRootTag를 호출한다. 
이들은 항상 쌍으로 사용해야한다.

[React Native Component 샘플에서 적용했던 AppRegistry](https://github.com/kjk7034/ReactNativeComponentEx/blob/master/index.ios.jshttps://github.com/kjk7034/ReactNativeComponentEx/blob/master/index.ios.js)

## AppState

AppState는 앱이 포 그라운드 또는 백그라운드에 있는지 알려주고 상태가 변경 될 때 알려줌.<br />
(IOS 시뮬레이터에서 command + SHIFT + H + H를 이용해서 확인해 볼 수 있다.)

AppState는 푸시 알림을 처리 할 때 의도 및 적절한 동작을 결정하는 데 자주 사용.

## AsyncStorage

AsyncStorage는 LocalStorage대신 사용하며 앱에서 단순하고, 암호화되지 않고, 비동기식, 영구, key-value 저장 시스템.

On iOS, AsyncStorage is backed by native code that stores small values in a serialized dictionary and larger values in separate files. 

On Android, AsyncStorage will use either RocksDB or SQLite based on what is available.

API의 각 메소드는 Promise 객체를 반환한다.

## BackAndroid

해당 API도 패스하려다 사용하게된 케이스가 있어서 간단하게 ~

웹뷰를 사용하는 경우 이전 페이지로 가는 .goBack()을 사용하는 케이스에 대한 안드로이드 처리가 필요하다. 

## CameraRoll

CameraRoll은 로컬 카메라 롤 / 갤러리에 대한 액세스를 제공한다. 
이것을 사용하기 전에 RCTCameraRoll 라이브러리를 링크해야하며, [Linking Libraries](https://facebook.github.io/react-native/docs/linking-libraries-ios.html)를 참고하자. 

ListView를 이용하여 onEndReached시 has_next_page가 있는 경우 데이터를 더 받아와서 리스트에 계속 뿌리는 형태로 작업을 했다.

카메라롤 데이터를 불러와서 해당 사진을 클릭해서 이미지를 글쓰기에 첨부하는 기능들을 다음과 같은 UI로 만들었었다.

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/11/react-native-api-2-1.png" width="40%" alt="" />

## Clipboard

클립 보드에서 콘텐츠를 설정하고 가져 오기위한 인터페이스를 제공.
webview 페이지를 만들때 사용하는 URL 복사 같은데 사용.

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/11/react-native-api-3-1.png" width="40%" alt="" />

## Dimensions

주로 디바이스의 width, height값을 가져올 때 사용.

예를들어 View영역을 디바이스 기준으로 4(width):3(height) 비율로 고정값이 필요하다면, 다음과 같이도 활용할 수 있을 것이다.

```
const deviceWidth = Dimensions.get('window').width;

const viewWidth = deviceWidth
const viewHeight = deviceWidth*3/4
```

## Easing

Animated를 사용할 때 같이 사용한다. [참고](http://xaedes.de/dev/transitions/http://xaedes.de/dev/transitions/)

## Geolocation

Geolocation API는 웹 사양을 확장한다. [GeolocationGeolocationGeolocationGeolocation API](https://developer.mozilla.org/en-US/docs/Web/API/GeolocationGeolocation)

따로 API를 호출하지 않고 navigator.geolocation를 이용하여 사용.

작업하기 전에 다음과 같은 설정이 필요할 수도 있으니 참고해보자. 
[ReactNative Geolocation – Unable to retrieve location.](http://wagunblog.com/wp/?p=2035)

### IOS

IOS는 Info.plist에 NSLocationWhenInUseUsageDescription에 key를 포함시켜야 한다.

### Android

Android는 AndroidManifest.xml에 <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />을 추가하고 사용한다. 

## ImageEditor

Methods => static cropImage(uri, cropData, success, failure)
 
uri에 지정된 이미지를 크롭해서 성공, 실패에 따른 작업을 한다.

성공하면 ImageStore에 저장되고, 작업이 끝나면 자른 이미지를 ImageStore에서 삭제해야 한다. 

## ImageStore

위에 ImageEditor에서 사용하는 경우 같이 사용한다.

## InteractionManager

안써본 API... 모르니 스펙을 그냥 한번 읽어보기로..
 
InteractionManager를 사용하면 상호 작용 / 애니메이션이 완료된 후에 장기 실행 작업을 예약 할 수 있습니다. 
특히 자바 스크립트 애니메이션이 원활하게 실행될 수 있습니다.

이것을 다른 스케줄링 대안과 비교하십시오 :

* requestAnimationFrame () : 시간이 지남에 따라 뷰를 애니메이션화하는 코드입니다.
* setImmediate / setTimeout () : 나중에 코드를 실행하면 애니메이션이 지연 될 수 있습니다.
* runAfterInteractions () : 활성 애니메이션을 지연시키지 않고 나중에 코드를 실행합니다.

터치 핸들링 시스템은 하나 이상의 활성 접촉을 '상호 작용'으로 간주하고 모든 접촉이 종료되거나 취소 될 때까지 runAfterInteractions () 콜백을 지연시킵니다.

```
응용 프로그램은 다음과 상호 작용 한 후에 작업이 실행되도록 예약 할 수 있습니다.

InteractionManager.runAfterInteractions (() => {
    // ...long-running synchronous task...
});

```

```
InteractionManager를 사용하면 응용 프로그램에서 애니메이션 시작시 상호 작용 '핸들'을 생성하고 완료시 애니메이션을 삭제하여 애니메이션을 등록 할 수 있습니다.

var handle = InteractionManager.createInteractionHandle();
// run animation... (`runAfterInteractions` tasks are queued)
// later, on animation completion:

InteractionManager.clearInteractionHandle(handle);
// queued tasks run if all handles were cleared
```

## Keyboard

예전에 작업(v0.24)할 때 없었던 API가 추가 됨.

Methods => addListener(eventName, callback)를 이용하여 다음과 같은 eventName을 사용할 수 있다.

* keyboardWillShow
* keyboardDidShow
* keyboardWillHide
* keyboardDidHide
* keyboardWillChangeFrame
* keyboardDidChangeFrame

## LayoutAnimation

다음 레이아웃이 발생할 때 새 위치에 자동으로 애니메이션으로 표시한다.

이 API를 사용하는 일반적인 방법은 setState를 호출하기 전에 LayoutAnimation.configureNext를 호출하는 것입니다.

```
 componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
 }
 
 // 다음과 같이 setState를 호출 전에 사용한다. 
 
 _onPressToggle = () => {
    LayoutAnimation.easeInEaseOut();
    this.setState((state) => ({toggled: !state.toggled}));
};
```

## Linking

Linking은 브라우져를 통한 **링크, 앱간의 링크, tel:, mailto:등**ㅎ 많은 부분에서 사용한다.
이 API를 사용하기 위해서는 설정할 내용이 필요하니 다음 내용을 참고한다.

[Linking Spec](https://facebook.github.io/react-native/docs/linking.html)을 참고하여 Android deep linking, IOS RCTLinking 연결들을 설정하고 사용하자.

주로 사용하는 방법은 canOpenURL을 통해서 url이 사용할 수 있는지 체크한 후 사용한다.

```
Linking.canOpenURL(url).then(supported => {
  if (!supported) {
    console.log('Can\'t handle url: ' + url);
  } else {
    return Linking.openURL(url);
  }
}).catch(err => console.error('An error occurred', err));
```

## NativeMethodsMixin

NativeMethodsMixin은 기본 네이티브 구성 요소에 직접 액세스하는 메서드를 제공합니다.
다만, 네이티브 뷰에 의해 직접 지원되지 않는 복합 컴퍼넌트에는 이용할 수 없습니다.

view화면에 위치를 결정하고 비동기 콜백을 통해 값을 반환하는 용도로 measure를 사용

React root view가 다른 네이티브 뷰에 포함되어 있다면 measureInWindow를 통해서 절대 좌표를 얻을 수 있습니다.

measureLayout은 measure()와 비슷하지만 relativeToNativeNode로 지정된 조상과 상대적인 뷰를 측정합니다. 즉, 반환 된 x, y는 조상 뷰의 원점 x, y에 상대적입니다.

## NetInfo

온라인/오프라인 상태에 대한 정보를 확인할 수 있습니다.
주로 isConnected를 통해서 fetch전에 온라인/오프라인 상태를 한번 체크하고 fetch를 해서 사용하거나 와이파이 상태를 체크하는 용도로 사용합니다.

## PanResponder

PanResponder는 여러 가지 터치를 단일 제스처로 조정합니다. 
싱글 터치 제스쳐는 특별한 터치를 견딜 수있게 해주 며 간단한 멀티 터치 제스처를 인식하는 데 사용할 수 있습니다.

기본적으로 PanResponder는 장기 실행 JS 이벤트가 활성 제스처를 방해하지 못하도록 차단하는 InteractionManager 핸들을 보유합니다.

그것은 제스처 응답 시스템에 의해 제공되는 응답 핸들러의 예측 가능한 래퍼를 제공합니다. 
각 핸들러에 대해 네이티브 이벤트 객체와 함께 새로운 gestureState 객체를 제공합니다.

위의 내용만으로는 이 부분을 어디에 써야 할지 잘 모를 것이다. 
나는 [react-native-viewpager](https://github.com/race604/react-native-viewpager)를 가져와서 원하는 용도로 약간 튜닝해서 사용해봤다.

그리고 UIExplorer 예제에서는 터치해서 해당 영역을 이동시키는 예제가 있다. 

## PixelRatio

높은 픽셀 밀도의 장치를 사용하고 있다면 더 높은 해상도의 이미지를 얻고 싶은 경우 사용합니다.

## StyleSheet

웹에서 CSS와 같이 스타일을 적용하는 용도로 사용