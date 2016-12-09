---
title: 'Processing 交互视效入门案例'
layout: post
guid: 20151001-1739
categories:
 - 笔记
tags:
 - Processing
 - 交互视效
 - 编程开发

---


> Let's Processing! | Processing 交互起步

01\. 鼠标坐标 [\[via\]](https://processing.org/tutorials/interactivity/)  
![](./files/2015/1001/p-i-s/001.gif)  
To invert the value of the mouse, subtract the mouseX value from the width of the window and subtract the mouseY value from the height of the screen. 

<code><pre>void setup() {
  size(100, 100);
  noStroke();
}
//
void draw() {
  float x = mouseX;
  float y = mouseY;
  float ix = width - mouseX; // Inverse X
  float iy = height - mouseY; // Inverse Y
  background(126);
  fill(255, 150);
  ellipse(x, height/2, y, y);
  fill(0, 159);
  ellipse(ix, height/2, iy, iy);
}</pre></code>

02\. 鼠标坐标范围 [\[via\]](https://processing.org/tutorials/interactivity/)    
![](./files/2015/1001/p-i-s/002.gif)  
This code asks, “Is the cursor to the right of the left edge and is the cursor to the left of the right edge and is the cursor beyond the top edge and is the cursor above the bottom?” The code for the next example asks a set of similar questions and combines them with the keyword else to determine which one of the defined areas contains the cursor.   

<code><pre>void setup() {
  size(100, 100);
  noStroke();
  fill(0);
}
//
void draw() {
  background(204);
  if ((mouseX <= 50) && (mouseY <= 50)) {
    rect(0, 0, 50, 50); // Upper-left
  } else if ((mouseX <= 50) && (mouseY > 50)) {
    rect(0, 50, 50, 50); // Lower-left
  } else if ((mouseX > 50) && (mouseY <= 50)) {
    rect(50, 0, 50, 50); // Upper-right
  } else {
    rect(50, 50, 50, 50); // Lower-right
  }
}</pre></code>


03\. 键盘事件 [\[via\]](https://processing.org/tutorials/interactivity/)  
![](./files/2015/1001/p-i-s/003.gif)   

<code><pre>void setup() {
  size(100, 100);
  noStroke();
  fill(0);
}
//
void draw() {
  background(204);
  if ((mouseX <= 50) && (mouseY <= 50)) {
    rect(0, 0, 50, 50); // Upper-left
  } else if ((mouseX <= 50) && (mouseY > 50)) {
    rect(0, 50, 50, 50); // Lower-left
  } else if ((mouseX > 50) && (mouseY <= 50)) {
    rect(50, 0, 50, 50); // Upper-right
  } else {
    rect(50, 50, 50, 50); // Lower-right
  }
}</pre></code>



04\. 鼠标单击事件 [\[via\]](https://processing.org/tutorials/interactivity/)  
![](./files/2015/1001/p-i-s/004.gif)  

<code><pre>void setup() {
  size(160, 90);
  fill(0,50);
}
//
void draw() {}
//
void mousePressed(){
  rectMode(CENTER);
  rect(mouseX,mouseY,33,33);
}</pre></code>


05\. 鼠标拖动事件 [\[via\]](https://processing.org/tutorials/interactivity/)  
![](./files/2015/1001/p-i-s/005.gif)  

<code><pre>int dragX, dragY, moveX, moveY;
String button_state;
void setup() {
  size(100, 100);
  noStroke();
  button_state="";
}
//
void draw() {
  background(204);
  fill(0); 
  ellipse(dragX, dragY, 33, 33); // Black circle
  fill(153);
  ellipse(moveX, moveY, 33, 33); // Gray circle
  fill(255);
  text(button_state,10,10);
}
//
void mouseMoved() { // Move gray circle
  moveX = mouseX;
  moveY = mouseY;
  button_state="released button";
}
//
void mouseDragged() { // Move black circle
  dragX = mouseX;
  dragY = mouseY;
  button_state="pressed button";
}</pre></code>


06\. 一摸就抖的文字 [\[via\]](https://processing.org/tutorials/typography/)  
![](./files/2015/1001/p-i-s/006.gif)  

<code><pre>float x = 33;
float y = 60;
//
void setup() {
  size(100, 100);
  textSize(24);
  noStroke();
}
//
void draw() {
  fill(204, 120);
  rect(0, 0, width, height);
  fill(0);
  // If cursor is over the text, change the position
  if ((mouseX >= x) && (mouseX <= x+55) &&
    (mouseY >= y-24) && (mouseY <= y)) {
    x += random(-2, 2);
    y += random(-2, 2);
  }
  text("tickle", x, y);
}
</pre></code>


07\. 滚动的字幕 [\[via\]](https://processing.org/tutorials/text/)  
![](./files/2015/1001/p-i-s/007.gif)  
<code><pre>// An array of news headlines
//
String[] headlines = {
  "Processing downloads break downloading record.", 
  "New study shows computer programming lowers cholesterol.",
  };
//
PFont f;  // Global font variable
float x;  // horizontal location of headline
int index = 0;
//
void setup() {
  size(400,200);
  f = createFont("Arial",16,true);  
  // Initialize headline offscreen to the right 
  x = width; 
}
//
void draw() {
  background(255);
  fill(0);
//
  // Display headline at x  location
  textFont(f,16);        
  textAlign(LEFT);
  text(headlines[index],x,180); 
//
  // Decrement x
  x = x - 3;
//
  // If x is less than the negative width, 
  // then it is off the screen
  float w = textWidth(headlines[index]);
  if (x < -w) {
    x = width; 
    index = (index + 1) % headlines.length;
  }
}</pre></code>


08\. 旋转和缩放文字 [\[via\]](https://processing.org/tutorials/text/)  
![](./files/2015/1001/p-i-s/008.gif)  
<code><pre>float theta;
float ts = 5; // text size
float tsadd=1;
//
void setup(){
  size(200,200);
}
//
void draw(){
  background(0);
  translate(width/2,height/2);
  fill(255);
  rotate(theta);
  textSize(ts);
  textAlign(CENTER);
  text("GIF by NodeWee",0,0);
  theta=theta+0.02;
  ts=ts+tsadd*0.1;
  if (ts>30){tsadd=-1;}
  if (ts<6){tsadd=1;}
}</pre></code>

09\. 逐字显示 [\[via\]](https://processing.org/tutorials/text/)  
![](./files/2015/1001/p-i-s/009.gif)  

<code><pre>String msg="GIF by NodeWee";
int x=5;
int i=0;
//
void setup(){
  size(160,90);
}
//
void draw(){
  textSize(random(9,24));
  text(msg.charAt(i),x,height/2);
  x += textWidth(msg.charAt(i));
  delay(100);
  if (i<msg.length()-1){
    i++;
  }
  else {
    background(128);
    x=5;
    i=0;
  }
}</pre></code>



10\. 会嗨的字母（对象类型的使用） [\[via\]](https://processing.org/tutorials/text/)  
![](./files/2015/1001/p-i-s/010.gif)  

<code><pre>PFont f;
String message = "click mouse to shake it up";
// An array of Letter objects
Letter[] letters;
//
void setup() {
  size(260, 200);
  // Load the font
  f = createFont("Arial",20,true);
  textFont(f);
  //
  // Create the array the same size as the String
  letters = new Letter[message.length()];
  // Initialize Letters at the correct x location
  int x = 16;
  for (int i = 0; i < message.length(); i++) {
    letters[i] = new Letter(x,100,message.charAt(i)); 
    x += textWidth(message.charAt(i));
  }
}
//
void draw() { 
  background(255);
  for (int i = 0; i < letters.length; i++) {
    // Display all letters
    letters[i].display();
    //
    // If the mouse is pressed the letters shake
    // If not, they return to their original location
    if (mousePressed) {
      letters[i].shake();
    } else {
      letters[i].home();
    }
  }
}
///
// A class to describe a single Letter
class Letter {
  char letter;
  // The object knows its original "home" location
  float homex,homey;
  // As well as its current location
  float x,y;
//
  Letter (float x_, float y_, char letter_) {
    homex = x = x_;
    homey = y = y_;
    letter = letter_; 
  }
//
  // Display the letter
  void display() {
    fill(0);
    textAlign(LEFT);
    text(letter,x,y);
  }
//
  // Move the letter randomly
  void shake() {
    x += random(-2,2);
    y += random(-2,2);
  }
//
  // Return the letter home
  void home() {
    x = homex;
    y = homey; 
  }
}</pre></code>

