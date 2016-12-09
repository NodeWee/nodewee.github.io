---
title: '求生之路2局域网联机游戏办法'
layout: post
guid: 20150707-0110
categories:
 - 笔记
tags:
 - 求生之路2
 - 配置方法

---


> 和朋友一起组队玩了两次之后，把配置方法梳理记录一下，方便下次再玩的时候就不用因忘了又要再网上搜来搜去找解决办法

### ★ 修改游戏中的角色名 ###

1. 进入求生之路2的安装目录，找到“rev.ini”文件并打开  
2. 找到“PlayerName=”那一行，把引号里面的文字改成想要起的角色名称即可  
*注意，中文名需三个字符以上，英文名需要4个字符以上，不能用特殊符号  

### ★ 主机（创建游戏）###
1.进入求生之路2的安装目录找到求生之路2的主程序文件，右键发送快捷方式到桌面  
2. 在快捷方式图标上右键→属性→目标，在目标一栏的后面添加如下命令文本“ -steam -secured -console”，注意第一个减号前面要有空格，回车确认。  
3. 双击快捷图标启动游戏  
4. 按“~”键，弹出命令行窗口  
5. 输入“sv_lan 1”，回车确认  
6. 输入“map”+空格+地图名称，开始创建局域网游戏  
7. 游戏创建成功后，按“Win”+“D”快捷键回到电脑桌面  
8. 按“Win”+“R”键盘，打开系统的‘运行’对话框  
9. 在‘运行’对话框中输入“cmd”，回车打开系统命令行程序  
10. 输入“ipconfig”查看本机IP地址。一般是“192.168.”开头的字符，例如“192.168.1.18”  

### ★ 从机（加入游戏） ###
1. 第1到第5步骤同主机  
6. 在游戏的命令行窗口输入“connect”+空格+主机的IP地址，即可连接到主机加入游戏  
  
  
### ★ 命令 ###
按“~”弹出控制台  
sv_lan - 是否用lan (0:no，1:yes， 局域网联机必须设置为1)  
hostname - 修改服务器名（房间门）  
sv_maxplayers X 修改人数，X为人。  
sv_password "密码" - 设置加入游戏的密码  
sv_password "" 取消密码  
sv_gametypes - 设定游戏类型（coop:战役，realism:写实，survival:生存，versus:对抗，teamversus:团队对抗，scavenge:清道夫，teamscavenge:团队清道夫）  
map 地图名 - 换地图或创建游戏  
map 地图名 游戏类型 - 换题图或创建游戏同时设置游戏类型  
changelevel 地图名 - 游戏中更换地图，玩家不掉线更换地图  
changelevel 地图名 游戏模式 - 更换游戏模式，需要重新开始游戏才能生效  
sv_alltalk 0 （0:打开全局语音通话(默认)，1:关闭全局语音通话)  
status 游戏信息，可查看本游戏IP和玩家
ping 查看ping值（网络延迟）
pause - 暂停游戏  
setinfo name*  更改玩家的名字（*代表你的名字改中文名要加""号）  
z_difficulty - 游戏难度(Easy, Normal, Hard, Impossible)   
cl_showfps 1 - (1:显示帧数和地图名，2:显示帧数和平滑率，3:服务器信息，4=显示帧数和日志文件)  
sb_takecontrol * - 游戏中在4个人物之间切换控制(*代表Ellis,Nick,Rochelle,Coach也可以不要后缀为随机切换  
  
** 以下是开启 Cheats 模式可用的命令 **  
sv_cheats - 是否开始作弊 (0: no 1: yes)  
z_background_limit - 同一时间最多在背景出现的丧尸数(得个睇字)     
z_common_limit - 同一时间最多出现的丧尸数  
z_health - 普通丧尸生命值  
thirdpersonshoulder 第三人称方式(再输入一次可还原为第一人称)  
nb_blind 1 所有电脑僵尸都看不到你(但是撞到僵尸还是会攻击你）  
god 0 - 无敌模式（0:关闭，1:开启）  
buddha - 打不死  
noclip - 穿墙  
give health - 加满血  
give ammo - 加满弹夹  
sv_infinite_ammo 1 - 无限弹药不换弹夹  
respawn - 死亡后复活 仅限于复活自己，且在出生点复活  
melee_range 70 - 近战武器的伤害范围数值越高能砍得越远（默认70）  

/--- 角色相关设置  
director_special_battlefield_respawn_interval "10" - vs的复活时间  

/--- warp_* - 传送  
warp_all_survivors_here - 所有人传送到自己身边  
warp_all_survivors_to_checkpoint - 所有人传送到关卡安全门   
warp_all_survivors_to_finale - 所有人传送到关卡终局  
warp_to_start_area - 所有人传送到下一关开始地  

/--- give * 得到\补充物品 物品道具  
give adrenaline     肾上腺素针  
give defibrillator     电震仪器  
give first_aid_kit     医药包  
give pain_pills     药丸  
give gascan     汽油红桶  
give propanetank     煤气罐  
give oxygentank     氧气瓶  
give pipe_bomb     炸弹  
give molotov     燃烧酒瓶  
give vomitjar     胆汁瓶 枪械  
give autoshotgun     1代的连发散弹枪  
give shotgun_spas     2代的连发散弹枪  
give pumpshotgun     1代的单发散弹枪  
give shotgun_chrome     2代的单发散弹枪  
give hunting_rifle     1代的连狙  
give sniper_military     2代的连狙  
give rifle     M16步枪  
give rifle_ak47     AK47步枪  
give rifle_desert     SCAR步枪  
give smg     小型冲锋枪  
give smg_silenced     消声器小型冲锋枪  
give pistol 手枪  
give pistol_magnum     玛格南手枪 搏斗武器  
give crowbar     铁撬棍(仅限第1、2、4大关战役可用)  
give fireaxe     斧头(仅限第1、2、4大关战役可用)  
give katana     东洋武士刀(仅限第1、2、4大关战役可用)  
give weapon_chainsaw     电锯  
give weapon_grenade_launcher     榴弹发射器  
give cricket_bat     板球棒(仅限第1、3大关战役可用)  
give baseball_bat     棒球棍(不可用或未知)  
give frying_pan     平底锅(仅限第3、4、5大关战役可用)  
give electric_guitar     电吉他(仅限第2、5大关战役可用)  
give tonfa 警棍(仅限第5大关战役可用)  
give machete     砍刀(仅限第3、5大关战役可用)  
give weapon_upgradepack_explosive     爆炸子弹升级铁盒  
give weapon_upgradepack_incendiary     燃烧子弹升级铁盒  
give melee     猎人僵尸的手  
give weapon_gnome     圣诞老人  
give weapon_fireworkcrate     一盒烟花  
upgrade_add * 武器升级  
upgrade_add Incendiary_ammo     获得燃烧子弹的升级效果   
upgrade_add explosive_ammo     获得爆炸子弹的升级效果  
upgrade_add laser_sight     获得激光瞄准的升级效果  
/--隐藏武器，所有武器必须要重新读取地图才有伤害，例如过关后。  
give weapon_sniper_awp     麦格农大型狙击枪(CS隐藏武器重新读取地图才有伤害)  
give weapon_sniper_scout     斯太尔小型狙击枪(CS隐藏武器重新读取地图才有伤害)  
give weapon_smg_mp5     MP5冲锋枪(CS隐藏武器重新读取地图才有伤害)  
give weapon_rifle_sg552     SIG SG552步枪(CS隐藏武器重新读取地图才有伤害)  
