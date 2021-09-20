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

            <ul>
                <h1 className='date'>02.09.2021</h1>
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


            <h1>Область видимости</h1>
            <ul>
                <h1 className='date'>03.09.2021</h1>
                <li>
                    (let a = 100; <br/>
                    const b = 200;) <br/>

                    console.log(a, b); // попытка вывести значения переменных в консоль выдаст ошибку "ReferenceError"</li>
            </ul>

            <h1>Примитивные типы данных. Js - динамически типизированный язык (типы не обозначаются)</h1>
            <ul>
                <li>++a, a++ - инкремент</li>
                <li>--a, a-- - декремент</li>
                <li>NaN - not a number (мат. ошибка вычислений)</li>
                <li>a.leght - проверка по длине строки</li>
                <li>let str ='I like JavaScript';
                    console.log(str[0]); //выведет  "I";
                    console.log(str[7]); //выведет  "J";
                    console.log(str[str.length - 1]); //выведет  последний символ строки, т.е. "t";
                </li>
                <li>
                    const str = 'sasha';
                    const lastSymbol = str[str.length- 1];
                    Последний символ строк
                </li>
                <li>
                    Конкатенация - сложение строк
                </li>
                <li>
                    \n - перевод строки
                    \", \' - кавычки
                    \t - знак табуляции
                    \\ - обратный слеш
                </li>
                <li>
                    const firstWord = 'Happy';
                    const secondWord = 'New';
                    const thirdWord = 'Year';
                    const greeting = firstWord + ' ' + secondWord + ' ' + thirdWord + '!';
                </li>
                <li>
                    let str ='Hello world';
                    let str2 = "World";
                    let str3 = `Sum  ${1+2}`;
                </li>
                <li>
                    let price = 30;
                    let count = 15;
                    console.log(`Price of ${count} toys is ${price * count} dollars`); // выведет "Price of 15 toys is 450 dollars"
                </li>
                <li>
                    let str ='I like JavaScript';
                    console.log(str[0]); //выведет  "I";
                    console.log(str[7]); //выведет  "J";
                    console.log(str[str.length - 1]); //выведет  последний символ строки, т.е. "t";
                </li>



        </div>
    );
}

export default App;
