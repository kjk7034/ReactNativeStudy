# React Native 서드파티 컴포넌트 적용하기.

이번 내용은 react-native-camera를 어떻게 쓰는지가 아니라, 여러 서드파티 컴포넌트들을 적용할 때 어떻게 해야하는지...

이런 개발을 처음 접하는 사람들에게 조금이나마 도움이 되고자 적어보려고 한다.

React Native에서 제공하는 컴포넌트나 API가 아닌 다른 것을 찾아서 검색하다보면 다양한 컴포넌들이 많다.

[USE REACT NATIVE](http://reactnative.com/)는 react native의 다양한 정보들이 있고, 그 중 [REACT NATIVE COMPONENTS](https://js.coach/react-native)를 보면 다양한 컴포넌트들을 확인 할 수 있다.

생각보다 내용이 많지도 않고, 내가 원하는 것들은 거의 없어서 구글을 통해서 검색하는게 더 좋은 것 같다.

## 예제 서드파티 컴포넌트 선택(react-native-camera)

일단 나는 카메라와 관련된 [react-native-camera](https://github.com/lwansbrough/react-native-camera)를 선택했다.

react-native-camera 사이트를 보면 Getting started로 잘 정리되어있다.

이 글을 보고 따라할 수 있다면 아래의 글은 읽어야 큰 도움이 되지는 않을 것이다. 반대로 뭘해야 할지 모르는 분들에게 아래의 글은 조금이나마 도움이 될 것 같다.

## 요구사항 파악하기

일단 이런 서드파티 문서들을 보면 대부분 Getting started와 같이 적용하는 법, 사용법이 잘 정리되어있다.

가장 먼저 할 부분은 요구사항(Requirements)을 체크한다.

요구사항에는 react native 버전, iOS 정책에 의해 추가해야하는 내용들, 해당 서드파티는 안드로이드나 iOS만 지원한다는 등 다양한 내용들이 있으니 잘 읽고 진행하면 될 것이다.

## 작업 방법.

react-native-camera 사이트를 보면 Mostly automatic install with react-native, Mostly automatic install with CocoaPods, Manual install이란 내용이 있을 것이다.

### Mostly automatic install with react-native

react-native로 인스톨 하는 내용으로 기본 설정할 내용들이 자동으로 한번에 설정된다. (완전 편하다.)

많은 컴포넌트들은 처음에는 Manual정도만 제공해서 각각 셋팅해야 하는데, 이와 같이 자동으로 설정을 해준다면 많은 개발 시간이 단축 될 것이다.

**여기서 잠깐 "react-native link react-native-camera"에서 react-native link는 뭘까??**

이러한 궁금증은 [RNPM(React Native Package Manager)](https://github.com/rnpm/rnpm)을 한번 보면 해결 될 것이다.

지금은 RNPM이 React Native Core를 통해서 병합되어있다. (Now, as you may know, RNPM is merged into React Native core.)

### Mostly automatic install with CocoaPods

CocoaPods로 인스톨 하는 내용으로 iOS에만 적용된다.

### Manual install

기본적인 인스톨 방법이다.

## 테스트

나는 **Manual install(Example1)**과 **Mostly automatic install with react-native(Example2)**를 테스트 해보려고 한다.

두 테스트를 비교하면 automatic install이 얼마나 편한지 느낄 것이다.

```
react-native init Example1
react-native init Example2
```

### Manual install(Example1)

#### iOS

문서에는 다음과 같이 진행하라고 되어있다. (버전에 따라서 변할 수 있어서 해당글을 가져옴.)

1. ```npm install react-native-camera@https://github.com/lwansbrough/react-native-camera.git --save```
2. In XCode, in the project navigator, right click Libraries ➜ Add Files to [your project's name]
3. Go to node_modules ➜ react-native-camera and add RCTCamera.xcodeproj
4. In XCode, in the project navigator, select your project. Add libRCTCamera.a to your project's Build Phases ➜ Link Binary With Libraries
5. Click RCTCamera.xcodeproj in the project navigator and go the Build Settings tab. Make sure 'All' is toggled on (instead of 'Basic'). In the Search Paths section, look for Header Search Paths and make sure it contains both ```$(SRCROOT)/../../react-native/React``` and ```$(SRCROOT)/../../../React``` - mark both as recursive.
6. Run your project (Cmd+R)

이제 실제로 진행해보도록 하자.

```
// Example1 프로젝트 경로에서 시작
npm install react-native-camera@https://github.com/lwansbrough/react-native-camera.git --save
```

XCode에서 해당 프로젝트의 Libraries 우클릭해서 Add Files to "Example1"

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/11/ReactNativeCameraExample1_1.png" alt="" width="30%" />

현재 프로젝트의 상위 폴더에 있는 node_modules에서 react-native-camera > ios > RCTCamera.xcodeproj를 Add한다.

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/11/ReactNativeCameraExample1_2.png" alt="" width="60%" />

그러면 Libraries에 다음과 같이 추가가 된 것을 확인 할 수 있다.

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/11/ReactNativeCameraExample1_3.png" alt="" width="30%" />

이제 프로젝트를 클릭해서 Build Phases를 선택하고 Link Binary With Libraries에 +버튼을 누른다.

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/11/ReactNativeCameraExample1_4.png" alt="" width="70%" />

여기에서 libRCTCamera.a를 Add한다.

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/11/ReactNativeCameraExample1_5.png" alt="" width="40%" />

이제 Libraries폴더에 RCTCamera.xcodeproj를 선택하고, Basic이 아닌 All을 선택해서 Search Paths에 Header Search Paths에 다음과 같이 ```$(SRCROOT)/../../react-native/React``` 과 ```$(SRCROOT)/../../../React```를 추가하고 둘다 recursive으로 설정한다.

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/11/ReactNativeCameraExample1_6.png" alt="" width="70%" />

그리고 해당 예제 코드는 사이트에 있는 코드를 가져와서 실행했고, command + R로 프로젝트를 Run하면 다음과 같이 카메라를 Access할지 실행된다.

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/11/ReactNativeCameraExample1_7.png" alt="" width="30%" />

잘 적용된 것을 확인 할 수 있다.

#### Android

일단 위의 코드로 설정전에 바로 실행해보자. 역시 다음과 같이 CameraManager.Aspect가 정의되지 않았다는 오류가 발생한다.

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/11/ReactNativeCameraExample1_8.png" alt="" width="30%" />

이제 안드로이드는 다음과 같이 진행하라고 되어있다. (버전에 따라서 변할 수 있어서 해당글을 가져옴.)

1. ```npm install react-native-camera@https://github.com/lwansbrough/react-native-camera.git --save```
2. Open up `android/app/src/main/java/[...]/MainApplication.java
    * Add ```import com.lwansbrough.RCTCamera.RCTCameraPackage;``` to the imports at the top of the file
    * Add ```new RCTCameraPackage()``` to the list returned by the ```getPackages()``` method. Add a comma to the previous item if there's already something there.
3. Append the following lines to ```android/settings.gradle```:
```
    include ':react-native-camera'
    project(':react-native-camera').projectDir = new File(rootProject.projectDir,   '../node_modules/react-native-camera/android')
```
4. Insert the following lines inside the dependencies block in ```android/app/build.gradle```:
```
    compile project(':react-native-camera')
```

안드로이드 스튜디오로 작업을 진행했다.

app > java > com.example1 > MainApplication에 ```import com.lwansbrough.RCTCamera.RCTCameraPackage;```를 추가했다.
그리고 ```RCTCameraPackage()```를 ```protected List<ReactPackage> getPackages()```에 추가했다.

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/11/ReactNativeCameraExample1_9.png" alt="" width="70%" />

그리고 Gradle Scripts > settings.gradle에 ```include ':react-native-camera'```과 ```project(':react-native-camera').projectDir = new File(rootProject.projectDir,   '../node_modules/react-native-camera/android')```를 추가했다.

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/11/ReactNativeCameraExample1_10.png" alt="" width="70%" />

그리고 Gradle Scripts > build.gradle에 dependencies 블록에 ```compile project(':react-native-camera')```을 추가했다.

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/11/ReactNativeCameraExample1_11.png" alt="" width="70%" />

그랬더니 다음과 같이 안드로이드 에뮬레이터에서도 잘 동작하는 것을 확인했다.

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/11/ReactNativeCameraExample1_12.png" alt="" width="30%" />

#### 변경 내용

샘플 작업 당시는 0.38.0이었고 지금은 0.40.0 이상이다. 이 과정에서 안드로이드 설정에 다음 내용이 추가되었다.
(0.40.0 전 후로 바뀐 점들이 있으니 꼭 작업전 확인해서 진행하길 권장함.)

5. Declare the permissions in your Android Manifest
    ```
    <uses-permission android:name="android.permission.CAMERA" />
    <uses-feature android:name="android.hardware.camera" />
    ```

### Example2

두번째는 Mostly automatic install with react-native를 이용해보자.

#### iOS

기존에 작업한 Example1 코드 그대로 가져온 다음에 그냥 빌드를 돌려봤다. 당연하겠지만, 노드를 설치하지 않았으므로 오류가 발생했다.

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/12/ReactNativeCameraExample2_1.png" alt="" width="30%" />

```
npm install react-native-camera@https://github.com/lwansbrough/react-native-camera.git --save
```

일단 설치하고 다시보니, 이제 CameraManager.Aspect가 없는 오류가 나온다.

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/12/ReactNativeCameraExample2_2.png" alt="" width="30%" />

기존 메뉴얼 대로면 xCode에서 이것저것 추가하고 설정하고 해야겠지만, 이번에는 다음과 같이 실행한다.

```
react-native link react-native-camera
```

해당 코드를 실행하면 iOS와 Android의 dependency에 연결이되어 성공적으로 모듈을 설치했다고 나온다.

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/12/ReactNativeCameraExample2_3.png" alt="" width="70%" />

다시 시뮬에이터를 확인하면, 이런저런 설치없이 잘 동작하는 것을 확인 할 수 있다.

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/12/ReactNativeCameraExample2_4.png" alt="" width="30%" />

#### Android

이미 위에서 설치를 했기 때문에, Android Studio를 통해서 열면 이미 react-native-camera 모듈이 설치되어 있는 것을 확인 할 수 있다.

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/12/ReactNativeCameraExample2_5.png" alt="" width="50%" />

바로 실행하면 다음과 같이 잘 나오는 것을 확인할 수 있다.

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/12/ReactNativeCameraExample2_6.png" alt="" width="30%" />

## 마치며...

앱을 개발해본 경험도 없고, 약간의 javascript 지식으로 해당 서드파티를 검색해서 처음 적용할 때 여러 우여곡절들이 있었다.

이미 잘 정리된 글인데도 환경적인 이해가 없으니 뭔소린지도 잘 모르겠다는 생각을 했다.

나와 같은 고민을 하는 사람에게 작은 도움이라도 되기를 바라며 ~~)
