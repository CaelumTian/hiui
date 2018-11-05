# Swipeout 滑动菜单    
## 使用指南  
在页面 json 中引入组件   

```json    
{
    "usingComponents": {
        "hi-swipeout": "/components/swipeout/index",
    }
} 
```  

## 示例  
```html  
普通使用
<hi-swipeout actions="{{ actions }}" bind:btnClick="btnClick" toggle="{{ toggle }}">
    <view slot="content">
        <view class="action1-title">基本用法</view>
        <view class="action1-content">
            点击按钮可通过修改 toggle 属性关闭
        </view>
    </view>
</hi-swipeout>

与其他组件联合使用
<hi-swipeout ex-item-class="exitem" toggle="{{ toggleCustom }}" actions="{{ actionsCustom }}" bind:btnClick="btnClickCustom">
    <view slot="content" class="sp">
        <view class="head">
            <image src="../../images/avator.jpg"/>
        </view>
        <view class="body">
            <view class="sp-title">
                <view class="name">CaelumTian</view>
                <view class="time">10:23</view>
            </view>
            <view class="sp-content">
                <view class="title">HiUI测试邮件，请勿回复</view>
                <view class="content">点击按钮并不会主动关闭滑动组件，加入自定义按钮样式</view>
            </view>
        </view>
    </view>
</hi-swipeout>
```


```javascript    
Page({
    data: {
        actions: [
            {
                width: 60,
                name: '按钮1'
            },
            {
                width: 60,
                name: '按钮2',
                color: '#fff',
                background: '#67c26c',
                icon: "location"
            }
        ],
        actionsCustom: [
            {
                width: 50,
                background: "#549ef4",
                color: "#fff",
                fontSize: "13px",
                name: "按钮1"
            },
            {
                width: 50,
                background: "#549ef4",
                color: "#fff",
                fontSize: "13px",
                name: "按钮2"
            },
            {
                width: 50,
                background: "#549ef4",
                color: "#fff",
                fontSize: "13px",
                name: "按钮3"
            }
        ],
        toggle: false,
        toggleCustom: false
    },
    btnClickCustom(event) {
        // event.index 判断索引
    },
    btnClick() {
        this.setData({
            toggle: !this.data.toggle
        })
    },
    handleItemClick() {
        //...
    },
    handleCancel() {
        this.handleItemClick();
    }
});
```

## API  
### Swipeout 属性  
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| ex-class | 根元素外部样式类名 | String | - |
| ex-item-class | 划出按钮自定义样式 | String | - |
| actions | 按钮组,具体指参考下面表格 | Array | [] |
| toggle | 当此值由 false 转为 true 时，收起菜单 | Boolean | false |  

### Swipetout actions   
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 按钮文字 | String | - |
| icon | 按钮图标 | String | - |
| color | 按钮文字颜色 | String | - |
| fontsize | 按钮文字大小 | String | - |
| width | 宽度（必须有） | String | - |
| background | 背景色 | String | - |

### Swipetout events  

| 事件名 | 说明 | 返回值
| --- | --- | --- |
| bind:change | 点击菜单项时触发 | 菜单项索引 index |


### Swipeout slot  

| 名称 | 说明 |
| --- | --- |
| contnet | 内容 |



