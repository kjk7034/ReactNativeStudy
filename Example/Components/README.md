# React Native Component 예제 !!

테스트 버전은 "react-native": "^0.34.1".
모든 속성을 다 테스트 하지는 않았다.(IOS, Android 전용 컴포넌트도 제외)

가장 기본적인 내용으로 간단한 샘플을 만들어서 봄.

해당 예제를 다운받은 후 하나씩 따라해보면서 Spec에 있는 다른 속성들도 테스트하면서 진행하는게 제일 좋을 것 같음.

* ActivityIndicator
* Image
* KeyboardAvoidingView
* ListView
* MapView
* Modal
* Navigator
* Picker
* RefreshControl
* ScrollView
* Slider
* StatusBar
* Switch
* Text
* TextInput
* TouchableHighlight
* TouchableOpacity
* TouchableWithoutFeedback
* View
* WebView

## ActivityIndicator

Indicator : 흔히 사용하는 로딩상태 표시

1. animating={false} 속성
2. 속성을 마무것도 부여하지 않은 default
3. size="small" 속성
4. size="large" 속성
5. color="red"

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/10/react-native-component-1-1.png" width="40%" alt="ActivityIndicator 예제" />

## Image

이미지 : 이미지 크기 460, 460 / 컴포넌트 크기는 200, 80

1. require를 이용하여 로컬 파일 이미지 호출 (나머지는 uri 호출)
2. onLayout, onLoadStart, onLoad, onLoadEnd 속성 확인
3. resizeMode="cover" 속성
4. resizeMode="contain" 속성
5. resizeMode="stretch" 속성
6. resizeMode="center" 속성
7. resizeMode="repeat" 속성

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/10/react-native-component-2-1.png" width="40%" alt="Image 예제" />
<img src="http://wagunblog.com/wp/wp-content/uploads/2016/10/react-native-component-2-2.png" width="40%" alt="Image 예제" />

## KeyboardAvoidingView

입력창에 포커스가 갔을 때, 하단에 올라오는 키보드의 영역을 padding, position으로 처리할 수 있다.

일단 시뮬레이터에서 키보드를 확인 하기위하여 다음과 같은 옵션을 활성화 시킨다.

(Hardware > Keyboard > Toggle Software Keyboard 체크 후 확인)

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/10/react-native-component-3-1.png" width="40%" alt="KeyboardAvoidingView 예제" />

padding 설정 후 입력창을 클릭하고 위, 아래로 ScrollView 영역을 확인해본다.
키보드 높이 만큼 KeyboardAvoidingView 영역 하단에 padding이 적용되는 것을 확인 할 수 있다.

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/10/react-native-component-3-2.png" width="40%" alt="KeyboardAvoidingView 예제" />
<img src="http://wagunblog.com/wp/wp-content/uploads/2016/10/react-native-component-3-3.png" width="40%" alt="KeyboardAvoidingView 예제" />

position 설정 후 키보드의 높이 만큼, KeyboardAvoidingView가 올라가는 것을 확인 할 수 있다.
여기서 StatusBar, 위에 있는 컴포넌트 영역도 다 밀어내고 스크롤로 확인 할 수 없으며, 포커스 아웃으로 해당 영역은 재확인이 가능하다. (결국 KeyboardAvoidingView 영역의 높이값 유지)

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/10/react-native-component-3-4.png" width="40%" alt="KeyboardAvoidingView 예제" />

개인적으로 ScrollView가 있는 경우 padding으로, 없는 경우 position을 활용하면 좋을 것 같다.

## ListView

목록 리스트(html의 ol, ul). ScrollView 자식으로 ListView를 쓰다보면 스크롤 터치의 이벤트 관련한 다양한 문제가 발생할 것이다. ScrollView와 구분해서 잘 사용하자.

가상의 데이터가 있다고 가정하고, 스크롤이 하단에 도착했을 때 onEndReached를 이용하여 dataSource에 concat 해서 보여주는 샘플.

rowHasChanged를 통해서 기존의 데이터와 비교해서 변경되는 내용만 다시 그려주는 flow. (5번째 데이터 삭제를 통해서 해당 flow 확인해보기.)

renderFooter는 데이터가 있는 경우 변경되는 과정에서 Indicator로 활용.

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/10/react-native-component-4-1.png" width="40%" alt="ListView 예제" />

## MapView

구글 지도가 연동되어 다양한 속성이 있으니, 한번씩 따라해보자.
샘플은 showsUserLocation={true}, annotations의 longitude, latitude, title 적용.

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/10/react-native-component-5-2.png" width="40%" alt="MapView 예제" />

## Modal

전체 화면을 덮는 모달. (StatusBar도 덮음.)

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/10/react-native-component-6-1.png" width="40%" alt="Modal 예제" />
<img src="http://wagunblog.com/wp/wp-content/uploads/2016/10/react-native-component-6-2.png" width="40%" alt="Modal 예제" />

## Navigator

네비게이터, 흔히 router 기능을 이곳에서 함.
샘플 프로젝트의 index.js에 적용된 Navigator로 예제는 대체함.

Navigator를 그냥 사용하면 몇가지 원치 않는 기본 값들이 있고 개인적으로는 커스텀을 해서 사용한다.
(참고 : [React Native Navigator Custom](http://wagunblog.com/wp/?p=2080)

## Picker

Picker 예제 - IOS

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/10/react-native-component-7-1.png" width="40%" alt="Picker 예제 - IOS" />

Picker 예제 - Android

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/10/react-native-component-7-2.png" width="40%" alt="Picker 예제 - Android" />

## RefreshControl

일반적인 앱에서 화면을 새로고침하고 싶은 경우 사용.

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/10/react-native-component-8-1.png" width="40%" alt="RefreshControl 예제" />

## ScrollView

웹에서는 컨텐츠가 길어지면 브라우저 스크롤이 자동으로 생성되지만 어플리케이션에서는 그렇지 않다. 스크롤이 필요한 경우 ScrollView를 적용해주면 된다.

1. contentContainerStyle과 style 해당 ScrollView 영역을 확인해본다.
2. TextInput-1에 입력창이 활성화 된 상태에서 TextInput-2를 바로 입력하기 위해서 keyboardShouldPersistTaps={true} 를 설정한다. 그렇지 않으면 키보드가 닫히고 한번 더 눌러야 입력이 가능해진다.
3. horizontal={true} 를 이용하여 스크롤 방향을 설정할 수 있다.

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/10/react-native-component-9-1.png" width="40%" alt="ScrollView 예제" />

## Slider

minimumValue={1}, maximumValue={100}, step={1}, onValueChange를 이용하여 value 변경시 텍스트 변경한 예제.

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/10/react-native-component-10-1.png" width="40%" alt="Slider 예제" />

## StatusBar

컨텐츠 영역 상단의 StatusBar. IOS와 Android와 상단에 간격을 가지고 있고 가지지 않는 차이가 있어서 스타일로 Platform.OS를 분기하여 처리. (더 좋은 방법이 있으면 알려주세요)
animated={true}, hidden={false}, backgroundColor="blue" // 안드로이드용, barStyle="default" // IOS용 를 적용한 예제.

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/10/react-native-component-11-1.png" width="40%" alt="StatusBar 예제" />

## Switch

스위치 on, off 의 예제

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/10/react-native-component-12-1.png" width="40%" alt="Switch 예제" />

## Text

1. numberOfLines 으로 라인수 설정
2.  <Text><Text>Nesting 테스트</Text></Text> 와 같은 Nesting 확인해보기.

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/10/react-native-component-13-1.png" width="40%" alt="Text 예제" />

## TextInput

입력창. 다양한 속성들이 있으니 하나씩 다 살펴보면 좋을 것 같다.

1. autoCapitalize 테스트 (자동 대소문자)
2. defaultValue (초기 value 값)
3. placeholder
4. keyboardType (입력할 키보드 타입 선택) // Cross-platform 'default', 'email-address', 'numeric', 'phone-pad'
5. multiline={true} (여러줄 입력 가능)
6. secureTextEntry (HTML에서 input type="password"로 이해하면 될 듯)
7. returnKeyType (다음 버튼의 타입 선택) // Cross-platform 'done', 'go', 'next', 'search', 'send'

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/10/react-native-component-15-1.png" width="40%" alt="Text 예제" />
<img src="http://wagunblog.com/wp/wp-content/uploads/2016/10/react-native-component-15-2.png" width="40%" alt="Text 예제" />

## TouchableHighlight

터치시 underlayColor를 통해 색상 변경(기본은 검은색), activeOpacity로 opacity 적용가능.

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/10/react-native-component-14-1.png" width="40%" alt="TouchableHighlight 예제" />
<img src="http://wagunblog.com/wp/wp-content/uploads/2016/10/react-native-component-14-2.png" width="40%" alt="TouchableHighlight 예제" />

## TouchableOpacity

터치시 activeOpacity로 opacity 조절 (기본은 0.2)

## TouchableWithoutFeedback

매우 좋은 이유가 아니라면 사용하지 말라고 되어있음.(Do not use unless you have a very good reason.)
모든 요소는 터치시 시각적 피드백이 있어야 한다. (네이티브 느낌이 없는 웹 앱)

## View

UI를 구축하기위한 가장 기본적인 구성 요소.
flexbox, style, 약간의 터치조작, 접근성 컨트을 지원합니다.

## WebView

앱내에서 웹뷰를 띄울때.

원하는 uri를 넣었는데 다음과 같은 오류가 발생했다면...

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/10/react-native-component-1.png" width="40%" alt="오류화면" />

Xcode에 Info.plist 파일 > App Transport Security Settings > Exception Domains 에

+로 경로 추가(ex:wagunblog.com - Dictionary) > NSTemporaryExceptionAllowsInsecureHTTPLoads : true 설정

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/10/react-native-component-3.png" width="40%" alt="추가완료화면" />

Xcode에서 command + shift + K, command + shift + B 재빌드 해서 다시보면 잘나옴

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/10/react-native-component-2.png" width="40%" alt="결과화면" />

### 안드로이드
<img src="http://wagunblog.com/wp/wp-content/uploads/2016/12/react-native-component-2_1.png" width="40%" alt="안드로이드 결과화면" />
