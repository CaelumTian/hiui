# 智能小程序问题汇总  
这里主要记录一下开发过程中的遇到的问题，所有问题均已反馈给官方。上面会标注官方回复结果，一旦有更新，这里也会同步。部分bug demo 也会记录在 `components/test/` 文件下。
## 默认环境  
* 编译工具：`2.11.8`
* 调试基础库：`1.31.21`  
## Bug 记录 
### createQuerySelectorQuery 回调 this 指向问题 [已确认，编辑器内暂未修复，线上已经修复]  
如下, page 页面，应用 `hi-test` 自定义组件  

```html  
<view class="container">
    <hi-test name="a">这是第一个组件</hi-test>
    <hi-test name="b">这是第二个组件</hi-test>
</view>
```  

`hi-test` 组件定义如下

```html  
<view class="container">
    <slot></slot>
</view> 
``` 


```javascript  
Component({
    properties: {
        name: {
            type: String,
            value: ''
        }
    },
    data: {}, 
    ready() {
        this.init();
    },
    methods: {
        init() {
            swan.createSelectorQuery().in(this).select(".hi-test__container").boundingClientRect((rect) => {
                console.log(this, this.data.name);
            }).exec();
        }
    }
});
```

实际输出结果如下：    
![](https://eux-public.bj.bcebos.com/2018/10/19/bug1.jpg)     

[Bug] 这里应该输出的 nodeId 一样，均为第二个 `hi-test` 组件的信息。

期望结果：
this 应该指向不同的 `hi-test` 组件，且后续回调返回的 rect 信息也应该是针对各自组建的。而不是最后绑定的那个。  

### 组件 properties 与实际表现不一致 [已确认，10月22号提测修复]    
有如下代码:  
page 页面  

```html
<hi-test 
    aType="{{ false }}"></hi-test>   
```    

hi-test 如下  

```html 
<view class="container" bind:tap="handleClick">
    测试一下
    <view s-if="{{ aType }}">如果 aType 为真，则显示</view>
</view> 
``` 

js 如下  

```javascript    
Component({
    properties: {
        aType: {
            type: Boolean,
            value: true
        }
    },
    data: {}, 
    ready() {
        console.log(this.data.aType);
        // 这里输出结果为 true，与预期不符
    }
});
``` 

[Bug] 页面渲染正常，仅输出 `测试一下`; 但是，console 打印信息永远为 true。 

去掉 js 中 properties 中 aType 声明后。console 输出结果正常 false。  

再次修改代码如下：

page 页面：  

```html
<hi-test 
        aType="111"></hi-test>  
```

组件js：  

```javascript
Component({
    properties: {
        aType: {
            type: String,
            value: '222'
        }
    },
    data: {}, 
    ready() {
        console.log(this.data.aType);
        // 输出结果为 111, 复合预期
    }
});  
```

console 输出 aType 值复合预期。经过多组测试，发现该 bug 仅仅为声明 Boolean 类型的时候会发生。 


### 字体图标显示问题  [已确认，待跟进]  
#### 历史问题  
在前几个版本中，自定义组件内，字体图标 `content: '\e456'` 的写法，会被过滤成 `content: 'e456'`,
导致图标无法显示(同类问题 [2018-09-28 百度智能小程序使用字体图标踩坑记](https://www.jianshu.com/p/581f26c45bd3))。在项目中改用 `content:'\\e456'` 即可正常解析。 

#### 目前问题
10月15日下午，发现项目重新编译后，字体图标全都不可用。经查发现，上述问题已经修复(吐槽下，这静默更新了也不通知一声)
。将 `\\` 改回 `\` 后，发现字体资源 (base64) 没有正确引入。最后只能将 `@font-face` 声明从组件 css 中移入 `app.css` 中，显示才正常。  

和官方反馈过，回应是会开会讨论的，暂无下文。  


### 自定义组件内 css 自动追加前缀  [暂无反馈]
该问题，不像是 bug 更像是框架设计问题。描述如下：  
在智能小程序中，自定义组件的 `css` 都会被默认加上组件名称, 例如 `hi-icon` 组件下有 `aclass`。实际输出结果为
`hi-icon__aclass` 。
这样如果我们在 `hi-icon` 组件内想要获取节点，就很不对劲：  

```javascript  
// 错误写法
swan.createSelectorQuery().select('.aclass');

// 正确写法  
swan.createSelectorQuery().select('.hi-icon__aclass');
```

同理，如果父组件想要将类名做为`prop`，也要加上 `hi-icon__` 前缀才可以。 
该问题直接影响到代码编写，需要格外注意。  

### createAnimation 不生效 [待确认]  

```javascript 
Component({
    data: {
        animation: null
    }
    methods: {
        initAnimation() {
            let animation = swan.createAnimation();
            this.setData({
                animation: animation
            }, () => {
                this.startAnimation();
            })
        }
    },
    startAnimation() {
        // 这⾥里里访问 this.data.animation 可以获得没有问题，且是 animation 对象
        // 但是 this.data.animation.translateX 会发现是 undefined; 这就很奇怪了了
        // 去掉 startAnimation, 将⾥里里⾯面的操作直接放到 initAnimation ⾥里里⾯面，没有问题
    }
})
```

## 功能缺失  
目前智能小程序 Component 构造器缺失一些很常用的功能。
### relations [已确认，暂时无法修复]
该属性，无法通过自己编写代码来修复。这就导致我们无法再嵌套组件中，获取组件之间的信息。官方已经确认，由于其
架构问题，暂时无法修复。
为此，建议在编写时，尽量减少组件嵌套的写法。  
### externalClasses [已确认，预计10月23号提测] 
该属性，让我们不能很方便的为自定义组件添加额外样式。目前解决方案通过传入 `ex-class` prop 来代替 (注意类名加前缀)。
### behavior [影响不大，暂无计划]
我们可以自己继承 Component 类，实现复用机制。











