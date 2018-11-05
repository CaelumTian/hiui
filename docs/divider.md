# Divider 分割符  
## 使用指南  
在页面 json 中引入组件   

```json    
{
    "usingComponents": {
        "hi-icon": "/components/icon/index",
    }
} 
```  

## 示例      
```html
<hi-divider content="加载完成，已经没有内容了"/>
<hi-divider size="13px" content="加载完成，已经没有内容了" color="#f96e75" line-color="#f96e75"/>
```  

## API  
### Divider 属性     
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| ex-class | 根元素外部样式类名 | String | -  |
| content | 内容，不定义则使用 slot | String | - |
| size | 文字大小  | String | 12 |
| height | 高度 | Number | 48 |
| color | 文字颜色 | String | #2b3138 |
| line-color | 辅助线颜色 | String | #d6dbe1 |

## 演示
![layout](./images/10.png)
