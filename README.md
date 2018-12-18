# Gaoxiaobang-Script for Tampermonkey
高校邦脚本-油猴版

## 注意事项
  * 本脚本为油猴使用而准备，如需控制台执行请使用[原始版本](https://github.com/Tyrone2333/Gaoxiaobang-Script)
  * 最后更新日期：2018-12-19，经测试可以使用
  *
## 自动播放视频

- 安装Tampermonkey并启用。安装教程可以自行谷歌/百度或看[这篇文章](https://sspai.com/post/40485)。
- 将脚本文件[`another.js`](https://github.com/blackapodidae/Gaoxiaobang-Script/blob/master/another.js)加入到Tampermonkey中
- 刷新视频播放页面即可

## 网页多开

> 注意，使用脚本后，提示多开的弹窗不影响视频播放，只会影响观看视频。

- 高校邦的反多开检测通过与域名`anti-cheat.gaoxiaobang.com`通信实现，因此屏蔽该域名即可躲避多开检测。
- 通过修改hosts文件指向本地，或者在代理软件中屏蔽该域名，即可完成屏蔽
- 修改hosts文件：
  - 以**管理员权限**运行你喜欢的文本编辑器（记事本即可）
  - 打开C:\Windows\system32\drivers\etc\hosts
  - 在文件末尾加入一行，内容如下，然后保存并关闭
 
 ```
 127.0.0.1 anti-cheat.gaoxiaobang.com
 ```
 
 修改hosts后可能需要刷新DNS缓存，重启计算机或者运行ipconfg /flushdns即可
 
 ## 其他功能
 
 由于高校邦的针对性升级，以前的许多功能都不能用了，因此修了一下脚本（好吧本来是是抄来的）同时也去掉了暂时不能用的功能，只保留了一个自动播放视频。
 
 因此，**现在只有自动播放视频功能**
 
 ~~有时间有兴趣的话大概会研究一下新功能？~~还是咕咕咕咕咕吧
