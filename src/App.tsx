import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
        </header>

        <h1>
          Js Syntax pt.1
        </h1>
        <h4>

          <ul>
            <li>let 'имя переменной' = значение;</li>
            <p>объявление переменной</p>
            <li>const 'имя переменной' = значение;</li>
            <p>Разница между const и let в <span>области видимости= <span className="green">let</span> - только в своей функции</span>
            </p>

            <li>let a = 1; // переменной a присвоено значение 1</li>
            <li>let b = 3.25; // переменной b присвоено значение 3.25</li>
            <li>const user = 'Alice'; // переменной user присвоено значение 'Alice'</li>
            <li>const isAdult = true; // переменной isAdult присвоено значение true</li>
            <li>let line = ''; // переменной line присвоено значение пустой строки</li>
            <li>let numberOfCertificates = null; // переменной numberOfCertificates присвоено значение null</li>
            <p><span> null - НИЧЕГО(нет значения). '' - пустая строка(нулевой длины, тип string) </span></p>
            <li>let temperature = -25; // переменной temperature присвоено значение отрицательного числа -25
            </li>

            <h4>let telNumber</h4> <p>Можно задать переменную без присваивания ей значений</p>

            <h4>Вывод в консоль - console.log(); </h4>
            <li>let count = 34; // переменной count присвоено значение 34
              console.log(count); // в консоль будет выведено 34
            </li>
            <li>let a = 1; // переменной a присвоено значение 1
              console.log(a); // в консоль будет выведено 1
            </li>
            <li>let b = a + 3.25; // переменной b присвоено значение a + 3.25
              console.log(b); // в консоль будет выведено 4.25
            </li>
            <li>let user = 'Alice'; // переменной user присвоено значение 'Alice'
              console.log(user); // в консоль будет выведено "Alice"
            </li>
            <li>
              let user = 'Alice'
              let b = 2
              console.log(user + ' ' + b); // в консоль будет выведено "Alice 2"
            </li>

            <h4>Переменную let можно переопределить и не обязательно ее <span>переопределять</span></h4>

            <li>let num = 5; // переменной num присвоено значение 5
              console.log(num); // в консоль будет выведено 5
              num = num + 4; // значение переменной num увеличено на 4
              console.log(num); // в консоль будет выведено 9
            </li>

          </ul>

        </h4>
      </div>
  );
}

export default App;
