---
title: 'Processing 语句速查手册'
layout: post
guid: 20150928-2031
categories:
 - 笔记
tags:
 - Processing
 - 编程开发
 - 速查手册

---


> Let's Processing! | Processing 语句及用法速查  


>目录  
<a href="#three-basic-parts">三个基本函数部分</a>  
<a href="#environment">环境参数</a>  
<a href="#calculation">内置常量</a>  
<a href="#jibenshuchu">基本输出相关</a>  
<a href="#text-about">文字相关</a>  
<a href="#control">控制语句语法</a>  
<a href="#draw">绘图</a>  
<a href="#mouse-keyboard">鼠标键盘交互相关</a>  
<a href="#shuzu">数组</a>  
<a href="#waibusucai">添加外部素材/数据</a>  
<a href="#duixiangleixing">对象类型</a>  


**Processing 代码是大小写敏感，需要注意关键词字母的大小写**  



<a name='three-basic-parts'></a>
##三个基本函数部分##
* [void setting(){}](https://processing.org/reference/settings_.html) //Processing 3.0 新增；设置环境（例如fullScreen），多数情况下可省略   
* [void setup(){}](https://processing.org/reference/setup_.html) //只执行一次。初始化数据和设置环境（需要放在此段代码的一开始位置
* [void draw(){}](https://processing.org/reference/draw_.html) //setup()内代码运行后，即开始循环运行此函数内代码。


<a name='environment'></a>
##环境参数##
* [fullScreen()](https://processing.org/reference/fullScreen_.html) //全屏模式，必须在一开始就设置，且不能在运行过程中改变
<code><pre>//语法：
fullScreen()
fullScreen(display)
fullScreen(renderer)
fullScreen(renderer, display)</pre></code>
* [displayDensity()](https://processing.org/reference/displayDensity_.html) 返回或设置是否是高分辨率模式（高分辨率模式需要显示器支持）
<code><pre>//语法：
displayDensity()
displayDensity(display)</pre></code>
* [pixelDensity()](https://processing.org/reference/pixelDensity.html) 同displayDensity，设置像素密度
`pixelDensity(density) //density = 1 或 2`
* pixelHeight //窗口高度（像素单位）
* pixelWidth //窗口宽度（像素单位）
* [size()](https://processing.org/reference/size_.html); 设置窗口大小。3.0版本在setup()函数中不能使用变量传递参数，可以在 setting()函数中使用变量传递参数
* [width](https://processing.org/reference/width.html) 窗口宽度
* [height](https://processing.org/reference/width.html) 窗口高度
* [smooth()](https://processing.org/reference/smooth_.html) 开启抗锯齿（默认已开启）
* [noSmooth()](https://processing.org/reference/noSmooth_.html) 关闭抗锯齿


环境参数常量

* [frameRate](https://processing.org/reference/frameRate.html) 当前窗口帧率
* [frameRate()](https://processing.org/reference/frameRate_.html); 设置当前窗口帧率，可在后续运行中改变
[focused](https://processing.org/reference/focused.html) 窗口是否处于焦点（true 或 false）
frameCount


<a name="calculation"></a>
##数学计算##
内置常量

* [PI](https://processing.org/reference/PI.html)  圆周率π  
* [HALF_PI](https://processing.org/reference/HALF_PI.html) 二分之一 π  
* [QUARTER_PI](https://processing.org/reference/QUARTER_PI.html) 四分之三 π  
* [TWO_PI](https://processing.org/reference/TWO_PI.html) 两倍 π  
* [TAU](https://processing.org/reference/TAU.html) TWO_PI的别名  

计算函数  
abs() //绝对值  
ceil()
constrain()
dist()
exp()
floor()
lerp()
log()
mag()
map()
max()
min()
norm()
pow()
round()
sq()
sqrt()


<a name='jibenshuchu'></a>
##基本输出相关##
* [stroke()](https://processing.org/reference/stroke_.html); 绘制图形时的边框线颜色
* [strokeWeight()](https://processing.org/reference/strokeWeight_.html); 边框线粗细
* [noStroke](https://processing.org/reference/noStroke_.html)(); 无边框线
* [print()](https://processing.org/reference/print_.html); 输出文字到消息窗口
* [println()](https://processing.org/reference/println_.html); 输出文字到消息窗口并换行
* [printArray()](https://processing.org/reference/printArray_.html); 将数组以文字形式输出到消息窗口


***颜色***

* [colorMode()](https://processing.org/reference/colorMode_.html) 颜色模式。`RGB`(Red,Green,Blue)/`HSB`(Hue,Saturation,Brightness)
  * colorMode(mode, max) —— max=float:range for all color elements
  * colorMode(mode, max1, max2, max3) —— max=RGBHSB
  * colorMode(mode, max1, max2, max3, maxA) —— maxA=float:range for the alpha(0-255)

* [fill()](https://processing.org/reference/fill_.html); 填充色
<code><pre>//语法：
fill(gray)
fill(gray, alpha)
fill(v1, v2, v3)
fill(v1, v2, v3, alpha</pre></code>

* [noFill()](https://processing.org/reference/noFill_.html); 无填充色
* [background()](https://processing.org/reference/background_.html); 背景色等设置
* [Pgraphics var](https://processing.org/reference/PGraphics.html); 绘图区域变量
  * [createGraphics()](https://processing.org/reference/createGraphics_.html)
  * [.beginDraw()](https://processing.org/reference/PGraphics_beginDraw_.html)
  * [.endDraw()](https://processing.org/reference/PGraphics_endDraw_.html)
  * [.clear()](https://processing.org/reference/clear_.html);

<a name='text-about'></a>
###--- 文字相关 ---###

**字符串**

* +; 字符串连接符号
* [char](https://processing.org/reference/char.html) 声明单字符变量
* [String](https://processing.org/reference/String.html) 声明字符串变量 
	* [.charAt()](https://processing.org/reference/String_charAt_.html) 返回指定位置的字符
	* [.equals()](https://processing.org/reference/String_equals_.html) 字符串方法-是否等于指定字符串（比较两个字符串是否相同时建议用此方法，次之用`==`来比较）
	* [.indexOf()](https://processing.org/reference/String_indexOf_.html)	返回指定子字符串在字符串中的位置，可以指定起始搜索位置
	* [.length()](https://processing.org/reference/String_length_.html) 字符串的属性-字符串长度
	* [.substring()](https://processing.org/reference/String_substring_.html) 字符串的方法-截取
	* [.toLowerCase()](https://processing.org/reference/String_toLowerCase_.html)	字符串方法-转换所有字符为**小**写字母
	* [.toUpperCase()](https://processing.org/reference/String_toUpperCase_.html)	字符串方法-转换所有字符为**大**写字母
* [join()](https://processing.org/reference/join_.html); 将字符串数组合并到一个字符串里
* [match()](https://processing.org/reference/match_.html); 获取第一个匹配区域的字符串。支持正则表达式。返回字符串
* [matchAll()](https://processing.org/reference/matchAll_.html); 获取所有匹配区域的字符串。支持正则表达式。返回字符串数组
* [nf()](https://processing.org/reference/nf_.html); 格式化数字，前后补0
* [nfc()](https://processing.org/reference/nfc_.html);格式化数字，添加千位标记符，也可指定位数
* [nfp()](https://processing.org/reference/nfp_.html); 同nf()，但同时添加正负号
* [nfs()](https://processing.org/reference/nfs_.html); 同nfp()，但正数前面不是加号而是空格
* [split()](https://processing.org/reference/split_.html); 分割字符串
* [splitTokens()](https://processing.org/reference/splitTokens_.html); 分割字符串，支持指定多个分隔符，且自动忽略空元素
* [trim()](https://processing.org/reference/trim_.html); 去掉首尾空白字符。支持直接操作字符串数组



**文字输出**

* [text()](https://processing.org/reference/text_.html); 输出文字
	* text(c, x, y) //c	= char: the alphanumeric character to be displayed
	* text(c, x, y, z)
	* text(str, x, y) [(示例)](./files/2015/0928/01.png)
	* text(chars, start, stop, x, y)
	* text(str, x, y, z)
	* text(chars, start, stop, x, y, z)
	* text(str, x1, y1, x2, y2) 在一个矩形范围内输出 [(示例)](./files/2015/0928/02.png)
	* text(num, x, y)
	* text(num, x, y, z) 
* [textSize()](https://processing.org/reference/textSize_.html); 设置字体尺寸  
* [textWidth()](https://processing.org/reference/textWidth_.html); 文字所占屏幕宽度
* [textAlign()](https://processing.org/reference/textAlign_.html); 文字依据输出坐标的对齐方式
* [textMode()](https://processing.org/reference/textMode_.html); 文字输出模式是位图或矢量
* [textLeading()](https://processing.org/reference/textLeading_.html); 设置行距，单位是像素
* [textFont()](https://processing.org/reference/textFont_.html); 设置字体
* [PFont](https://processing.org/reference/PFont.html); 声明字体类
  * [.list()](https://processing.org/reference/PFont_list_.html); 字体名称列表
<code><pre>//输出本地所有字体名词
String[] fontList = PFont.list();
printArray(fontList);</pre></code>
* [createFont()](https://processing.org/reference/createFont_.html); 初始字体变量
* [loadFont()](https://processing.org/reference/loadFont_.html); 载入字体

	> 使用步骤  
	1\. 声明一个 PFont 类型的对象  
	`PFont f;`  
	2\. 使用 createFont()，通过引用字体名称来创建字体  
	`f =createFont("Arial",16,true); // Arial, 16 point, anti-aliasing on`  
	3\. 用 textFont() 指定字体    
	`textFont(f,36);`  
	4\. 使用 fill() 指定颜色  
	`fill(255);`  
	5\. 调用 text() 函数显示文本  
	`text("Hello Strings!",10,100);`

<code><pre>
//示例代码
PFont f;     // STEP 1 Declare PFont variable
//
void setup() {
  size(200,200);
  f = createFont("Arial",16,true); // STEP 2 Create Font
}
//
void draw() {
  background(255);
  textFont(f,16);     // STEP 3 Specify font to be used
  fill(0);           // STEP 4 Specify font color 
  text("Hello Strings!",10,100);   // STEP 5 Display Text
}</pre></code>


**使用字体的另一种方式**  
通过IDE菜单 "Tools / 工具" → "Create Font. / 创建字体"，这会在"data"目录下创建一个 VLW 字体文件，可以通过loadFont()将该字体文件赋值给PFont对象使用。



<a name='control'></a>
##控制语句语法##
***比较操作符***

  * == 等于
  * != 不等于
  * < 小于
  * <= 小于或等于
  * \> 大于
  * \>= 大于或等于 

***逻辑操作符*** 

	* ! 逻辑否
	* && 逻辑和
	* || 逻辑或

***内置常量***

* [null](https://processing.org/reference/null.html) （特殊）空（值），通常用来判断变量是否为有效数据元素（初始化）  
* [true](https://processing.org/reference/true.html) 逻辑真  
* [false](https://processing.org/reference/false.html) 逻辑假  

***控制语句***

* **[if](https://processing.org/reference/if.html), [else](https://processing.org/reference/else.html), [?:](https://processing.org/reference/conditional.html)**
<code><pre>
//①
if (expression) { 
  statements 
} else { 
  statements 
} 
//②
if (expression) { 
  statements 
} else if (expression) { 
  statements 
} else { 
  statements 
}
//③
test ? expression1 : expression2
</pre></code>


* **[for](https://processing.org/reference/for.html)**
<code><pre>for (init; test; update) { 
  statements
} 
//
for (datatype element : array) { 
  statements
}</pre></code>

* **[while](https://processing.org/reference/while.html)**
<code><pre>(while (expression) {
  statements
})</pre></code>


* **[switch](https://processing.org/reference/switch.html), [case](https://processing.org/reference/case.html), [default](https://processing.org/reference/default.html)**
<code><pre>switch(expression)
{
  case label: 
     statements          
  case label:          // Optional
     statements        // "
  default:             // "
     statements        // "
}</pre></code>

* [continue](https://processing.org/reference/continue.html) 下一个循环
* [break](https://processing.org/reference/break.html) 结束选择树或结束循环


<a name="draw"></a>
##绘图##

* [point()](http://www.processing.org/reference/point_.html) 点
* [line()](http://www.processing.org/reference/line_.html) 线
* [rectMode()](https://processing.org/reference/rectMode_.html) 设置rect()的定位方式，默认是CORNER=左上角坐标和宽高模式，CORNERS=1个角点坐标和对角点坐标模式，RADIUS=中心点坐标和半径模式，CENTER=中心点坐标和直径模式
* [rect()](http://www.processing.org/reference/rect_.html) 方
* [ellipse()](https://processing.org/reference/ellipseMode_.html) 设置ellipse()的定位方式，默认是CENTER=中心点坐标和直径模式，RADIUS=中心点坐标和半径模式，CORNER=（圆的外切矩形的）左上角坐标和宽高模式，CORNERS=（圆的外切矩形的）1个角点坐标和对角点坐标模式
* [ellipse()](http://www.processing.org/reference/ellipse_.html) 圆
* [pushStyle()](https://processing.org/reference/pushStyle_.html), [popStyle()](https://processing.org/reference/popStyle_.html)，pushStyle 缓存当前的图形样式设定在内存中， popStyle 恢复到上个缓存的图形样式设置。所以通常是成对出现使用，允许多次缓存
* [vertex()](https://processing.org/reference/beginShape_.html) 多边形<pre><code>beginShape(kind); //kind = 留空是任意多边形 或 POINTS, LINES, TRIANGLES, TRIANGLE_FAN, TRIANGLE_STRIP, QUADS, or QUAD_STRIP
vertex(x1,y1);
vertex(x2,y2);
vertex(...);
vertex(xn,yn);
endShape(mode); //mode = 留空 或使用 CLOSE 去指定闭合图形
</code></pre>

 * beginContour()
 * beginShape()
 * bezierVertex()
 * curveVertex()
 * endContour()
 * endShape()
 * quadraticVertex()
 * vertex()


<a name='mouse-keyboard'></a>
##鼠标键盘交互相关##

Mouse 鼠标  

* [noCursor](https://processing.org/reference/noCursor_.html) 隐藏鼠标光标
* [cursor](https://processing.org/reference/cursor_.html) 显示鼠标光标
	* cursor() 默认
	* cursor(kind) 系统可选：ARROW, CROSS, HAND, MOVE, TEXT, WAIT
	* cursor(img) 图片
	* cursor(img, x, y)
	
* [mouseX](https://processing.org/reference/mouseX.html) 鼠标当前X坐标
* [mouseY](https://processing.org/reference/mouseY.html) 鼠标当前Y坐标
* [pmouseX](https://processing.org/reference/mouseX.html) 鼠标上一刻X坐标
* [pmouseY](https://processing.org/reference/mouseY.html) 鼠标上一刻Y坐标
* [mouseButton](https://processing.org/reference/mouseButton.html) 鼠标未被按下默认是0，鼠标按下时是LEFT,RIGHT或CENTER
* mouseClicked() 鼠标单击事件
* mouseDragged() 鼠标拖动事件
* mouseMoved() 鼠标移动事件
* mousePressed() 鼠标按键按下事件
* mousePressed 鼠标按键是否被按下（true 或 false）
* mouseReleased() 鼠标按键抬起/释放事件
* mouseWheel() 鼠标滚轮滚动事件

Keyboard 键盘

[key](https://processing.org/reference/key.html) 有动作的按键（只适用字符按键，例如: a, A, b,B）
[keyCode](https://processing.org/reference/keyCode.html) 有动作的按键（适用于功能按键，例如：UP, DOWN, LEFT, RIGHT, ALT, CONTROL, SHIFT, PAGE_UP, PAGE_DOWN, HOME, and END）
[keyPressed()](https://processing.org/reference/keyPressed_.html) 键盘按键事件
[keyPressed](https://processing.org/reference/keyPressed.html) 是否有按键被按下（true 或 false）
[keyReleased()](https://processing.org/reference/keyReleased_.html) 按键被松开/释放事件
[keyTyped()](https://processing.org/reference/keyTyped_.html) 类似keyPressed()是键盘按键事件，但会忽略功能按键（例如 Ctrl, Shift, Alt)


接收键盘输入的两个案例

<code><pre>String letters = "";
//
void setup() {
  size(100, 100);
  stroke(255);
  fill(0);
  textSize(16);
}
//
void draw() {
  background(204);
  float cursorPosition = textWidth(letters);
  line(cursorPosition, 0, cursorPosition, 100);
  text(letters, 0, 50);
}
//
void keyPressed() {
  if (key == BACKSPACE) {
    if (letters.length() > 0) {
      letters = letters.substring(0, letters.length()-1);
    }
  } else if (textWidth(letters+key) < width) {
    letters = letters + key;
  }
}
</pre></code>
<code><pre>
String letters = "";
int back = 102;
//
void setup() {
  size(100, 100);
  textSize(16);
  textAlign(CENTER);
}
//
void draw() {
  background(back);
  text(letters, 50, 50);
}
//
void keyPressed() {
  if ((key == ENTER) || (key == RETURN)) {
    letters = letters.toLowerCase();
    println(letters); // Print to console to see input
    if (letters.equals("black")) {
      back = 0;
    } else if (letters.equals("gray")) {
      back = 204;
    }
    letters = ""; // Clear the variable
  } else if ((key > 31) && (key != CODED)) {
    // If the key is alphanumeric, add it to the String
    letters = letters + key;
  }
}
</pre></code>


<a name='shuzu'></a>
### --- 数组 --- ###
[Array](https://processing.org/reference/Array.html)  [使用指导](https://processing.org/tutorials/arrays/)  
datatype[] var 声明数组  
datatype [] var new datatype[#] 声明数组-固定元素数量  
> 声明示例`int[] numbers = new int[3];`  

var[element] = value  数组元素赋值  
var.length 数组的上标  

数组赋值示例：  
1: `sometext[0] = "H";`  
2: `char[] sometext = {'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd'};`

* [ArrayList<>](https://processing.org/reference/ArrayList.html) 动态数组，即可添加和删除元素（长用于对象类）  
`ArrayList<Type>()`  
`ArrayList<Type>(initialCapacity)`  
* [IntList](https://processing.org/reference/IntList.html) 整数动态数组
* [FloatList](https://processing.org/reference/FloatList.html) 浮点数动态数组
* [StringList](https://processing.org/reference/StringList.html) 字符串动态数组

动态数组如何遍历和选择元素 [via THE NATURE OF CODE chapter 4.3]：  
1\. 可以像静态数组一样，使用数字指针，例如：
<code><pre>for (int i = 0; i < particles.size(); i++) {
Particle p = particles.get(i);
p.run();</pre></code>
但是动态数组的元素可以添加和删除，整个数组的元素数量会在循环的过程中变化，造成上下标元素不存在的错误。  
聪明的你可能想到或许可以这样：
<code><pre>for (Particle p: particles) {
p.run();
}</pre></code>
但是这样和上面的for循环会遇到一样的问题。  

2\. Java 提供了一个特别的类 **Iterator**，可以使用此类来方便迭代数组元素，例如：  
<code><pre>//An ArrayList can produce an Iterator object for you.
Iterator<Particle> it = particles.iterator();
//Once you’ve got the iterator, the hasNext() function will 
//tell us whether there is a Particle for us to run and the next() 
//function will grab that Particle object itself.
while (it.hasNext()) {
	Particle p = it.next();
p.run();</pre></code>



<a name='waibusucai'></a>
### --- 添加外部素材/数据文件 --- ###
给当前项目添加外部数据：  

* 方法1：  
打开项目的保存目录，将素材文件放到“data”文件夹里。
怎么找到项目目录？ 在IDE窗口的菜单里选择 “Sketch / 速写本” → “Show Sketch Folder / 打开程序目录”。 或者快捷键Ctrl+K

* 方法2：  
通过IDE的菜单栏添加：“Sketch / 速写本” → “Add file / 添加文件”

* 方法3：  
直接拖放素材文件到IDE窗口。然后可以Ctrl+K打开目录查看文件是否成功添加

加载文件建议在 steup() 内，初始化时即加载，不放在 draw() 内，否则每一帧都加载一次文件，消耗时间



<a name='duixiangleixing'></a>
##对象类型##
1. 声明对象类型
<code><pre>//举例
class Car { 
  color c;
  float xpos;
  float ypos;
  float xspeed;
  // The Constructor is defined with arguments.
  Car(color tempC, float tempXpos, float tempYpos, float tempXspeed) { 
    c = tempC;
    xpos = tempXpos;
    ypos = tempYpos;
    xspeed = tempXspeed;
  }
//
  void display() {
    stroke(0);
    fill(c);
    rectMode(CENTER);
    rect(xpos,ypos,20,10);
  }
//
  void drive() {
    xpos = xpos + xspeed;
    if (xpos > width) {
      xpos = 0;
    }
  }
}</pre></code>

2. 创建对象
<code><pre>// Example: Two Car objects
Car myCar1;
Car myCar2; // Two objects!</pre></code>

3. 初始化和使用对象
<code><pre>void setup() {
  size(200,200);
  // Parameters go inside the parentheses when the object is constructed.
  myCar1 = new Car(color(255,0,0),0,100,2); 
  myCar2 = new Car(color(0,0,255),0,10,1);
}
//
void draw() {
  background(255);
  myCar1.drive();
  myCar1.display();
  myCar2.drive();
  myCar2.display();
}</pre></code>


4. 对象类型的继承（inheritance）与多态（polymorphism）  
[extends](https://processing.org/reference/extends.html) 声明新类时继承父类的方法和数据  
`class ClassName extends ParentClassName {}`  
[super()](https://processing.org/reference/super.html) 子类引用父类的关键词，允许传入参数  
看如下案例有助理解 extends 和 super 的作用：
<code><pre>class Animal {
int age; Dog and Cat inherit the variable age.
Animal() {
age = 0;
}
Dog and Cat inherit the functions eat() and
sleep().
void eat() {
println("Yum!");
}
void sleep() {
println("Zzzzzz");
}
}
The Dog class is the child (or sub) class,
indicated by the code "extends Animal".
class Dog extends Animal {
Dog() {
super() executes code found in the parent
class.
super();
}
We define bark() in the child class, since it
isn't part of the parent class.
void bark() {
println("WOOF!");
}
}
class Cat extends Animal {
Cat() {
super();
}
void meow() {
println("MEOW!");
}
}</pre></code>



##未分类笔记##

`(float)width` 在计算表达式中变量前添加(float)，指定该变量的数值按浮点数类型来计算  
`brightness` 获得像素的亮度  
`float z = (mouseX/(float)width) * brightness(img.pixels[loc]) - 100.0;`