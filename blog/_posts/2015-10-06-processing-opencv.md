---
title: 'Processing OpenCV视觉识别'
layout: post
guid: 20151006-0528
categories:
 - 笔记
tags:
 - Processing
 - 视觉识别
 - OpenCV
 - 编程开发

---


> Let's Processing! | Processing 视觉识别

要用到外部库，官方推荐了 [Greg Borenstein](http://gregborenstein.com/) 开发的 [OpenCV for Processing](https://github.com/atduskgreg/opencv-processing)库 [[via](https://processing.org/reference/libraries/)]

STEP 1，根据该库GitHub说明文档的指导，先下载最新版本的库文件
> [版本发布页面](https://github.com/atduskgreg/opencv-processing/releases)  
> [0.5.2版本(Processing 3.0可用)](https://github.com/atduskgreg/opencv-processing/releases/download/latest/opencv_processing.zip)

STEP 2, 安装该库
> 解压后，将“opencv_processing”文件夹整个复制到速写本(sketch)目录里的“libraries”文件夹下
> 查看速写本目录的位置？菜单“文件” -> “偏好设定”

STEP 3, 要用到摄像头，需要安装Video库
> IDE菜单“添加工具”，然后找到官方的“Video”库，选择安装


测试和应用  
OpenCV库的“examples”文件里提供了很多实例


---

OpenCV的手势识别
Greg Borenstein 的 OpenCV for Processing 库里提供了脸部识别，但是没有手势识别。我在网上找到了一个 [bolbscanner](https://github.com/robdanet/blobscanner) 的库，里面提供了手势识别方法。