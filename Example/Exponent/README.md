# ReactNative - Exponent

[Exponent - v11.0.0](https://getexponent.com/)는 자바스크립트를 사용하여 고품질의 기본 iOS 및 Android 애플리케이션을 구축하고 손쉽게 배포 할 수있게 해주는 모바일 앱 개발 도구입니다.<br />(Exponent is a mobile app development tool that enables you to build high quality native iOS and Android applications using JavaScript and deploy them effortlessly.)

Exponent App을 작성하는 것은 Xcode / Android Studio를 열거 나 원시 코드를 작성할 필요가 없다는 것을 제외하고는 React Native 앱을 작성하는 것과 같습니다.<br />(
Writing an Exponent app is like writing a React Native app, except you never need to open Xcode / Android Studio, or write any native code.) 

Exponent SDK는 연락처, 카메라 및 소셜 로그인과 같은 시스템 기능에 대한 액세스를 제공합니다.<br />(The Exponent SDK provides access to system functionality such as contacts, camera and social login. 
)

Exponent를 사용하여 좀더 쉽게 React Native 앱을 만들 수 있을 것이라 생각하고 테스트를 해봤다.

## Installation

[Installation - Exponent v11.0.0 documentation](https://docs.getexponent.com/versions/v11.0.0/introduction/installation.html)에서 macOS, Windows (64-bit), or Linux의 다운로드를 제공하고 있다.

나는 macOS에서 테스트를 진행했다.

## Sign in screen

설치가 완료되고 실행하면 Sign in or register 페이지가 실행된다. username, password를 입력해서 등록완료.

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/12/exponent_01.png" alt="" width="50%" />

## 프로젝트 생성 (example1)

New Project를 클릭!

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/12/exponent_02.png" alt="" width="50%" />

프로젝트 템플릿을 선택하고 프로젝트 이름과 경로를 설정해서 프로젝트를 생성한다.

나는 Blank template를 선택하고 example1 이름으로 프로젝트를 생성했다. 

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/12/exponent_03.png" alt="" width="50%" />

프로젝트를 생성하면서 관련 파일을 다운로드 받는다.

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/12/exponent_04.png" alt="" width="50%" />

프로젝트가 생성이 되었고 창이 좌우로 나뉘어져 있다.

왼쪽 창은 React Packager로, Up and Running과 Exponent Works에서 더 자세히 배울 수 있습니다.<br />
(The left pane is the React Packager, which you can learn more about in Up and Running and in How Exponent Works.) 

오른쪽 창은 장치 로그 용이며 로그보기에서 자세히 읽을 수 있습니다.<br />
(The right pane is for device logs, which you can read more about in Viewing Logs.)

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/12/exponent_05.png" alt="" width="50%" />

## Opening on a device

Open on iOS Simulator, Open on Android 로 시뮬레이터와 에뮬레이터를 열 수 있다. 

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/12/exponent_06.png" alt="" width="50%" /> 

Xcode와 Android Studio없이 시뮬레이터와 에뮬레이터가 동작하는 것을 확인했다.

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/12/exponent_07.png" alt="" width="50%" />

이 과정에서 나는 다음과 같은 오류를 접했다.

```
List of devices attached adb server is out of date.  killing... 
error: could not install *smartsocket* listener: 
Address already in use ADB server didn't ACK * failed to start daemon * error: cannot connect to daemon
```
이 오류로 많은 시간을 헤매고 있었다. 나는 Genymotion을 사용하는데, Genymotion를 사용하면, Genymotion > Settings > ADB에서 Use custom Android SDK tools를 연결하면 된다는 내용이 있었다.

검색을 하고 해당 오류에 대해서 알아봤는데, 다들 설정하고 path를 잘 맞추란 얘기였다.

``` 
cd ~
vi .bash_profile
``` 

이미 .bash_profile은 path 설정을 했었다. 

```
export PATH=${PATH}:/Users/wise7034/Library/Android/sdk/tools
export PATH=${PATH}:/Users/wise7034/Library/Android/sdk/platform-tools
export ANDROID_HOME=/Users/wise7034/Library/Android/sdk
export ANDROID_SDK=/Users/wise7034/Library/Android/sdk
export ANDROID_NDK=/Users/wise7034/Library/Android/sdk/ndk-bundle
```

그래도 오류가 계속 발생했다. 왜 그런지 감을 못잡아서 윗분에게 헬프를 ~!! 알고보니 android-sdk를 나는 brew로 설치를 했었다.

그래서 adb를 바라보는 경로가 달랐고 2개가 Genymotion에서 설정한 경로의 adb와 brew에서 설치한 경로에 있는 adb가 동시에 동작하면서 충돌이 나는 현상이었다.

결국 brew로 설치한 내용을 uninstall하고 실행하니 제대로 적용되는 것을 확인할 수 있었다.

```
brew uninstall android-sdk.....
```  

## 프로젝트 생성 (example2)

이번에는 다른 템플릿의 프로젝트를 테스트 해보자.

Tab Navigation template를 선택하고 example2 이름으로 프로젝트를 생성했다. 

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/12/exponent_08.png" alt="" width="50%" />

Open on iOS Simulator, Open on Android 로 시뮬레이터와 에뮬레이터를 확인했다.

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/12/exponent_09.png" alt="" width="50%" />

## Send Link

나는 안드로이드폰을 사용중이다. Exponent앱을 다운로드 받았다. 그리고 이 과정을 진행했다.

메일 주소를 입력하고 Send Link Click!!

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/12/exponent_10.png" alt="" width="50%" />

폰으로 이메일을 확인하니 Exponent link가 도착했다.

해당 링크를 폰에서 누르면 자동으로 앱이 실행되었다.

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/12/exponent_11.png" alt="" width="50%" />

샘플로 만든 앱이 폰에 보이는 것을 확인할 수 있었다. apk나 이런 파일을 만들지 않아도 바로 확인할 수 있었다.

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/12/exponent_12.png" alt="" width="50%" />

폰으로 바로바로 확인하고 싶을때 이 과정이 많은 시간을 단축해줄 것 같다.

Exponent 앱에는 기본적으로 설치되어 있는 내용이 있었고, 방금 내가 실행했던 앱은 Recent에서 확인할 수 있었다.

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/12/exponent_13.png" alt="" width="50%" />

## 내가 선택한 이유와 추가 사항 

간단히 시뮬레이터와 에뮬레이터에서 동작을 하는 부분만 테스트를 했다.

내가 Exponent를 테스트하고 싶었던 가장 큰 목적은 UI 관련 컴포넌트들을 사용하고 싶은 니즈가 커서였다.

[Using React Native UI toolkits with Exponent](https://blog.getexponent.com/using-react-native-ui-toolkits-with-exponent-3993434caf66#.d0fo5o6p8)를 보면 이 글 작성시 전 주까지는 [React Native Elements](https://github.com/react-native-community/react-native-elements)만 지원을 했다.

하지만 지금은 [NativeBase](http://nativebase.io/), [Shoutem UI](https://shoutem.github.io/ui/)도 지원을 한다.

NativeBase를 검토하다보니 [NativeBase-KitchenSink v0.5.13](https://github.com/GeekyAnts/NativeBase-KitchenSink)에 있는 UI들과 Shoutem UI의 UI, Animation을 참고해서 프로젝트에 적용해볼 만 하다는 생각을 했다.

나의 니즈는 UI 관련 컴포넌트여서 그런지 꼭 Exponent를 사용해야겠다는 생각이 들지는 않았고, 여러 UI 컴포넌트들이 어떻게 만들어 졌는지 파악해서 해당 부분을 잘 정리하면 React Native로 빠른시간에 여러 UI를 만들 수 있을 것 같다.

## 기타 (추천하고 싶은 분들)

안드로이드와 iOS를 빠르게 확인하고 폰으로도 빠른시간에 확인하고 싶은 니즈가 있는 개발자라면 해당 Exponent가 많은 도움이 될 것 같다.

그리고 여기서 테스트를 하지는 않았지만, 연락처, 카메라 및 소셜 로그인과 같은 시스템 기능에 대한 액세스도 제공하니 그런 부분을 사용할 개발자들에게도 많은 도움이 될 것 같다.