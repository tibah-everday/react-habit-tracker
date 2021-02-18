import React from 'react';
import ReactDOM from 'react-dom';
// 브라우저가 이해할 수 있는 것은 HTML, CSS, JS 뿐인데 아래 코드와 같이 그 이외의 것들을 순수 JS로 바꿔서 이해할 수 있게 해주는 게 바로 바벨! 그리고 그렇게 변환된 아이들(컴포넌트)들을 HTML과 연결하는 작업을 해줘야 하는데 그것을 해주는 게 바로 react-dom.
import './index.css';
import App from './app';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // usestrict와 같음. 개발할 땐 스트릭모드 이용하고 배포할 땐 알아서 비활성화 됨. 
  ,
  document.getElementById('root')
  // react-dom을 이용해서 가지고온 root div에  <App/>이라는 컴포넌트를 연결한 것!
);

// state는 해당 컴포넌트 내부 데이터, props는 부모로부터 전달 받은 property라고 생각하면 편함 

