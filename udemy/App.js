import React from 'react'

const Header = () => {
  return (
    <div>
      <h2>Hello World</h2>
    </div>
  )
}

const Wild = () => {
  return (
    <input type="text" placeholder='Some enter text' />
  )
}

// function Btn() {
//   const res = () => {
//     return 'Log in'
//   }
//   return <button>{res()}</button>
// }
function Btn() {
  const text = 'Log in'
  const logged = true
  return <button>{logged ? 'Enter' : text}</button>
  //  если переменная logged true то возвращай текст 'Enter' в противном случае просто переменную text
  function check() {
    if (logged) {
      return 'Enter'
    } else {
      return text
    }
  }
  return <button>{check()}</button>
}

//  а если ты хочешь исользовывать if то просто создай новую функцию которая будет проврять код





function App() {
  return (
    <div className="App">
      <Header />
      <Wild />
      <Btn />
    </div>
  );
}

export default App;
