#movie app 2021

1. React의 작동 방식

: App.js 내부의 모든 elements를 HTML 내부에 집어넣는 방식

: 아무것도 추가하지 않은 기본적인 index.html 내부에
HTML 요소를 추가 및 제거하는 방식으로 작동한다

: React는 virtual DOM을 이용하여 HTML 요소를 생성, push 하므로 실제 HTML 파일 내엔 해당 소스코드가 보이지 않는다.
   => 페이지 접속시 기본적으로 빈 페이지를 로드하며 실재하지 않는 virtual DOM 이용하므로 로딩 속도가 빠르다.


1-1. 파일 관리법

   1) component 여러개의 파일로 나누어 저장하고 App.js 에서 import하여 코딩하는 방식

   2) App.js 내에서 func (자식 component)들을 생성하고, main func (부모 component) 내부에 자식 component들을 render하는 방식
      => 보통 class 방식의 코딩과 func 방식의 코딩으로 나뉜다.


2. 요소
: 각 func은 component라 한다.

: function 내에 javascript 형식은 {}로 나타낸다.
{}로 되어있지 않은 것은 text 형식


3. render 

ReactDOM.render (component func, HTML 요소)
=> component func에서 반환한 값을 virtual ReactDOM을 통해 
해당 HTML 요소 자리에 push 하는 형태로 작동
=> 이 작업을 rendering이라 한다.

★ : React는 자동적으로 class component들의 render 메소드를 실행한다.


4. 주의점

   1) component 내 태그가 여러개라면 return 내 태그들을 
      <div></div>와 같은 container로 감싸주어야 오류가 발생하지 않는다.
   

--- Event 적용하기

: React는 onClick(JS와 달리 camelCase 사용), addEventListener를 정의하지 않아도 바로 사용할 수 있다.

: React는 이벤트가 발생 시 표현식에 정의된 함수를 자동으로 호출하므로
따라서 함수 호출문을 이벤트에 적용하면, 
이벤트 발생 시가 아닌 component가 render될 때 함수를 호출하게 되고
해당 이벤트가 발생할 시점엔 해당 함수의 return값인 undefined만이 이벤트로 전달되므로
이벤트가 발생 시 아무런 일도 일어나지 않게된다.

      ex) <button onClick={ alert("Clicked!!") }> Click Me! </button>          
      
      => render()에 의해 component가 render되면서 alert가 실행되고 onClick에는 undefined를 넘겨주므로 실행이 안됨.
      (왜냐하면, alert의 반환값은 undefined이기 때문이다.)

      => 따라서 함수 호출문 대신, arrow function을 사용하거나 사용자정의 함수의 함수 이름만 쓴다.

      ex) <button onClick={ () => { alert("Clicked!!") } }> Click Me! </button>
      
      ex) onClickFunc = () => { alert("Clicked!!") };
            <button onClick={ this.onClickFunc }> Click Me! </button>
            


--- 부모/자식 component

: 부모 comp에서 자식 comp로 데이터를 옮겨줄 때, 자식의 arg로 들어가는 데이터를 property(prop)이라 한다.

: prop을 자식 component에 arg로 넘겨주는 방식은
HTML에서 요소에 대해 class, id를 지정하는 방식과 비슷하게 이루어진다

   ex) HTML    : <div class="string"></div>
   ex) React   : <ComponentName prop1="string1" prop2="string2">

: 전달되는 props는 하나의 객체 형태로 합쳐져서 전달된다



-- map 함수 사용시 err

오류 형태 : "Warning: Each child in a list should have a unique "key" prop."

원인     : React에선 array, list 등 내에 element의 숫자가 많을 경우, 각 element에 대한 고유 key값을 설정해주어야 한다.

햐결     : 각 element에 대해 id 등과 같은 고유 식별값을 추가해준다.
         : map 함수 내부도 바꿔주어야 한다.
               
               ex) { movies.map(movie => {
                        return <Movie title={movie.title} view={movie.view} />
                  }) }

                  { movies.map((movie, index) => {
                        return <Movie title={movie.title} view={movie.view} key={index} />
                  }) }



--- PropTypes

array, bool, func, number, object, string, symbol, any(모든 데이터 타입)

node, element, elementType, instanceOf()

oneOf, oneOfType
: 여러 특정 값들 중 하나인지도 확인이 가능함
      ex) PropTypes.oneOf(['News', 'Photos']);
      ex) PropTypes.oneOfType([
               PropTypes.string,
               PropTypes.number,
               PropTypes.instanceOf(Message);
      ]),

arrayOf, objectOf
: 특정 타입의 배열, 객체
      ex) PropTypes.arrayOf(PropTypes.number);
      ex) PropTypes.objectOf(PropTypes.number);


isRequired
: 위에 것들과 연결하여 prop이 제공되지 않았을 때 경고가 보이도록 함

      ex) PrintFruits.propTypes = {
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired
      };


--- Class component



--- State

: class component의 data를 담는 객체이다.
: 동적으로 변하는 data를 담는다.

: state의 상태를 변경 시, React에서 render func을 호출한다.
: state의 상태를 변경 시, 내부값을 직접 참조하지 않고 setState()를 사용한다.
      => 값 변경에 따른 view의 refresh, render func 호출을 React에게 알려주기 위해 setState()를 사용.
      => 따라서, setState() 사용 후엔 반드시 render()가 호출된다.

: state 자체는 객체이므로 setState() 사용시 parameter로 새로운 state를 받아야 한다.
      ex) setState( {count: 1} )

: setState 내에선 current 값으로 현재 state 객체를 받아올 수 있다.

      ex) setState( current => ({count: current.count + 1 }) )


--- Component Life Cycle

1. Mounting 
: component의 생성

      - constructor()         : 생성자
      - render()              : 
      - componentDidMount     : 해당 component가 처음 render된 후 호출됨

2. Updating
: state 변경과 같은 component의 업데이트들

      - render()
      - componentDidUpdate    : 해당 component가 update를 마치고나서 호출됨

3. Unmounting
: component의 종료 (ex. 페이지 나가기 등)

      - componentWillUnmount  : component가 종료될 때 호출됨