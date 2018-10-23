# HiUI  duapp   
### 智能小程序 UI 组件库   
## 如何使用  
下载 HiUI 的代码，将 `dist` 目录中的 `components` 文件夹拷贝到自己的项目中。然后按照如下的方式使用组件，例如使用Button 组件。  

1. 添加需要的组件，在页面的json中配置：  

```json   
"usingComponnts": {
    "i-button": "${your path}/components/button/index"
} 
```

2. 在 swan 中使用:  

```html 
<i-button type="primary">这是一个按钮</i-button> 
```  

其他组件的使用方式请参考对应文档。    

## 组件文档  
暂时还没有准备好，敬请期待 


## 组件效果预览    
在 dist 文件夹下的内容，是一个完整的智能小程序。里面包含了为您准备好的所有组件的预览 demo。您可以自行查看。  
由于当前智能小程序还不支持个人申请，为此没有线上项目来提供二维码。demo 截图如下：  


<img src="./docs/images/a1.png" />  
<img src="./docs/images/a2.png" />  
<img src="./docs/images/a3.png" /> 
<img src="./docs/images/a4.png" />
<img src="./docs/images/a5.png" />


## 组件库开发初衷    
目前智能小程序还存在一定的问题：  

1. 功能上的缺失：例如 `Component` 构造器暂不支持 `relations`，`externalClasses` 等内容；
2. 框架本身存在一些功能逻辑 Bug，这里整理了一份组件库目前遇到的问题，供各位开发者参考。[智能小程序问题汇总](./doc/bug.md);    


为了解决这些问题，我们在基于本身业务的风格上开发了该组件库，也帮助他人开发的时候少走一些弯路。当然，有些问题不是通过编写组件库代码能解决的，这也导致了目前组件库还不能很好地支持部分组件的开发。可以暂时通过代码解决的都在组件文档上有说明（奇奇怪怪的代码）。我们也和官方提交了发现的问题，一但有更新，我们也会及时跟进和修改相应代码的。
 

## 更新日志 
### 10.19  
v0.0.1 发布 


