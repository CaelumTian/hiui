# Progress 进度条  
## 使用指南  
在页面 json 中引入组件   

```json    
{
    "usingComponents": {
        "hi-progress": "/components/progress/index",
    }
}
```  

## 示例  

```html   
<hi-progress percent="25" type="success"/>

<hi-progress percent="{{ per }}" />  
<hi-button bind:btnClick="handlePlus">增加</hi-button>
<hi-button bind:btnClick="handleDes">减少</hi-button>
```


```javascript  
Page({
    data: {
        per: 50
    },
    handlePlus() {
        let per = this.data.per;
        per = per + 20 < 100 ? per + 20 : 100;
        this.setData({
            per: per
        })
    },
    handleDes() {
        let per = this.data.per;
        per = per - 20 > 0 ? per - 20 : 0;
        this.setData({
            per: per
        })
    },
});  
```

## API 
### Progress 属性  
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| ex-class | 根元素外部类样式名 | String | - |
| percent | 百分比 | Number | 0 |
| type | 状态，可选值为 primary, success, warning | String | primary |
| stroke-width | 进度条的线宽, px | Number | 10 |
| hide-info | 隐藏数值 | Boolean | false |  

## 演示
![layout](./images/17.png)

