## 1、算法

### 排序算法及相关复杂度

冒泡排序 选择排序 插入排序

归并排序 快速排序 希尔排序 堆排序

比较类排序：冒泡排序，选择排序，插入排序            归并排序，快速排序，希尔排序，堆排序

​				时间复杂度不能突破O(nlogn)，因此也叫非线性时间比较类算法。

非比较类排序：计数排序，桶排序，基数排序

​				时间复杂度可以突破O(nlogn)，因此也叫线性时间非比较类算法。

![img](https://images2018.cnblogs.com/blog/849589/201804/849589-20180402133438219-1946132192.png)

```javascript
// 十大经典排序算法总结地址
https://www.cnblogs.com/onepixel/p/7674659.html
```



## 2、HTML

### html语义化

## 3、CSS

### 行内元素与块级元素

行内元素设置width height 上下margin 与 padding 无效

行内元素不能包含块级元素

### flex布局

弹性布局 主轴 交叉轴

flex 0 1 auto

1. flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
2. flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
3. flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。

### box-sizing盒模型

content-box： 标准盒子模型，是默认值。它的width组成仅仅只有content区域（不包括padding区域和border区域）

border-box：IE盒子模型,它的width组成由content区域、padding区域、border区域

### rem与vw，vh

rem：相对于浏览器根元素的font-size ，浏览器默认16px，方便运算设置为62.5%。

vw、vh：相对于视窗

### 垂直居中

 flex  	position + transform    display：inline-block + vertical-align:middle

父元素display:table，子元素display：table-cell        line-height

margin：auto（水平） flex

### less和scss

Less环境较Sass简单  Less使用较Sass简单   sass安装Ruby环境

​			1、sass有变量和作用域

　　　2、sass有函数的概念

　　　3、进程控制

　　　　　条件、循环遍历、继承、引用

　　　4、数据结构

　　　　　数组、map



less是通过客户端处理的，scss是通过服务端处理，相比较之下前者解析会比后者慢一点。

变量Less用@，Sass用$

### grid布局

### 清除浮动

### 伪类伪元素

伪类和伪元素的根本区别在于：**它们是否创造了新的元素。**

伪类只能使用“：”
而伪元素既可以使用“:”，也可以使用“::”
因为伪类是类似于添加类所以可以是多个，而伪元素在一个选择器中只能出现一次，并且只能出现在末尾

### css BFC

块级格式化上下文，隔离的独立容器，内部元素垂直排列。

消除margin合并，overflow:hidden清除浮动，根据BFC的不与float box重叠的规则，解决了侵占元素问题。

清除元素内部浮动

解决外边距合并问题

布局规则：

1. 内部的Box会在垂直方向一个接着一个地放置。
2. Box垂直方向上的距离由margin决定。属于同一个BFC的两个相邻的Box的margin会发生重叠。
3. 每个盒子的左外边框紧挨着包含块的左边框，即使浮动元素也是如此。
4. BFC的区域不会与float box重叠。
5. BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然。
6. 计算BFC的高度时，浮动子元素也参与计算。

触发方式

- 根元素，即HTML标签
- 浮动元素：float值为left、right
- overflow值不为 visible，为 auto、scroll、hidden
- display值为 inline-block、table-cell、table-caption、table、inline-table、flex、inline-flex、grid、inline-grid
- 定位元素：position值为 absolute、fixed

解决问题：

- ​	解决浮动元素令父元素高度坍塌的问题。方法：给父元素开启BFC。原理：计算BFC的高度时，浮动子元素也参与计算。
- ​	非浮动元素被浮动元素覆盖。方法：给非浮动元素开启BFC。原理：BFC的区域不会与float box重叠。
- ​	两栏自适应布局。方法：给固定栏设置固定宽度，给不固定栏开启BFC。原理：BFC的区域不会与float box重叠。
- ​	外边距垂直方向重合的问题。方法：给上box或者下box任意一个包裹新的box并开启BFC。原理：属于同一个BFC的两个相邻的Box的margin会发生重叠。

## 4、JavaScript

### new做了什么

(1) 在内存中创建一个新对象。

(2) 这个新对象内部的[[Prototype]]特性被赋值为构造函数的 prototype 属性。

(3) 构造函数内部的 this 被赋值为这个新对象（即 this 指向新对象）。

(4) 执行构造函数内部的代码（给新对象添加属性）。

(5) 如果构造函数返回非空对象，则返回该对象；否则，返回刚创建的新对象。

```javascript
var obj  = {};
obj.__proto__ = Base.prototype;
Base.call(obj);
```

(1) 创建一个新对象；
(2) 将构造函数的作用域赋给新对象（因此 this 就指向了这个新对象） ；
(3) 执行构造函数中的代码（为这个新对象添加属性） ；
(4) 返回新对象。

### proxy与Reflect

```javascript
let p = new Proxy(target, handler);
```

target ：需要使用Proxy包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。
handler: 一个对象，其属性是当执行一个操作时定义代理的行为的函数(可以理解为某种触发器)。具体的handler相关函数请查阅官网

 get   set     apply    has

Reflect 不能new 都是静态方法和属性

- ​	Reflect可以将Object对象的一些明显属于语言内部的方法（比如Object.defineProperty），放到Reflect对象上。
- ​	修改某些Object方法的返回结果，让其变得更合理。
- ​	让Object操作都变成函数行为。某些Object操作是命令式，比如name in obj和delete obj[name]，而Reflect.has(obj, name)和Reflect.deleteProperty(obj, name)让它们变成了函数行为。
- ​	Reflect对象的方法与Proxy对象的方法一一对应，只要是Proxy对象的方法，就能在Reflect对象上找到对应的方法。这就让Proxy对象可以方便地调用对应的Reflect方法，完成默认行为，作为修改行为的基础。也就是说，不管Proxy怎么修改默认行为，你总可以在Reflect上获取默认行为。

### link和@import

@import：

是 CSS 提供的语法规则，只有导入样式表的作用；

在页面加载完毕后被加载，

兼容性 CSS2.1

link：

HTML提供的标签，不仅可以加载 CSS 文件，还可以定义 RSS、rel 连接属性等。

同时加载

可以通过 JS 操作 DOM ，插入`link`标签来改变样式；由于 DOM 方法是基于文档的，无法使用`@import`的方式插入样式。

css权重优先级：!important > 行内样式 > ID > 类、伪类、属性 > 标签名 > 继承 > 通配符

### 事件循环

### 类数组转为数组

Array.from(arrayLike)      [...arrayLike]      Array.prototype.slice.call(arrayLike)    Array.apply(null, arrayLike)

### 遍历对象

Object.keys   Object.values    for … in ...（遍历自身和继承的属性 hasOwnProperty过滤） Object.getOwnPropertyNames(obj)

### Map、Set、WeakMap、WeakSet以及遍历

Map 的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键。这就解决了同名属性碰撞（clash）的问题，

如果 Map 的键是一个简单类型的值（数字、字符串、布尔值），则只要两个值严格相等，Map 将其视为一个键，比如`0`和`-0`就是一个键，布尔值`true`和字符串`true`则是两个不同的键。另外，`undefined`和`null`也是两个不同的键。虽然`NaN`不严格相等于自身，但 Map 将其视为同一个键。

`WeakMap`只接受对象作为键名（`null`除外），不接受其他类型的值作为键名。使用：私有变量；保存dom节点元数据，dom被删除则释放内存。

WeakSet、weakMap 不可遍历，WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，WeakSet 的成员只能是对象，而不能是其他类型的值。WeakSet使用，给对象打标签。

对于可迭代对象：

Array.forEach()   :  不可break

for in    : 遍历key

for of   : 遍历value

### 作用域和作用域链

全局作用域和函数作用域，当前作用于没查到就向上查找

### 闭包

全局变量和局部变量，链式作用域，闭包的本质就是在一个函数内部创建另一个函数。隐藏变量

函数内部可以直接读取全局变量，而在函数外部自然无法读取函数内的局部变量。

**「函数」和「函数内部能访问到的变量」（也叫环境）的总和，就是一个闭包。**

闭包特性：

①函数嵌套函数

②函数内部可以引用函数外部的参数和变量

③参数和变量不会被垃圾回收机制回收

好处：

①保护函数内的变量安全 ，实现封装，防止变量流入其他环境发生命名冲突

②在内存中维持一个变量，可以做缓存（但使用多了同时也是一项缺点，消耗内存）

③匿名自执行函数可以减少内存消耗

坏处：

①其中一点上面已经有体现了，就是被引用的私有变量不能被销毁，增大了内存消耗，造成内存泄漏，解决方法是可以在使用完变量后手动为它赋值为null；

②其次由于闭包涉及跨域访问，所以会导致性能损失，我们可以通过把跨作用域变量存储在局部变量中，然后直接访问局部变量，来减轻对执行速度的影响

### 跨域

JSONP： 通过script img 标签的src或href等，回调函数，只能get请求。

CORS：依附于AJAX，通过添加HTTP Hearder部分字段请求与获取有权限访问的资源。CORS的关键是服务端的配置支持。

简单请求：请求方法：HEAD GET POST 头信息：Accept  Accept-Language  Content-Language Last-Event-ID Content-Type

非简单请求： 会发预检请求  **Access-Control-Request-Method**        **Access-Control-Request-Headers**

request      Origin ：来源于哪个源

response      **Access-Control-Allow-Origin**     **Access-Control-Allow-Credentials**     **Access-Control-Expose-Headers**



CORS请求默认不发送Cookie和HTTP认证信息。如果要把Cookie发到服务器，一方面要服务器同意，指定`Access-Control-Allow-Credentials`字段。另一方面，开发者必须在AJAX请求中打开`withCredentials`属性。



代理：nginx   webserver

1. JSONP的主要优势在于对浏览器的支持较好；虽然目前主流浏览器支持CORS，但IE10以下不支持CORS。
2. JSONP只能用于获取资源（即只读，类似于GET请求）；CORS支持所有类型的HTTP请求，功能完善。（这点JSONP被玩虐，但大部分情况下GET已经能满足需求了）
3. JSONP的错误处理机制并不完善，我们没办法进行错误处理；而CORS可以通过onerror事件监听错误，并且浏览器控制台会看到报错信息，利于排查。
4. JSONP只会发一次请求；而对于复杂请求，CORS会发两次请求。
5. 始终觉得安全性这个东西是相对的，没有绝对的安全，也做不到绝对的安全。毕竟JSONP并不是跨域规范，它存在很明显的安全问题：callback参数注入和资源访问授权设置。CORS好歹也算是个跨域规范，在资源访问授权方面进行了限制（Access-Control-Allow-Origin），而且标准浏览器都做了安全限制，比如拒绝手动设置origin字段，相对来说是安全了一点。
   但是回过头来看一下，就算是不安全的JSONP，我们依然可以在服务端端进行一些权限的限制，服务端和客户端也都依然可以做一些注入的安全处理，哪怕被攻克，它也只能读一些东西。就算是比较安全的CORS，同样可以在服务端设置出现漏洞或者不在浏览器的跨域限制环境下进行攻击，而且它不仅可以读，还可以写。

### 防抖节流

防抖：对于短时间内连续触发的事件（上面的滚动事件），防抖的含义就是让某个时间期限内，事件处理函数只执行一次。

​	思路：如果在200ms内没有再次触发滚动事件，那么就执行函数

​				如果在200ms内再次触发滚动事件，那么当前的计时取消，重新开始计时

常用于页面resize事件

```javascript
/*
* fn [function] 需要防抖的函数
* delay [number] 毫秒，防抖期限值
*/
function debounce(fn,delay){
    let timer = null //借助闭包
    return function() {
        if(timer){
            clearTimeout(timer) 
        }
        timer = setTimeout(fn,delay) // 简化写法
    }
}
```

节流：如果短时间内大量触发同一事件，那么在函数执行一次之后，该函数在指定的时间期限内不再工作，直至过了这段时间才重新生效。

​	防抖的思路的问题：如果在限定时间段内，不断触发滚动事件（比如某个用户闲着无聊，按住滚动不断的拖来拖去），只要不停止触发，理论上就永远不会输出当前距离顶部的距离。

常用于搜索框实时搜索场景

```javascript
function throttle(fn,delay){
    let valid = true
    return function() {
       if(!valid){
           //休息时间 暂不接客
           return false 
       }
       // 工作时间，执行函数并且在间隔期内把状态位设为无效
        valid = false
        setTimeout(() => {
            fn()
            valid = true;
        }, delay)
    }
}
```



### dom事件流以及事件代理

捕获  目标  冒泡阶段   addEventListener  默认冒泡  

阻止冒泡 stopPropagation

### apply 和 call 以及bind

通过apply和call改变函数的this指向，他们两个函数的第一个参数都是一样的表示要改变指向的那个对象，第二个参数，apply是数组，而call以及bind则是arg1,arg2...这种形式。 通过bind改变this作用域会返回一个新的函数，这个函数不会马上执行。call的性能更好，因为参数格式在内部使用时不需要做额外的转换

普通函数严格模式this指向undefined，非严格指向window，class和module默认严格模式

### 类型判断

基本数据类型：String、Number、Boolean、Null、Undefined、symbol（ES6）

- typeof ：  返回结果为number、boolean、string、object、undefined、function、Symbol
- **instanceof**   检查原型链是否有关系，基本数据类型要通过new来创建才可以检测
- isPrototypeOf: 与 **instanceof**   类似
- constructor   除了null和undefined，constructor容易被修改
- Object.prototype.toString.call()    都可以   ie6兼容问题  ['Object', 'Array']

### async await以及generate

使用 `async/await` 实现一个 sleep 的功能：

```javascript
function sleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, time);
  });
}

async function test () {
  for(let i = 0; i < 10; i++) {
    let result = await sleep(1000);
    console.log(result);
  }
}
```

将 `async/await` 转成 generator 和 promise 来实现：

**将 `async/await` 使用 generator 进行改写的关键是要使用 promise 来实现一个 generator 自执行器。**

```javascript
let test = function () {
  // ret 为一个Promise对象，因为ES6语法规定 async 函数的返回值必须是一个 promise 对象
  let ret = _asyncToGenerator(function* () {
    for (let i = 0; i < 10; i++) {
      let result = yield sleep(1000);
      console.log(result);
    }
  });
  return ret;
}();

// generator 自执行器
function _asyncToGenerator(genFn) {
  return new Promise((resolve, reject) => {
    let gen = genFn();
    function step(key, arg) {
      let info = {};
      try {
        info = gen[key](arg);
      } catch (error) {
        reject(error);
        return;
      }
      if (info.done) {
        resolve(info.value);
      } else {
        return Promise.resolve(info.value).then((v) => {
          return step('next', v);
        }, (error) => {
          return step('throw', error);
        });
      }
    }
    step('next');
  });
}
```

### try catch异常

无法捕获异步任务的异常，Promise.reject()

### 箭头函数及this

写法规则：

- 箭头函数只能用赋值式写法，不能用声明式写法
- 如果参数只有一个，可以不加括号，如果没有参数或者参数多于一个就需要加括号
- 如果函数体只有一句话，可以不加花括号
- 如果函数体没有括号，可以不写return，箭头函数会帮你return

特性：

- 默认绑定外层this
- 不能用call方法修改里面的this
- 定义的时候确定this
- 没有prototype

函数中的this：

- 纯粹的函数调用   会调用call方法，call方法接收的第一个参数就是this，如果为null 或者 undefined，那么 window 对象就是默认的 context（严格模式下默认 context 是 undefined）。
- 对象中函数的调用
- 构造函数中this，构造函数在new之后都会返回一个对象，这个对象就是this，也就是context上下文。
- window.setTimeout()和window.setInterval()中函数的调用，里面的this默认是window对象。

### 箭头函数和普通函数

- **箭头函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。**
- 箭头函数没有arguments,如果要用，可以用 rest 参数代替 (注意在node环境下是有arguments的)
- 箭头函数不能作为构造函数，不能使用new
- **箭头函数没有原型，不能继承**
- 箭头函数不能当做Generator函数,不能使用yield关键字
- 箭头函数不能使用 arguments、super 和 new.target，也不能用作构造函数。此外，箭头函数也没有 prototype 属性。

### let const var

let const：块级作用域，暂时性死区，全局声明不会成为window的属性，无法使用条件声明，for循环与setTimeout

var： 函数作用域，声明提升

### Object function proto

```javascript
Object.__proto__ === Function.prototype //true
Object.__proto__ === Function.__proto__//true
Object.prototype === Function.prototype.__proto__ // true
//因此
Function instanceof Object //true
Object instanceof Function //true
```

### 静态方法和实例方法

静态方法：属于类的方法，即类可以直接调用的方法。为类所有实例化对象所共用（但不能用实例对象之间调用），所以静态成员只在内存中占一块区域；

实例方法：属于实例化类后对象的方法，即实例对象调用的方法。每创建一个类的实例，都会在内存中为非静态成员分配一块存储；

### 正则、定型数组以及迭代生成器

### 原型与原型链

函数才有prototype原型对象

_proto_  也就是[[prototype]]指针 是实例对象就有的 指向构造函数的prototype

isPrototypeOf()   instanceOf()  setPrototypeOf()与Object.create()

```javascript
console.log(Object.getPrototypeOf(person1) == Person.prototype)  //true 返回参数的内部特性[[Prototype]]的值
console.log(Person.prototype.isPrototypeOf(person1)); // true    //true 会在传入参数的[[Prototype]]指向调用它的对象时返回 true
```



![img](https://upload-images.jianshu.io/upload_images/1490251-3089c135df71c956.png?imageMogr2/auto-orient/strip|imageView2/2/format/webp)



### 继承的多种方式

每个构造函数都有一个原型对象，原型有一个属性指回构造函数，而实例有一个内部指针指向原型。如果**原型是另一个类型的实例**呢？那就意味着这个原型本身有一个内部指针指向另一个原型，相应地另一个原型也有一个指针指向另一个构造函数。这样就在实例和原型之间构造了一条原型链。这就是原型链的基本构想。

**原型链继承 ：**

​	原型中包含引用值的时候，原型中包含的引用值会在所有实例间共享。 

​	子类型在实例化时不能给父类型的构造函数传参

```javascript
function SuperType() { 
 this.property = true; 
} 
SuperType.prototype.getSuperValue = function() { 
 return this.property; 
}; 
function SubType() { 
 this.subproperty = false; 
} 
// 继承 SuperType 
SubType.prototype = new SuperType(); 
SubType.prototype.getSubValue = function () { 
 return this.subproperty; 
}; 
let instance = new SubType(); 
console.log(instance.getSuperValue()); // true
```

**盗用构造函数继承：**

​	可以在子类构造函数中向父类构造函数传参。

​	必须在构造函数中定义方法，因此函数不能重用。 

​	此外，子类也不能访问父类原型上定义的方法，因此所有类型只能使用构造函数模式。

```javascript
function SuperType() { 
 this.colors = ["red", "blue", "green"]; 
} 
function SubType() { 
 // 继承 SuperType 
 SuperType.call(this); 
} 
let instance1 = new SubType(); 
instance1.colors.push("black"); 
console.log(instance1.colors); // "red,blue,green,black" 
let instance2 = new SubType(); 
console.log(instance2.colors); // "red,blue,green"
```

**组合继承 ：**

​	使用原型链继承原型上的属性和方法，而通过盗用构造函数继承实例属性。

​	既可以把方法定义在原型上以实现重用，又可以让每个实例都有自己的属性。 

​	保留了 instanceof 操作符和 isPrototypeOf()方法识别合成对象的能力。 

​	组合继承其实也存在效率问题。最主要的效率问题就是父类构造函数始终会被调用两次

```javascript
function SuperType(name){ 
 this.name = name; 
 this.colors = ["red", "blue", "green"]; 
} 
SuperType.prototype.sayName = function() { 
 console.log(this.name); 
}; 
function SubType(name, age){ 
 // 继承属性
 SuperType.call(this, name);  //第二次调用构造函数
 this.age = age; 
} 
// 继承方法
SubType.prototype = new SuperType();  //第一次调用构造函数
SubType.prototype.sayAge = function() { 
 console.log(this.age); 
}; 
let instance1 = new SubType("Nicholas", 29); 
instance1.colors.push("black"); 
console.log(instance1.colors); // "red,blue,green,black" 
instance1.sayName(); // "Nicholas"; 
instance1.sayAge(); // 29 
let instance2 = new SubType("Greg", 27); 
console.log(instance2.colors); // "red,blue,green" 
instance2.sayName(); // "Greg"; 
instance2.sayAge(); // 27
```

**原型式继承：**

​	Object.create()方法将原型式继承的概念规范化了  。

​	非常适合不需要单独创建构造函数，但仍然需要在对象间共享信息的场合。但要记住，属性中包含的引用值始终会在相关对象间共享，跟使用原型模式是一样的。

```javascript
function object(o) { 
 function F() {} 
 F.prototype = o; 
 return new F(); 
}

let person = { 
 name: "Nicholas", 
 friends: ["Shelby", "Court", "Van"] 
}; 
let anotherPerson = Object.create(person); 
anotherPerson.name = "Greg"; 
anotherPerson.friends.push("Rob"); 
let yetAnotherPerson = Object.create(person); 
yetAnotherPerson.name = "Linda"; 
yetAnotherPerson.friends.push("Barbie"); 
console.log(person.friends); // "Shelby,Court,Van,Rob,Barbie"

```

**寄生式继承：**

```javascript
function createAnother(original){ 
 let clone = object(original); // 通过调用函数创建一个新对象
 clone.sayHi = function() { // 以某种方式增强这个对象
 console.log("hi"); 
 }; 
 return clone; // 返回这个对象
}

let person = { 
 name: "Nicholas", 
 friends: ["Shelby", "Court", "Van"] 
}; 
let anotherPerson = createAnother(person); 
anotherPerson.sayHi(); // "hi"
```

**寄生式组合继承：**

​	只调用了一次 SuperType 构造函数，避免了 SubType.prototype 上不必要也用不到的属性

```javascript
function inheritPrototype(subType, superType) { 
 let prototype = object(superType.prototype); // 创建对象
 prototype.constructor = subType; // 增强对象 
 subType.prototype = prototype; // 赋值对象
}

function SuperType(name) { 
 this.name = name; 
 this.colors = ["red", "blue", "green"]; 
} 
SuperType.prototype.sayName = function() { 
 console.log(this.name); 
}; 
function SubType(name, age) { 
 SuperType.call(this, name);
    this.age = age; 
} 
inheritPrototype(SubType, SuperType); 
SubType.prototype.sayAge = function() { 
 console.log(this.age); 
};
```

### requestanimationFrame  和 setinterval

- 经过浏览器优化，动画更流畅

- 窗口没激活时，动画将停止，省计算资源
- 更省电，尤其是对移动终端

requestAnimationFrame最大的优势是
由系统来决定回调函数的执行时机。具体一点讲，如果屏幕刷新率是60Hz,那么回调函数就每16.7ms被执行一次，如果刷新率是75Hz，那么这个时间间隔就变成了1000/75=13.3ms，换句话说就是，requestAnimationFrame的步伐跟着系统的刷新步伐走。它能保证回调函数在屏幕每一次的刷新间隔中只被执行一次，这样就不会引起丢帧现象，也不会导致动画出现卡顿的问题

### 错误监控

vue +  sentry（错误追踪工具）

```javascript
// vue 提供了全局错误处理钩子 errorHandler
Vue.config.errorHandler = function (err, vm, info) {
  // handle error
  // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
  // 只在 2.2.0+ 可用
}

window.addEventListener('unhandledrejection', event => {
  event.promise.catch((e) => {
    utils.errorCatch(e, 3)
  })
})

window.onerror = function(message, source, lineno, colno, error) {
  post('error', {
    data: {
      error: error.stack
    }
  });

window.addEventListener('error', (event) => {
  post('error', {
    data: {
      error: event.error.stack
    }
  });
})
```

### ajax请求超时

请求超时 catch 无法捕获到

try catch 无法捕获 Promise的异常

complete回调函数里面根据status==‘timeout’来执行相应操作

### 数组去重

不同数据类型去重

set

for双循环 

### promise封装请求

事件监听

addEventListener

attachEvent

onEvent

### 构造函数与普通函数

### 数组交集与并集

## 5、TypeScript

### 类型检测

## 6、Nodejs

### koa中间件洋葱模型

koa2中间件是基于async/await实现的，其执行过程是通过next来驱动的，中间件执行顺序的一个模型

### 事件循环

nodejs   javascript是单线程

应用层：   即 JavaScript 交互层，常见的就是 Node.js 的模块，比如 http，fs

V8引擎层：  即利用 V8 引擎来解析JavaScript 语法，进而和下层 API 交互

NodeAPI层：  为上层模块提供系统调用，一般是由 C 语言来实现，和操作系统进行交互 。

LIBUV层： 是跨平台的底层封装，实现了 事件循环、文件操作等，是 Node.js 实现异步的核心 。



nodejs采用事件驱动和异步 I/O 的方式，实现了一个单线程、高并发的 JavaScript 运行时环境，不阻塞IO模型及异步编程，适合处理I/O密集型任务，**并不适合 CPU 密集型任务。**

Node.js 在主线程里维护了一个**事件队列，**当接到请求后，就将该请求作为一个事件放入这个队列中，然后继续接收其他请求。当主线程空闲时(没有请求接入时)，就开始循环事件队列，检查队列中是否有要处理的事件，这时要分两种情况：如果是非 I/O 任务，就亲自处理，并通过回调函数返回到上层调用；如果是 I/O 任务，就从 **线程池** 中拿出一个线程来处理这个事件，并指定回调函数，然后继续循环队列中的其他事件。

当线程中的 I/O 任务完成以后，就执行指定的回调函数，并把这个完成的事件放到事件队列的尾部，等待事件循环，当主线程再次循环到该事件时，就直接处理并返回给上层调用。 这个过程就叫 **事件循环** (Event Loop)

## 7、Vue

### 响应式原理

### Vue.use  Vue.extend  component等

extend创建一个vue的构造器 通过$mount挂载，动态渲染组件

### new Vue

### 生命周期顺序

parent： beforeCreated created beforeMounted

child： beforeCreated created beforeMounted  mounted

parent：mounted

### 动态添加属性

Vue.util.reactive

### scoped和module

scoped只在style的父元素及子元素中生效，通过hash唯一标识，只能调整子组件根元素的样式，vue借助postcss实现，更适合小场景

module 保存在$style对象中，命名方便定位组件，样式可以在组件之中传递，还有变量导出功能。更适合大项目。

### router query拼接到hash后面的设计

### vue3 treeshaking

### 相关问题

​	动态新增响应式数据 :  this.$set()   Vue.set()

​	vuex  namespace:  解决不同模块命名冲突的问题，命名空间，引用时加上模块名

​	动态创建模块  store.registerModule

​	mapState()  传入对象或者数组

​	动态路由    $route.params,     参数    $route.query

​	mixins:  钩子合并，混入对象的钩子将在组件自身钩子**之前**调用。选项合并，组件优先

## 8、React

### 函数式组件和类式组件

### Hooks及其优缺点

​	**只在最顶层调用Hooks**

不要在循环、条件语句或者嵌套方法中调用Hooks。

要在你React方法的顶层里调用。遵循这个方式，你能保证每次组件渲染时Hooks都是按照相同的顺序被调用。这能使React在多个useState和useEffect的情形下正确保存state数据。

​	**只在function组件里调用Hooks**

不在普通的JavaScript方法里调用Hooks。你只能

- 在function组件里调用Hooks
- 在自定义Hooks里调用Hooks

遵循这个能保证所有组件里的有状态逻辑足够清晰。

**代码复用**

### Diff算法

- React/Vue 的 DIff 策略使遍历复杂度降低为 O(n)，是一个重大的优化
- React/Vue 在做循环时，一定要加上唯一的 key 值，这样不仅能有效提高 Diff 效率，减少 DOM 的重绘，还能避免一些稀奇古怪的错误
- 尽量减少跨层级的组件改动，尽量使用 v-show/display:none 来保持 DOM 结构的稳定性，防止新增、删除等消耗大量性能的操作
- 尽量减少将节点尾部移动到节点头部等操作，当节点数量过大或更新操作过于频繁时，在一定程度上会影响 React 的渲染性能。
- 另外，React 从 16 版本开始使用了 Fiber 架构，这个架构解决了大型 React 项目的性能问题及一些之前框架的痛点，我会在下一章详细介绍 Fiber 架构的奥秘和其与之前架构的区别

### 组件通信

### redux单项数据流

## 9、uni-app

### 移动端

### 小程序

## 10、前端工程化与发展

### webpack打包原理

entry   入口起点

Module    一切皆模块，一个模块对应一个文件

Chunk  代码块，多个模块组合，用于代码合并和分割

Loader  让 webpack 能够去处理那些非 JavaScript 文件

Plugin   用于执行范围更广的任务，从打包优化和压缩,一直到重新定义环境中的变量。

打包流程：

1. 初始化参数：从配置文件和 Shell 语句中读取与合并参数,得出最终的参数。

2. 开始编译：用上一步得到的参数初始化 Compiler 对象,加载所有配置的插件,执行对象的 run 方法开始执行编译。

3. 确定入口：根据配置中的 entry 找出所有的入口文件。

4. 编译模块：从入口文件出发,调用所有配置的 Loader 对模块进行翻译,再找出该模块依赖的模块,再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理。

5. 完成模块编译：在经过第 4 步使用 Loader 翻译完所有模块后,得到了每个模块被翻译后的最终内容以及它们之间的依赖关系。

6. 输出资源：根据入口和模块之间的依赖关系,组装成一个个包含多个模块的 Chunk,再把每个 Chunk 转换成一个单独的文件加入到输出列表,这步是可以修改输出内容的最后机会。

7. 输出完成：在确定好输出内容后,根据配置确定输出的路径和文件名,把文件内容写入到文件系统。

   在以上过程中,Webpack 会在特定的时间点广播出特定的事件,插件在监听到感兴趣的事件后会执行特定的逻辑,并且插件可以调用 Webpack 提供的 API 改变 Webpack 的运行结果。

### webpack常用插件

CommonsChunkPlugin：公共依赖抽离防止重复打包

clean-webpack-plugin：

HotModuleReplacementPlugin：自带的热部署

html-webpack-plugin：文件名称发生变更

### webpack热更新

### SSR 服务端使用java开发，如何识别js

### 性能优化

首屏加载：通过DOMContentLoaded或者performance( The Paint Timing API )来计算首屏时间

​	优化：资源加载  页面渲染优化

​		减小入口文件体积：路由懒加载，不同路由对应不同组件分割打包，vuerouter  （）=>  import()函数动态加载

​		静态资源本地缓存：http缓存， webstorage  serviceworker

​		UI框架按需加载：组件按需引用而非整体引入

​		图片资源压缩：雪碧图

​		组件重复打包：常用的库多次引用导致重复下载， 设置CommonsChunkPlugin  的 minChunks 抽离放进公共依赖文件。

​		开启gzip压缩：compression-webpack-plugin, 服务器相应配置，安装compression

​		使用SSR：服务端渲染，nuxt.js,  还能利于SEO。

​		CDN分发网络: CDN的工作原理就是将您源站的资源缓存到位于全球各地的CDN节点上，用户请求资源时，就近返回节点上缓存的资源，而不需要每个用户的请求都回您的源站获取，避免网络拥塞、缓解源站压力，保证用户访问资源的速度和体验

白屏优化：

​	DNS域名解析 =>  建立TCP请求连接  =>  服务端处理并相应 => 客户端下载、解析、渲染并显示

​	DNS缓存、预加载

请求优化：bnb 

​	减少请求数量：小图片打包成base64      雪碧图     缓存

​    减少请求时间：压缩   懒加载     高版本http     CDN

代码层面：

​	self = this 对象缓存，代码美观，压缩体积减少

​	pre机制   preload提前加载      prefetch，低优先级资源提示，空闲时加载

​	preload 是确认会加载指定资源，如在我们的场景中，x-report.js 初始化后一定会加载 PcCommon.js 和 TabsPc.js, 则可以预先 preload 这些资源；

​	prefetch 是预测会加载指定资源，如在我们的场景中，我们在页面加载后会初始化首屏组件，当用户滚动页面时，会拉取第二屏的组件，若能预测用户行为，则可以 prefetch 下一屏的组件。

​	并行加载   http2

webpack优化：

​    loader的exclude ，排除某些目录，加快打包

​	noparse不需要解析的文件

​	eslint ignore

​	devtools  开发环境cheap-source-map快于source-map

​	cache-loader 打包缓存

### 单页面应用

### 屏幕自适应

​	rem、em   @media    postcsstorem   picture video标签    resize监听防抖



### require与import

require：

​	AMD规范，commonjs， 运行时调用， 理论上可以运用在代码的任何地方。

​	赋值过程，赋值变量以及浅拷贝对象。

​	出现模块之间循环引用时, 会输出已执行的模块, 未执行模块不会输出

​	CommonJS规范默认`export`的是一个对象,即使导出的是基础数据类型

import：

​	ES6，编译时调用，必须放在文件开头，解构过程，只读引用传递

​	出现模块之间的循环引用时，只要模块存在某个引用，代码就能够执行。

​	import()动态导入

## 11、可视化相关

### 动画

animation(过渡)  ：

​	transition-property（执行变换的属性），transition-duration（执行变换的持续时间）,

​	transition-timing-function(变换的速率变化模式),    transition-delay(变换延迟时间)

tansform(变换)

​	rotate   translate   scale   skew(扭曲，倾斜)

transition(动画)  

​	@keyframes

- animation-name(动画名，也就是keyfram中定义的动画名)
- animation-duration（动画持续时间）
- animation-timing-function（动画变化的速率）
- animation-delay（动画延迟播放的时间）
- animation-iteration-count（动画循环的次数，infinite是无限次）
- animation-direction（动画的方向）
- animation-play-state动画的播放状态

css3中的animation属性类似于transition属性，都是随着时间去改变元素的属性值，但是两者的区别就在于，transition一定要有一个事件触发才会产生效果。就像是hover，click等。但是animation不需要任何事件的触发也可以随着时间的变化去改变css属性值，从而产生一种动画的效果。

### canvas与svg

canvas根据坐标来判断点击在何处，进而做交互

### canvas实现水印

### webgl

## 12、手写实现问题

### 函数柯里化

```javascript
function curry () {}


// 输出

const curryAdd = curry((a, b) => a + b);

const addTen = curryAdd(10);

console.log(addTen(1));

console.log(addTen(21));

console.log(addTen(100));
```



### 实现toChinese函数

```javascript
function toChinese () {}

// 输出

最大到10亿

toChinese(100) => '一百'

toChinese(231) => '二百三十一'

toChinese(10010) => '一万零一十'
```



### 手写实现apply，call，bind

```javascript
// ES5  call方法 
Function.prototype.Call = function (content) {
    content = content || window;// 给执行上下文 添加默认值 
    content.fn = this//给 content 添加一个方法指向this；
    var args = [];//保存参数集合
    for (let i = 1; i < arguments.length; i++) {
        args.push(arguments[i])
    }
    var res = args.length > 1 ? eval('content.fn(' + args + ')') : content.fn() ;//执行fn；
    delete content.fn;// 删除fn方法
    return res
}
// ES6 call方法
Function.prototype.Call = function(content=window){// 给执行上下文 添加默认值
    content.fn = this//给 content 添加一个方法指向this；显示绑定this
    // 获取第一个参数以后的所有参数
    const args = Array.from(arguments).slice(1);
    // 调用上下文的fn属性, 此时函数的this指向上下文, 也就是我们传入的content
    const res = arguments.length > 1 ? content.fn(...args) : content.fn();
    // 删除上下文的content的fn方法, 避免污染上下文
    delete content.fn;
    return res
}
// ES6 apply方法
Function.prototype._Apply = function (content = window, args = []) {//给content和args添加默认值
    if (!(args instanceof Object)) {// 如果第二个参数不是对象的实例,就返回一个错误
        throw new TypeError('Create List From Array Like called on non-object');
    }
    // 显示绑定函数this
    content.fn = this;
    // 执行fn方法,并接受返回值
    const res = arguments[1] ? content.fn(...arguments[1]) : content.fn()
    delete content.fn;// 删除fn方法
    return res
}
//只是对bind的一个简易实现, 没有考虑new运算符的实现,之后会更新对new运算符的实现.
Function.prototype._bind = function(content=window){
    const slice = Array.prototype.slice;
    // 保存调用函数的this, 也就是原函数
    const thatFunc = this;
    // 获取第一个参数之后剩余的参数数组
    const args = [].slice.call(arguments,1);
    return function(){
        // 合并返回的新函数的参数
        const funcArgs = args.concat(slice.call(arguments))
        // 返回新函数调用的结果
        return thatFunc.call(content,...funcArgs)
    }
}
```



### 实现promise并发数目控制

### eventEmitter

### for循环输出setTimeout

```javascript
for (var i=1; i<=5; i++) {
    (function(j) {
        setTimeout( function timer() {
            console.log( j );
        }, j*1000 );
    })(i);
}
```

### 顺序执行promise

```javascript
const fn = function(dataFunctions) {
  return new Promise((resolve, reject) => {
  	const excute = function(i, params) {
		dataFunctions[i](params).then(res => {
    		if(i < dataFunctions.length - 1) {
      			excute(i+1, res)
    		} else {
          	resolve(res)
  			}
        })
	}
	excute(0) 	
  })
}
```

### 实现instanceof

左边的proto与右边的prototype

### 实现Fetch超时控制

通过promise.race() 以及setTimeout来实现 

### 重试函数

```javascript
/**
* 把任意一个函数，修饰生成一个带重试功能的新函数。
* 1、如果执行失败，进行重试；
* 2、如果执行成功，直接返回结果；
* 3、如果重试了 n 次依然失败，抛出最后一次的异常。
* 4、新函数的表现行为要尽可能与原函数保持一致
*
* @param {Function} fn
* @param {number} n 最大重试次数
* @return {Function} 带有重试功能的新函数
*/
function useRetryable(fn, n) {
  
  let tem = 0;
  const helper = async function(...args) {
    
  	try {
      return await fn(...args)
        
    } catch (err) {
      if(tem < n - 1) {
      	tem = tem + 1
        helper(...args)  
      } else {
        throw(err)
        tem = 0  
      }
    }   
  }
 return helper
}
```

### promise优缺点

**解决回调地狱**

**ES6 不支持取消期约和进度通知**

取消promise：可通过“取消令牌”（cancel token）实现

进度通知：通过扩展 Promise 类，为它添加 notify()方法实现

一个主要原因就是这样**会导致期约连锁和期约合成过度复杂化**。比如在一个期约连锁中，如果某个被其他期约依赖的期约被取消了或者发出了通知，那么接下来应该发生什么完全说不清楚。毕竟，如果取消了 Promise.all()中的一个期约，或者期约连锁中前面的期约发送了一个通知，那么接下来应该怎么办才比较合理呢？

promise合成：

```javascript
function addTwo(x) {return x + 2;} 
function addThree(x) {return x + 3;} 
function addFive(x) {return x + 5;} 
function compose(...fns) { 
 return (x) => fns.reduce((promise, fn) => promise.then(fn), Promise.resolve(x)) 
} 
let addTen = compose(addTwo, addThree, addFive);
addTen(8).then(console.log); // 18
```

### new手写实现

### 质数判断算法

### 数组平方重新排序算法

### 最近公共父节点

### 倒计时函数

### 手写eventBus

```javascript
class EventBus {
    constructor(){
        this.eventContainer = this.eventContainer || new Map() //用一个容器存放事件
    }
    on(type,callback){
        if(!this.eventContainer.has(type)){
            //如果容器里面没有这种类型的事件，就增加
            this.eventContainer.set(type,callback)

        }
    }
    off(type){
        if(this.eventContainer.has(type)){
          
            this.eventContainer.delete(type)

        }
    }
    emit(type){
        let fn = this.eventContainer.get(type)
        fn.apply(this,[...arguments].slice(1))
    }
}

let ev = new EventBus()
ev.on('myevent',name=>{console.log('hello,',name)})
ev.emit('myevent','jack')
```



### 手写发布订阅

### 过滤树节点



### 

### 



### 

### 

### 

### 

### 

​    



### 



### 

### 
