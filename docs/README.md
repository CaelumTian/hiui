# 快速入门     
## 使用组件
下载 HiUI 的代码，将 `dist` 目录中的 `components` 文件夹拷贝到自己的项目中。然后按照如下的方式使用组件，例如使用Button 组件。  

1.添加需要的组件，在页面的json中配置：  

```json   
"usingComponnts": {
    "i-button": "${your path}/components/button/index"
} 
```

2.在 swan 中使用:  

```html 
<i-button type="primary">这是一个按钮</i-button> 
``` 

## 在开发者工具中预览  
将`dist`文件夹中的内容，作为项目，放到智能小程序开发者工具中，查看示例即可。  