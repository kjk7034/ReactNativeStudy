# React Component Specs and Lifecycle

## Component Specifications

React.createClass()를 호출하여 컴포넌트 클래스를 생성할 때, 렌더링하고 선택적으로 Lifecycle Methods를 포함 할 수 있다.

### render
유일한 필수항목. props, state를 토대로 하나의 자식 엘리먼트를 return 한다.
아무것도 렌더링 되지 않도록 하려먼 null or false 를 return 한다.
컴포넌트 state를 변경(ex: setState 사용)하지 않아야 하며, Dom을 읽고 쓰거나 브라우저와 상호작용(ex: setTimeout 사용)을 하지 않아야 한다.

### getInitialState
컴포넌트가 마운트되기 전에 한번 호출되며, 리턴값은 this.state의 초기값으로 사용된다.

### getDefaultProps
클래스가 생성될 때 한번 호출되고 캐시되며, 부모 컴포넌트에서 prop이 넘어오지 않은 경우 매핑의 값이 this.props에 설정된다.
이 메소드는 인스턴스가 만들어지기 전에 호출되므로 this.props에 의존할 수 없고, getDefaultProps()의 리턴값에 포함된 복잡한 객체는 복사되지 않고 인스턴스 간에 공유된다.

### propTypes
propTypes 객체는 컴포넌트에 넘어오는 props가 올바른지 검사할 수 있게 해줍니다. (Reusable Components – 재사용 컴포넌트참고)

### mixins
mixins 배열은 여러 컴포넌트 사이에 동작을 공유하는 믹스인을 사용할 수 있게 해줍니다. (Reusable Components – 재사용 컴포넌트참고)
안타깝지만 React에서 ES6 클래스를 사용한다면 믹스인을 사용할 방법이 없다. 요즘 만들어지는 예제들이 대부분 ES6 클래스를 사용하니 mixins을 활용하는 경우가 없는 것 같다.

### statics
statics 객체는 컴포넌트 클래스의 정적 메서드들(static methods)을 정의할 수 있다.

### displayName
displayName 문자열은 디버그 메시지에 사용된다. 클래스에 displayName이 정의되어 있지 않으면 JSX는 변수명을 displayName으로 간주한다. (JSX in Depth참고)

### 기타 추가내용
ES6 Classes를 사용하면서 getInitialState대신에 constructor에서 state 초기값을 설정하고, propTypes와 defaultProps가 클래스의 내부가 아니라 생성자의 프로퍼티로 정의되어 있는 차이점이 있다. (ES6 Classes 참고)


## 예제를 이용한 – Component Lifecycle Methods
Lifecycle Methods에는 Mounting, Updating, Unmounting 세 가지 주요 부분이 있다.

### Mounting
#### componentWillMount
최초 렌더링이 일어나기 직전에 클라이언트 및 서버에서 한번 호출된다.
만약, 이 메소드 안에서 setState를 호출하면, render()에서 업데이트된 state를 확인할 수 있고 state가 변함에도 불구하고 render()가 한번만 실행된다. render가 되기 이전이므로 Dom이 생성되기 전이다.

#### componentDidMount
최초 렌더링이 일어난 다음 클라이언트에서만 한번 호출된다. (서버에서는 호출되지 않음.)
이 시점에 자식의 refs들에 접근 할 수 있다. (기본 DOM 표현에 접근하는 등). 자식 컴포넌트의 componentDidMount() 메소드는 부모 컴포넌트보다 먼저 호출된다.
다른 JavaScript 프레임워크를 연동하거나, setTimeout/setInterval로 타이머를 설정하고 AJAX 요청을 보내는 등의 작업을 이 메소드에서 합니다.

#### Mounting 예제
```
/* Mounting 폴더 - index.js */
import React, { Component } from 'react';
import Component1 from './Component1';
import Component2 from './Component2';

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tabState : 0
        }
        console.log("App.js - constructor")
    }
    componentWillMount () {
        console.log("App.js - componentWillMount")
    }
    componentDidMount () {
        console.log("App.js - componentDidMount")
    }
    render() {
        console.log("App.js - render");
        return (
            <article className="component-box">
                <h1>Lifecycle 예제 - App.js</h1>
                <Component1 />
                <Component2 />
            </article>
        );
    }
}


/* Component1.js */
import React, { Component } from 'react';

export default class extends Component {
    constructor(props) {
        super(props)
        console.log("Component1.js - constructor")
    }
    componentWillMount () {
        console.log("Component1.js - componentWillMount")
    }
    componentDidMount () {
        console.log("Component1.js - componentDidMount")
    }
    render() {
        console.log("Component1.js - render");
        return (
            <section className="component-box">
                <h1>Component1.js</h1>
                <p>내용</p>
                <p>내용</p>
                <p>내용</p>
            </section>
        );
    }
}

/* Component2.js */
import React, { Component } from 'react';

export default class extends Component {
    constructor(props) {
        super(props)
        console.log("Component2.js - constructor")
    }
    componentWillMount () {
        console.log("Component2.js - componentWillMount")
    }
    componentDidMount () {
        console.log("Component2.js - componentDidMount")
    }
    render() {
        console.log("Component2.js - render");
        return (
            <section className="component-box">
                <h1>Component2.js</h1>
            </section>
        );
    }
}
```

![결과화면](http://wagunblog.com/wp/wp-content/uploads/2016/09/react-lifecycle-1.png)

다음과 같은 순서로 각 컴포넌트들이 렌더링 되는 과정을 확인할 수 있다.

1. App.js – constructor
2. App.js – componentWillMount
3. App.js – render
4. App.Component1- constructor
5. Component1.js – componentWillMount
6. Component1.js – render
7. Component2.js – constructor
8. Component2.js – componentWillMount
9. Component2.js – render
10. Component1.js – componentDidMount
11. Component2.js – componentDidMount
12. App.js – componentDidMount

### Updating
기본적인 method에 대한 설명 후, 예제는 Updating 과정을 설명이 편하도록 부모의 state가 변경되어 전달받은 props가 변경되는 경우와, 해당 컴포넌트의 state가 변경되는 경우 두가지로 분리를 했다. 먼저

#### componentWillReceiveProps
컴포넌트가 새로운 props를 받을 때 호출 된다. 이 메소드는 최초 렌더링 시에는 호출되지 않는다.
render가 호출되기 전에 prop의 변화를 감지하여 this.setState()를 호출해서 state를 업데이트 할 수 있다. 그리고 이전 props는 this.props로 접근이 가능함.
이곳에서 this.setState를 호출해도 추가 렌더링이 발생하지 않음. 관련 코드 :

```
componentWillReceiveProps: function(nextProps) {
  this.setState({
    likesIncreasing: nextProps.likeCount > this.props.likeCount
  });
}
```

#### shouldComponentUpdate
새로운 props 또는 state를 받아 렌더링을 하기 전에 호출된다. 최초 렌더링시나 forceUpdate를 사용하는 경우에는 호출되지 않는다.
업데이트를 필요하지 않으면 false를 return하고, flase를 return하면 다음에 state가 바뀌기 전까지 render가 완전히 호출되지 않고 넘어간다.
기본적으로는 true를 return한다.
상위 컴포넌트가 re-render하는 경우, 하위 컴포넌트들은 모두 render를 하게 되므로 성능의 병목이 있다면 return false를 이용하여 render를 하지 않게 사용한다.관련 코드 :

```
shouldComponentUpdate: function(nextProps, nextState) {
  return nextProps.id !== this.props.id;
}
```

#### componentWillUpdate
새로운 props나 state를 받았을 때 렌더링 전에 호출된다. 최초렌더링 시에는 호출되지 않는다.
이 메소드는 this.setState를 호출할 수 없다.(무한루프)

#### componentDidUpdate
컴포넌트의 업데이트가 DOM에 반영된 직후에 호출된다. 최초렌더링 시에는 호출되지 않으며, 업데이트된 뒤 DOM을 조작할 때 사용.
이 메소드는 this.setState를 호출할 수 없다.(무한루프)

#### Updating – prop 예제
```
/* App.js */
import React, { Component } from 'react';
import Component1 from './Component1';

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tabState : 0
        }
    }
    tabChange (idx) {
        if(this.state.tabState === idx) {
            return false
        }
        this.setState({
            tabState : idx
        })
    }
    render() {
        console.log("App.js - render");
        return (
            <article className="component-box">
                <h1>Updating prop 예제 - App.js</h1>
                <ul className="tabList">
                    <li><button type="button" onClick={()=>this.tabChange(0)}>전체</button></li>
                    <li><button type="button" onClick={()=>this.tabChange(1)}>Component1</button></li>
                </ul>
                <Component1 tabState={this.state.tabState} />
            </article>
        );
    }
}

/* Component1.js */
import React, { Component } from 'react';

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentWillReceiveProps  (nextProps) {
        console.log("Component1.js - componentWillReceiveProps", nextProps)
    }
    shouldComponentUpdate (nextProps, nextState) {
        console.log("Component1.js - shouldComponentUpdate", nextProps, nextState)
        return true
    }
    componentWillUpdate () {
        console.log("Component1.js - componentWillUpdate");
    }
    componentDidUpdate () {
        console.log("Component1.js - componentDidUpdate");
    }
    render() {
        console.log("Component1.js - render");
        return (
            <section className="component-box">
                <h1>Component1.js</h1>
                <p>내용</p>
                <p>내용</p>
                <p>내용</p>
            </section>
        );
    }
}
```

![결과화면](http://wagunblog.com/wp/wp-content/uploads/2016/09/react-lifecycle-2.png)

1. App.js – render (state값 변경 => 하위 컴포넌트에 props 전달)
2. Component1.js – componentWillReceiveProps Object {tabState: 1}
3. Component1.js – shouldComponentUpdate Object {tabState: 1} Object {}
4. Component1.js – componentWillUpdate
5. Component1.js – render
6. Component1.js – componentDidUpdate

여기서 shouldComponentUpdate의 return 값을 false로 변경해보자. 그러면 다음과 같이 shouldComponentUpdate에서 멈추고 render가 되지 않기 때문에 componentWillUpdate, componentDidUpdate도 실행되지 않는다.
![false 결과화면](http://wagunblog.com/wp/wp-content/uploads/2016/09/react-lifecycle-3.png)

#### Updating- state 변경 예제

```
/* App.js */
import React, { Component } from 'react';

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            test : 0
        }
    }
    stateChange (idx) {
        this.setState({
            test : this.state.test + 1
        })
    }
    shouldComponentUpdate (nextProps, nextState) {
        console.log("App.js - shouldComponentUpdate", nextProps, nextState)
        return true
    }
    componentWillUpdate () {
        console.log("App.js - componentWillUpdate");
    }
    componentDidUpdate () {
        console.log("App.js - componentDidUpdate");
    }
    render() {
        console.log("App.js - render", this.state.test);
        return (
            <article className="component-box">
                <h1>Updating state 예제 - App.js</h1>
                <button type="button" onClick={()=>this.stateChange(0)}>state 변경</button>
            </article>
        );
    }
}
```

![결과화면](http://wagunblog.com/wp/wp-content/uploads/2016/09/react-lifecycle-4.png)

1. App.js – render 0
2. App.js – shouldComponentUpdate Object {} Object {test: 1}
3. App.js – componentWillUpdate
4. App.js – render 1
5. App.js – componentDidUpdate

props, state 변화에 따른 렌더링 과정 및 각 메소드의 사용법을 알아봤다.

### Unmounting
#### componentWillUnmount

컴포넌트가 DOM에서 마운트 해제되기 전에 호출된다. 이 메소드에서 타이머를 무효화하거나, Ajax를 이용한 경우 abort를 사용하는 등 필요한 정리 작업을 수행할 수 있다.

#### componentWillUnmount – 예제
```
/* App.js */
import React, { Component } from 'react';
import Component1 from './Component1';

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Component1 : true
        }
    }
    toggle () {
        this.setState({
            Component1 : !this.state.Component1
        })
    }
    render() {
        return (
            <article className="component-box">
                <h1>Unmounting 예제 - App.js</h1>
                <button type="button" onClick={()=>this.toggle(0)}>Component1 - On/Off</button>
                {
                    this.state.Component1 ? <Component1 {...this.props} /> : null
                }
            </article>
        );
    }
}

/* Component1.js */
import React, { Component } from 'react';

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentWillUnmount  () {
        console.log("Component1.js - componentWillUnmount")
    }
    componentWillReceiveProps  (nextProps) {
        console.log("Component1.js - componentWillReceiveProps", nextProps)
    }
    shouldComponentUpdate (nextProps, nextState) {
        console.log("Component1.js - shouldComponentUpdate", nextProps, nextState)
        return false
    }
    componentWillUpdate () {
        console.log("Component1.js - componentWillUpdate");
    }
    componentDidUpdate () {
        console.log("Component1.js - componentDidUpdate");
    }
    render() {
        console.log("Component1.js - render")
        return (
            <section className="component-box">
                <h1>Component1.js</h1>
                <p>내용</p>
                <p>내용</p>
                <p>내용</p>
            </section>
        );
    }
}
```

![결과화면](http://wagunblog.com/wp/wp-content/uploads/2016/09/react-lifecycle-5.png)

상위 컴포넌트의 state값에 따라서 하위 컴포넌트의 mount/unmount를 반복할 때 Update가 되는 과정이 아니라는 것을 확인 할 수 있다.
