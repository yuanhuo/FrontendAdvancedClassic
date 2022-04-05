# Java Script

## 谈谈你对原型链的理解？

**原型对象**：绝⼤部分的函数(少数内置函数除外)都有⼀个 prototype 属性,这个属性指针指向原型对象，这个对象就是通过调用构造函数创建的对象(实例)的**原型**,⽽所有被创建的 对象都会共享原型对象,因此这些对象便可以访问原型对象的属性。

**原型链**：原因是每个对象都有 **proto** 属性，此属性指向该对象的构造函数的原型。对象可以通过 **proto** 与上游的构造函数（**constructor**）的原型对象（**prototype**）连接起来，⽽上游的原型对象也有⼀个 **proto** ，这样就形成 了原型链。

**判断构造函数与实例关系** instanceof操作符和isPrototypeOf()方法  
- instanceof操作符左侧是一个普通对象，右侧是一个函数。eg: o instanceof Foo，instanceof关键字做的事情是：判断o的原型链上是否有Foo.prototype指向的对象。
- isPrototypeOf()不关心构造函数，它只需要一个可以用来判断的对象就行。以Foo.prototype.isPrototypeOf(o)为例，isPrototypeOf()做的事情是：判断在a的原型链中是否出现过Foo.prototype

**new过程**：  
1、创建一个细新的javaScript对象（即 {} ）  
2、为步骤1新创建的对象添加属性proto ，将该属性链接至构造函数的原型对象  
3、将this指向这个新对象  
4、执行构造函数内部的代码（例如给新对象添加属性）  
5、如果构造函数返回非空对象，则返回该对象，否则返回刚创建的新对象。  

## 谈谈你对闭包的理解？

**MDN 的解释**：闭包是函数和声明该函数的词法环境的组合。
**个人理解**：闭包 =『函数』和『函数体内可访问的变量总和』

## 前端有⼏种储存的⽅式？

- cookies： 在 HTML5 标准前本地储存的主要⽅式，优点是兼容性好，请求头⾃带 cookie ⽅便，缺点是⼤⼩只有 4k， ⾃动请求头加⼊ cookie 浪费流量，每个 domain 限制 20 个 cookie，使⽤起来麻烦需要⾃⾏封装

- localStorage：HTML5 加⼊的以键值对(Key-Value)为标准的⽅式，优点是操作⽅便，永久性储存（除⾮⼿动删 除），⼤⼩为 5M，兼容 IE8+

- sessionStorage：与 localStorage 基本类似，区别是 sessionStorage 当⻚⾯关闭后会被清理，⽽且与 cookie、 localStorage 不同，他不能在所有同源窗⼝中共享，是会话级别的储存⽅式

- Web SQL：2010 年被 W3C 废弃的本地数据库数据存储⽅案，但是主流浏览器（⽕狐除外）都已经有了相关的实 现，web sql 类似于 SQLite，是真正意义上的关系型数据库，⽤ sql 进⾏操作，当我们⽤ JavaScript 时要进⾏转换， 较为繁琐。

- IndexedDB： 是被正式纳⼊ HTML5 标准的数据库储存⽅案，它是 NoSQL 数据库，⽤键值对进⾏储存，可以进⾏快 速读取操作，⾮常适合 web 场景，同时⽤ JavaScript 进⾏操作会⾮常⽅便。

## 类型转换的规则有哪些？

**原理**：类型转换指的是将⼀种类型转换为另⼀种类型，例如:

```js
var b = 2;
var a = String(b);
console.log(typeof a); //string
```

类型转换分为显式和隐式,但是不管是隐式转换还是显式转换,都会遵循⼀定的原理,遵循 ECMA-262 中提到的转换规则。  
这是 JavaScript 种类型转换可以从原始类型转为引⽤类型,同样可以将引⽤类型转为原始类型,转为原始类型的抽象操作 为 ToPrimitive ,⽽后续更加细分的操作为: ToNumber ToString ToBoolean 。  
TODO：
![An image](/1.jpeg)

## 讲讲 JavaScript 垃圾回收(内存管理)是怎么做的？

todo:
1