# React Native 스타일 관련

React Native로 UI를 만드는 과정에서 스타일 관련된 기본 내용들을 알아 보기로 하자.

React Naive > DOCS > THE BASICS의 내용에서 다음의 세가지를 한번 알아보기로 했다.

* [Style](http://facebook.github.io/react-native/releases/0.35/docs/style.html),
* [Height and Width](http://facebook.github.io/react-native/releases/0.35/docs/height-and-width.html),
* [Layout with Flexbox](http://facebook.github.io/react-native/releases/0.35/docs/flexbox.html)

## 샘플 메인

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/10/reactNativeStyling-1.png" alt="" width="40%" />

## Style

**StyleSheet API**를 활용한다.

관련 사용방법은 샘플코드를 확인해보자.

### 외부 파일을 불러서 사용하는 import 방식

**(Style 예제 - import : StyleEx1.js)**

```
import {styles} from './StyleEx1.style.js';
```

### style을 사용하여 직접 inline으로 작업하는 방식

**(Style 예제 - inline : StyleEx2.js)**

```
<ScrollView style={{flex:1, backgroundColor : "pink", padding:10}}>
```

### 변수로 빼서 사용하는 방식

**(Style 예제 - 변수활용, 스타일 상속 : StyleEx3.js)**

```
...
<ScrollView style={[styles.ScrollView, styles.Test]}>
...

const styles = StyleSheet.create({
    ScrollView : {
        flex:1,
        backgroundColor : "pink",
        padding:10
    },
    Test : {
        backgroundColor : "yellow",
    }
})
```

위의 방식으로 샘플을 만들었으며, StyleEx3.js에서는 array of styles에 대한 내용도 포함되어 있다.

## Height and Width

width, height는 일반적으로 자신이 선택한 영역을 가진다.

해당 시뮬레이터는 아이폰6S로 deviceWidth가 375인 디바이스이다.

박스 50, 50에서 height가 컨텐츠에 의해서 영역을 넘어가는 것을 확인 할 수 있으며 이에 overflow: "hidden"으로 해당 height를 넘어가는 부분을 제어할 수 있다.

박스 500, 500에서 deviceWidth를 넘어가는 영역은 잘리는 것을 확인 할 수 있다.

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/10/reactNativeStyling-2.png" alt="" width="40%" />
<img src="http://wagunblog.com/wp/wp-content/uploads/2016/10/reactNativeStyling-3.png" alt="" width="40%" />

## Layout with Flexbox

### flex 영역 확인

컨텐츠 영역을 감싼 View에 flex:1을 이용하여 전체 영역을 지정하고,
그 자식 요소들에게 0.3, 0.7을 각각 지정하여 3:7의 영역을 지정했다.

해당 영역을 3:7이 아닌 반씩 나누기 위해 0.5, 0.5로 할 수도 있지만, 그것이 아닌 1:1로 해도 된다.

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/10/reactNativeStyling-4.png" alt="" width="40%" />

### flexDirection 방향 확인

flexDirection : "row", "column" 으로 기본 방향을 설정하여 자식 요소들의 방향을 결정한다.

이 부분은 두개를 섞어서 같이 사용할 수도 있다.

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/10/reactNativeStyling-5.png" alt="" width="40%" />

### justifyContent 컨텐츠

기본 축(primary axis)에 따라 자식들의 분포(distribution)를 결정(determines)한다.

flex-start, center, flex-end, space-around, and space-between.을 이용할 수 있다.

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/10/reactNativeStyling-6.png" alt="" width="40%" />
<img src="http://wagunblog.com/wp/wp-content/uploads/2016/10/reactNativeStyling-7.png" alt="" width="40%" />
<img src="http://wagunblog.com/wp/wp-content/uploads/2016/10/reactNativeStyling-8.png" alt="" width="40%" />
<img src="http://wagunblog.com/wp/wp-content/uploads/2016/10/reactNativeStyling-9.png" alt="" width="40%" />
<img src="http://wagunblog.com/wp/wp-content/uploads/2016/10/reactNativeStyling-10.png" alt="" width="40%" />

### alignItems

flex-start, center, flex-end, and stretch.을 이용할 수 있다.

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/10/reactNativeStyling-11.png" alt="" width="40%" />
<img src="http://wagunblog.com/wp/wp-content/uploads/2016/10/reactNativeStyling-12.png" alt="" width="40%" />
<img src="http://wagunblog.com/wp/wp-content/uploads/2016/10/reactNativeStyling-13.png" alt="" width="40%" />
<img src="http://wagunblog.com/wp/wp-content/uploads/2016/10/reactNativeStyling-14.png" alt="" width="40%" />
<img src="http://wagunblog.com/wp/wp-content/uploads/2016/10/reactNativeStyling-15.png" alt="" width="40%" />

## 적용가능한 스타일 확인하는

예를들어 View 컴포넌트에 적용이 가능한 스타일은 뭘까??

이럴때는 [View Component - style](http://facebook.github.io/react-native/docs/view.html#style)에서 확인할 수 있다.

그리고 backgroundColor를 backgroundcolor와 같이 잘못 사용했다면, 다음과 같이 오류가 발생한다.

<img src="http://wagunblog.com/wp/wp-content/uploads/2016/12/reactNativeStyling-15.png" alt="" width="40%" />

이 오류에서 좋은점은 어떤 속성을 사용할 수 있는지 나오니까 이 부분을 참고해도 된다.

## 프로젝트 경험담 공유

디자이너와의 커뮤니케이션 : 750 PSD로 작업 결정.<br />
과정에서 다양한 얘기가 나왔지만, bootstrap3에서 responsive grid 750을 참고하여 30px기준으로 25개의 그리드를 나눠서 작업하기로 협의.<br />
나는 개발할 떄 1개의 그리드당 4%로 생각하고 작업을 했다.

750기준으로 30px*30px의 영역을 작업한다면 Dimensions API를 이용하여 다음과 같이 사용할 수도 있다.

```
const deviceWidth = Dimensions.get('window').width;

const viewWidth = deviceWidth/25 * 1 // 30px 기준의 25개의 그리드.
const viewHeight = deviceWidth/25 * 1
```
추가적으로 0.24버전에서 작업시 border를 얇게 1px을 주고 싶은 경우 이슈가 있어서 공유했다. [borderWidth Issue](http://wagunblog.com/wp/?p=1976)
지금은 hairlineWidth를 이용할 수 있지만, 이 역시도 시뮬레이터가 축소되면가는 선의 선이 보이지 않을 수 있습니다. (A line with hairline width may not be visible if your simulator is downscaled.)